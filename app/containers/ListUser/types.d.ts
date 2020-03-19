import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { ApplicationRootState } from 'types';

/* --- STATE --- */
interface ListUserState {
  readonly data: any;
}

/* --- ACTIONS --- */
type ListUserActions = ActionType<typeof actions>;

/* --- EXPORTS --- */
type RootState = ApplicationRootState;
type ContainerState = ListUserState;
type ContainerActions = ListUserActions;

export { RootState, ContainerState, ContainerActions };
