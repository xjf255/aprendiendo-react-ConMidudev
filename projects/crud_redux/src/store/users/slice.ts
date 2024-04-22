/* slice es una parte de la store */
import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name:string,
  email:string,
  github:string
}

export interface UserWithId extends User{
  id:string
}

const initialState:UserWithId[] = [
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
]


export const userSlice = createSlice({
  name:"users",
  initialState,
  reducers: {}
})

export default userSlice.reducer;