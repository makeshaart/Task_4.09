// src/store.ts
import { createEffect, createStore } from 'effector';
import { Position } from './types';
import { fetchPositions, updatePositions } from './utils/api';

export const positionsStore = createStore<Position[]>([]);

export const fetchPositionsFx = createEffect<void, Position[]>({
  handler: fetchPositions,
});

export const updatePositionsFx = createEffect<Position[], void>({
  handler: updatePositions,
});

positionsStore.on(fetchPositionsFx.doneData, (_, positions) => positions);
