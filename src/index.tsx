import { Provider } from 'react-redux';
import RoutesNavigator from './navigation';

import { store } from './store';
import './translations';
import type { ISouqAppProps } from './types';
export { default as FabricTestingView } from './FabricTestingViewNativeComponent';
export * from './FabricTestingViewNativeComponent';

export const FabricApp = (prop: ISouqAppProps) => {
  return (
    <Provider store={store}>
      <RoutesNavigator {...prop} />
    </Provider>
  );
};
