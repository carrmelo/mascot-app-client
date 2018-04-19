import { IPet } from './pet';

export interface IAppState {
  pets: IPet[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  pets: [],
  lastUpdate: null
}

export function rootReducer(state, action) {
  return state
}