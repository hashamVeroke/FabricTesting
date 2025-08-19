import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

// Define the initial state using that type
const initialState: IConfigState = {
  walletId: '',
  language: 'en',
  phoneNumber: '',
};

const configSlice = createSlice({
  name: 'config',
  initialState,
  extraReducers: () => {},
  reducers: {
    setConfigData(state, action: PayloadAction<Partial<IConfigState>>) {
      // Update only the properties that are provided in the action payload
      // This preserves existing state for properties not included in the payload
      Object.assign(state, action.payload);
    },
  },
});
export default configSlice;
