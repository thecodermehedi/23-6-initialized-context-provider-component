export type TTodo = {
 id: string,
 name: string,
 isCompleted: boolean
}

export type TTodoState = TTodo[];

export type TTodoAction = {
 type: string,
 payload: TTodo
}

export interface ITodoContext {
 state: TTodoState;
 dispatch: React.Dispatch<TTodoAction>;
}

export type TTodoChildren = {
 children: React.ReactNode
}

export const TodoActionTypes = {
 ADD_TASK: 'ADD_TASK',
 DELETE_TASK: 'DELETE_TASK',
 TOGGLE_TASK: 'TOGGLE_TASK',
} as const;
