import { Pet } from './models/pet.model';

export interface IAppState {
  pets: Pet[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  pets: [],
  lastUpdate: null
}

export function rootReducer(state, action) {
  return state
}