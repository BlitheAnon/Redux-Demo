import React from 'react';
import { connect } from 'react-redux';
import CCCC from './Son/Component1';
import Component1_ from './Son/Component1_';
import { _Props, _State } from './IProps';
import { mapStateToProps, mapDispatchToProps } from './reducer';


class App extends React.Component<_Props, _State>{
  render() {
    // const {add,cut}=this.props;
    // console.log('渲染App组件');
    let { add, cut, tiger } = this.props;
    return (
      <div>
        <h1>redux祖孙，兄弟传值</h1>
        <div style={{ border: '1px solid red' }}>
          <span>爷组件</span>
          <span> 爷孙传参:{tiger}</span>
          <br />
          <button onClick={add}>爷孙+</button>
          <button onClick={cut}>爷孙-</button>
          <CCCC />
          <Component1_ />
        </div>
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
