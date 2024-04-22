import type { appDispatch, rootState } from "../store";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector : TypedUseSelectorHook<rootState> = useSelector;
export const useAppDispatch : () => appDispatch = useDispatch;