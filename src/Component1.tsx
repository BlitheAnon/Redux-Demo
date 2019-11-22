import React, { Component } from 'react';
import {Component2,Component3 as C3} from './Component2';
import { IProps } from './IProps';

const Component1 = (props:IProps) => {
  return (
    <div>
      <div>{props.component[0]}</div>
      <Component2 component={props.component}/>
      <C3 component={props.component}/>
    </div>
  )
}

export default Component1;