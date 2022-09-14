import { createSlice } from '@reduxjs/toolkit';
import { IBug } from '../../services/commonService';

export interface ICommonState {
  bugs: IBug[];
  lastFetch: Date | null;
}

const initialState: ICommonState = {
  bugs: [],
  lastFetch: null,
};

// actions & reducers
const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {},
});

export default commonSlice.reducer;

// selectors
