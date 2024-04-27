import { User, UserId, UserWithId, createUser, deleteUserById, modificatedUser } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
	const dispatch = useAppDispatch();
  const addUser = ({name,email,github}:User) => {
    dispatch(createUser({name,email,github}))
  }
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};
  const modificationUser = ({id,name,email,github}:UserWithId) => {
    dispatch(modificatedUser({id,name,email,github}))
  }

	return { removeUser, addUser, modificationUser };
};
