import { User, UserId, createUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();
  const addUser = ({name,email,github}:User) => {
    dispatch(createUser({name,email,github}))
  }
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser, addUser };
};
