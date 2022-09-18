import { configureStore } from '@reduxjs/toolkit';
import commonReducer, { ICommonState } from './features/commonSlice';

export interface IAppState {
  common: ICommonState;
}

export const rootStore = configureStore({
  reducer: {
    common: commonReducer,
  },
});

export type TGetState = typeof rootStore.getState;
export type TRootState = ReturnType<typeof rootStore.getState>;
export type TAppDispatch = typeof rootStore.dispatch;
