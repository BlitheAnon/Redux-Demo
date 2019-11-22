import React from 'react';
import { Component4 } from './Component4';
import { IProps } from './IProps';

export function Component2(props:IProps) {
  return (
    <div>{props.component[1]}</div>
  )
}

export const Component3 = (props:IProps) => {
  return (
    <div>
      <div>{props.component[2]}</div>
      <Component4 component={props.component}/>
    </div>
  )
}