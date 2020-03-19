import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface SigupState {
  readonly default: any;
}

/* --- ACTIONS --- */
type SigupActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = SigupState;
type ContainerActions = SigupActions;

export { RootState, ContainerState, ContainerActions };
