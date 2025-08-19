import { Home, ReducerPath, Method } from '../../constants';
import { api } from '../api';

export const homeApi = api(ReducerPath.HOME_API).injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<void, number>({
      query: (page) => ({
        url: Home.GET_CATEGORIES,
        method: Method.GET,
        params: {
          page,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetCategoriesQuery } = homeApi;
