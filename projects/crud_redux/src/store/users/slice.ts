/* slice es una parte de la store */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = string;

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Fernando Diaz",
		email: "fernando@email.com",
		github: "xjf255",
	},
	{
		id: "2",
		name: "Yasman hernandez",
		email: "yasmanito@email.com",
		github: "yass",
	},
	{
		id: "3",
		name: "Rosario",
		email: "rose@email.com",
		github: "rose",
	},
];

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const initialState: UserWithId[] = (() => {
	const persistedState = localStorage.getItem("__redux__state");
	if (persistedState) {
		return JSON.parse(persistedState).user;
	}
	return DEFAULT_STATE;
})();

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		createUser: (state, action: PayloadAction<User>) => {
			console.log(action.payload);
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
    returnUser:(state,action:PayloadAction<UserWithId>) => {
      const isUserRemove = state.some(user => user.id === action.payload.id)
      if(!isUserRemove) return [...state,action.payload]
    }
	},
});

export default userSlice.reducer;

export const { deleteUserById,createUser,returnUser } = userSlice.actions;
