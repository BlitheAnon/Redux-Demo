import React from 'react';
import { mapStateToProps, mapDispatchToProps } from '../reducer';
import { connect } from 'react-redux';
import { _PropsBro, _State } from '../IProps';
class Component1_ extends React.Component<_PropsBro, _State>{
  render() {
    console.log(this.props)
    let { broAdd, broCut, bro } = this.props;

    // console.log('渲染组件1');
    return (
      <div style={{ border: '1px solid red' }}>
        <span>叔组件</span>
        <br />
        <span>
          <button onClick={broAdd}>兄弟+</button>
          <button onClick={broCut}>兄弟-</button>
          <span> 兄弟传参:{bro}</span>
        </span>
      </div>
    )
  }
}

const C1 = connect(mapStateToProps, mapDispatchToProps)(Component1_)

export default C1;