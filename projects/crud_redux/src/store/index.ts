import { configureStore, type Middleware } from "@reduxjs/toolkit";
import { toast } from "sonner";
import userReducer, { returnUser } from "./users/slice";

const persistanceLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux__state", JSON.stringify(store.getState()));
	};

const syncWithDataBaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const previousState = store.getState() as rootState;
		const { type, payload } = action;
		next(action);
		if (type === "users/deleteUserById") {
			const idUser = payload;
			const userToRemove = previousState.user.find(
				(user) => user.id === idUser,
			);
			fetch(`https://jsonplaceholder.typicode.asasas/users/${payload}`, {
				method: "DELETE",
			})
				.then((res) => {
					if (res.ok) toast.success("Usuario eliminado Correctamente");
					throw new Error("Error al eliminar usuario");
				})
				.catch(() => {
					if (userToRemove) store.dispatch(returnUser(userToRemove));
					toast.error("Error al eliminar usuario");
				});
		}
	};

/* La store es donde guardamos todo(estado,acciones,reducers) */

export const store = configureStore({
	reducer: {
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(
			persistanceLocalStorageMiddleware,
			syncWithDataBaseMiddleware,
		);
	},
});

// exporta el rootstate = returna el type <obtine el tipo de la funcion>
export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
