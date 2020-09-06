import { Query, Selector, SelectorResult, World } from '@javelin/ecs';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type WorldProviderApi = {
  world: World;
  registerSubsystem: (subsystem: (world: World, data: unknown) => void) => () => void;
};

const WorldContext = createContext<WorldProviderApi>({
  world: (undefined as unknown) as World,
  registerSubsystem() {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  },
});

type Subsystem = (world: World, data: unknown) => unknown;

interface IWorldProviderProps {
  world: World;
  children: React.ReactNode;
}
export function WorldProvider(props: IWorldProviderProps): JSX.Element {
  const { world } = props;
  // cache user-created systems here, allowing user to register new system for query
  const [subsystems, setSubsystems] = useState<Subsystem[]>([]);
  const registerSubsystem = useCallback((subsystem: Subsystem) => {
    setSubsystems((subsystems) => {
      if (!subsystems.includes(subsystem)) {
        return [...subsystems, subsystem];
      }
      return subsystems;
    });
    // return a function to allow user unregister system from cache
    return () => setSubsystems((subsystems) => subsystems.filter((system) => subsystem !== system));
  }, []);

  // register a caller system to manage all user-created subsystems
  useEffect(() => {
    const subsystemCallerSystem = (world: World, data: unknown) => {
      for (const subsystem of subsystems) {
        subsystem(world, data);
      }
    };

    world.addSystem(subsystemCallerSystem);

    return () => world.removeSystem(subsystemCallerSystem);
  }, [subsystems]);

  // api for consumers hooks to use
  const api = useMemo(() => {
    return { world, registerSubsystem };
  }, [world, registerSubsystem]);

  return <WorldContext.Provider value={api}>{props.children}</WorldContext.Provider>;
}

function useWorld() {
  return useContext(WorldContext);
}

export interface MappedComponentProps<S extends Selector> {
  entity: number;
  components: SelectorResult<S>;
}

export function useMappedQuery<S extends Selector>(
  query: Query<S>,
  Component: React.ComponentType<MappedComponentProps<S>>,
): JSX.Element[] {
  const [components, setComponents] = useState<JSX.Element[]>([]);
  const { registerSubsystem, world } = useWorld();
  const subsystem = useCallback(() => {
    const elements: JSX.Element[] = [];

    for (const [entity, [...components]] of query(world)) {
      const element = <Component entity={entity} components={components as SelectorResult<S>} />;
      elements.push(element);
    }

    setComponents(elements);
  }, [query]);

  useEffect(() => {
    return registerSubsystem(subsystem);
  }, [subsystem]);

  return components;
}
