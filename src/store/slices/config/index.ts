import type { RootState } from '../../index';
import configSlice from './slice';

// Reducer
export const configSliceReducer = configSlice.reducer;

// Actions
export const { setConfigData } = configSlice.actions;
// Selectors

export const selectWalletId = (state: RootState) => state.config.walletId;
export const selectLanguage = (state: RootState) => state.config.language;
export const selectPhoneNumber = (state: RootState) => state.config.phoneNumber;
