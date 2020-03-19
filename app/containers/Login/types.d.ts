import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface LoginState {
  readonly token: any;
}

/* --- ACTIONS --- */
type LoginActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = LoginState;
type ContainerActions = LoginActions;

export { RootState, ContainerState, ContainerActions };
