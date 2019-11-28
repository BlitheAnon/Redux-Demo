import React from 'react';
import { _Props, _State } from '../IProps';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../reducer';

class Component2 extends React.Component<_Props, _State>{
  render() {
    let { tiger, add, cut } = this.props;
    // let {triger}=this.state;
    // console.log('渲染组件2');
    // console.log(this.props);
    return (
      <div style={{ border: '1px solid red' }}>
        <span>子组件 </span>
        <span>爷孙传参:{tiger}</span>
        <br/>
        <button onClick={add}>爷孙+</button>
        <button onClick={cut}>爷孙-</button>
      </div>
    )
  }
}

export const C2 = connect(mapStateToProps, mapDispatchToProps)(Component2);