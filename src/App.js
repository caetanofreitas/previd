import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Routes from 'utils/constants/routes';
import 'assets/globalStyle.css';

const App = () => {
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  );
}

export default App;
