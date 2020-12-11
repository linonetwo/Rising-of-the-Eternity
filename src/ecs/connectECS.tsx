import React from 'react';
import { createComponentFilter, query, World } from '@javelin/ecs';

import { world } from '.';

export default function connectECS<T>(
  component: T,
  selector: ReturnType<typeof query>,
): (WrappedComponent: React.ComponentType<T>) => void {
  // get world here
  function connectECSReactComponentWrapper(WrappedComponent: React.ComponentType<T>) {
    const componentsToRender: Array<React.ComponentType<T>> = [];
    for (const [entity, [basicRenderProps]] of selector(world)) {
      const componentWithData = (props: any) => {
        const newProps = mapProps(props);
        return <WrappedComponent {...props} {...newProps} />;
      };
      componentsToRender.push(componentWithData);
    }
  }
  return connectECSReactComponentWrapper;
}
