import React from 'react';
import { Provider } from 'react-redux';
import { store } from './state';
import { RepositoriesList } from './components/RepositoriesList';

export const ReduxTS = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hola mundo</h1>
      </div>
      <RepositoriesList />
    </Provider>
  );
};
