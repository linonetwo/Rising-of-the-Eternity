import { createTopic } from '@javelin/ecs';

// ("spawnPawn", entity: number, position: [x: number, y: number])
type SpawnPawnCommand = ['spawnPawn', [number, number]];

export const spawnPawnTopic = createTopic<SpawnPawnCommand>();
