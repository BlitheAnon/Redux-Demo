import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import {reducer} from './reducer';
import App from './App';

//store本质上是一个状态树，保存了所有对象的状态
//创建store
const store = createStore(reducer);

console.log('初始state:' + store.getState())

//订阅事件，用来监听？
store.subscribe(() => {
  console.log('监听新state:' + store.getState())
  //用于更新页面
})

//派发事件，修改state
// store.dispatch(actionAdd)
// store.dispatch(actionAdd)
// store.dispatch(actionCut)
// store.dispatch(actionAdd)

//Provider：它是react-redux 提供的一个 React 组件，
//作用是把state传给它的所有子组件，让子组件共享数据
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

