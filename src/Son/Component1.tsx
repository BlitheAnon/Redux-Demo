import React, { Component } from 'react';
import { C2 as Component2 } from './Component2';

const Component1 = () => {
  // console.log('渲染组件1');
  return (
    <div style={{ border: '1px solid red' }}>
      <span>组件1</span>
      <Component2 />
    </div>
  )
}

export default Component1;