import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/slice'

/* La store es donde guardamos todo(estado,acciones,reducers) */

export const store = configureStore({
	reducer: {
    user:userReducer
  },
});

// exporta el rootstate = returna el type <obtine el tipo de la funcion>
export type rootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch