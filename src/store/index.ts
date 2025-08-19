import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { homeApi } from '../services';
import { configSliceReducer } from './slices';

const reducers = combineReducers({
  config: configSliceReducer,
  [homeApi.reducerPath]: homeApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware({
      serializableCheck: false,
    }).concat(homeApi.middleware);

    return middlewares;
  },
});

setupListeners(store.dispatch);

export { store };
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export * from './slices';
