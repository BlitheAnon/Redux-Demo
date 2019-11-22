import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import CCCC from './Component1';

// import {createStore} from 'redux';


const componentName = [1, 2, 3, 4];

//action
const actionAdd = {
  type: '增'
}

const actionCut = {
  type: '减'
}

//reducer,纯函数
const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case '增':
      return state += 1;
    case '减':
      return state -= 1;
    default:
      return state;
  }
}

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

//把当前 Redux store state 映射到展示组件的 props 中
function mapStateToProps(state: any) {
  return {
    tiger: state
  }
}

//分发 action
function mapDispatchToProps(dispatch: any) {
  return {
    add: () => { dispatch(actionAdd) },
    cut: () => { dispatch(actionCut) }
  }
}

class Div extends React.Component{
  render(){
    // const {add,cut}=this.props;
    console.log(this.props);
    // let {add,cut}=this.props;
    return (
      <div>
        <CCCC component={componentName} />
        <button onClick={()=>{}}>按钮+</button>
        <button onClick={()=>{}}>按钮-</button>
      </div>
    )
  }
}
// const Div = () => {
//   return (
//     <div>
//       <CCCC component={componentName} />
//       <button onClick={()=>{}}>按钮+</button>
//       <button>按钮-</button>
//     </div>
//   )
// }

//实现容器组件，将容器和redux关联，关联state action 组件
//connect：一个高阶组件
/**
 * 有四个参数([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])，
 * 后面两个参数可以不写，不写的话它是有默认值的。
 * 我们主要关注前两个参数mapStateToProps和mapDispatchToProps。
 */
const Dive = connect(mapStateToProps, mapDispatchToProps)(Div)

//Provider：它是react-redux 提供的一个 React 组件，
//作用是把state传给它的所有子组件，让子组件共享数据
ReactDOM.render(<Provider store={store}><Dive /></Provider>, document.getElementById('root'));

