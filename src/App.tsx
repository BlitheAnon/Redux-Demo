import React from 'react';
import { connect } from 'react-redux';
import CCCC from './Son/Component1';
import { _Props, _State } from './IProps';
import { mapStateToProps, mapDispatchToProps } from './reducer';


class App extends React.Component<_Props, _State>{
  render() {
    // const {add,cut}=this.props;
    // console.log('渲染App组件');
    let { add, cut, tiger } = this.props;
    return (
      <div>
        <div style={{ border: '1px solid red' }}>
          <span>组件App</span>
          <span>redux参数传递:{tiger}</span>
          <button onClick={add}>按钮+</button>
          <button onClick={cut}>按钮-</button>
        </div>
        <CCCC />
      </div>
    )
  }
}

//实现容器组件，将容器和redux关联，关联state action 组件
//connect：一个高阶组件
/**
 * 有四个参数([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])，
 * 后面两个参数可以不写，不写的话它是有默认值的。
 * 我们主要关注前两个参数mapStateToProps和mapDispatchToProps。
 */
const Dive = connect(mapStateToProps, mapDispatchToProps)(App)

export default Dive;
