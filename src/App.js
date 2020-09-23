import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Playground, store } from 'graphql-playground-react';
import { getPlayGroundSettings, getConfig } from './settings';

const token = ''; //ADD YOUR VALID TOKEN
const url = ''; // ADD API URL

function App() {
  return (
    <Provider store={store}>
      <Playground
        config={getConfig(token, url)}
        settings={getPlayGroundSettings()}
      />
    </Provider>
  );
}

export default App;
