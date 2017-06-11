import React from 'react'
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import ReactDOM from 'react-dom'
import RootComponent from './components/RootComponent';
import store from './store';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RootComponent />
    </Provider>,
    document.getElementById('root')
  );
}

//subscribe関数に、現在のstateの状況を画面に表示する関数をセット
store.subscribe(render)

//最初に画面を表示
window.onload = render;
