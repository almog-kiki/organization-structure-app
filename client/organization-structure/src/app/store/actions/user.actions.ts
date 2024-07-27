import { Action, createAction, props  } from '@ngrx/store';
import { UserItem } from '../models/user.model';


export const ADD_USER = "ADD_USER";

export const AddUserAction = createAction(
    ADD_USER,
    props<{payload: {user: UserItem}}>()
);


export const add = createAction('[Counter Component] add');

// export enum UserActionType {
//   ADD_ITEM = '[USER] Add USER',
// }

// export class AddUserAction implements Action {
//   readonly type = UserActionType.ADD_ITEM;
//   constructor(public payload: UserItem) {}
// }

// export type UserAction = AddUserAction;
