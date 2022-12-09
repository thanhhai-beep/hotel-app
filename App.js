import React from "react";
import AppNavigation from './App/Navigation/AppNavigation';
import { store } from './App/Redux/store';
import { Provider } from 'react-redux';


export default function App() {

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
