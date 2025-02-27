import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../config/store";

export const useAppDispatch = useDispatch.withTypes<RootDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;