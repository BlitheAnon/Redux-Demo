import React from 'react';
import { _Props, _State } from '../IProps';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../reducer';

class Component2 extends React.Component<_Props, _State>{
  render() {
    let { tiger, add, cut } = this.props;
    // let {triger}=this.state;
    // console.log('渲染组件2');
    console.log(this.props);
    return (
      <div style={{ border: '1px solid red' }}>
        <span>组件2</span>
        <span>redux参数传递:{tiger}</span>
        <button onClick={add}>按钮+</button>
        <button onClick={cut}>按钮-</button>
      </div>
    )
  }
}

export const C2 = connect(mapStateToProps, mapDispatchToProps)(Component2);