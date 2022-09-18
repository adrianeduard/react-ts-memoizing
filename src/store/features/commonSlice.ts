import { IAppState } from './../rootStore';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBugs, IBug } from '../../services/commonService';
import { createSelector } from 'reselect';

export interface ICommonState {
  bugs: IBug[];
  lastFetch: number | null;
  pageNumber: number;
  pageSize: number;
  counter: number;
}

const initialState: ICommonState = {
  bugs: [],
  lastFetch: null,
  pageNumber: 1,
  pageSize: 3,
  counter: 1,
};

// reducers
const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    counterIncremented: (
      state: ICommonState,
      action: PayloadAction<number>
    ) => {
      state.counter = action.payload;
    },
    bugsLoaded: (
      state: ICommonState,
      action: PayloadAction<
        { pageNumber: number; pageSize: number } | undefined
      >
    ) => {
      const { pageNumber, pageSize } = action.payload || {
        pageNumber: initialState.pageNumber,
        pageSize: initialState.pageSize,
      };
      const response = getBugs(pageNumber, pageSize);
      state.bugs = [...state.bugs, ...response.bugs];
      state.pageNumber = response.pageNumber;
      state.pageSize = response.pageSize;
      state.lastFetch = Date.now();
    },
  },
});

export const { counterIncremented, bugsLoaded } = commonSlice.actions;
export default commonSlice.reducer;

// selectors
export const getCounter = createSelector(
  (store: IAppState) => store.common,
  (state: ICommonState) => state.counter
);

export const getPageNumber = createSelector(
  (store: IAppState) => store.common,
  (state: ICommonState) => state.pageNumber
);

export const getPageSize = createSelector(
  (store: IAppState) => store.common,
  (state: ICommonState) => state.pageSize
);

export const getBugList = createSelector(
  (store: IAppState) => store.common,
  (state: ICommonState) => state.bugs
);
