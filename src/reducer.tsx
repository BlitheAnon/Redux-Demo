//redux reducer
//action

//action
export const actionAdd = {
  type: '增'
}

export const actionCut = {
  type: '减'
}

//把当前 Redux store state 映射到展示组件的 props 中
export function mapStateToProps(state: any) {
  return {
    tiger: state
  }
}

//分发 action
export function mapDispatchToProps(dispatch: any) {
  return {
    add: () => { dispatch(actionAdd) },
    cut: () => { dispatch(actionCut) }
  }
}

//reducer,纯函数
export const reducer = (state = 0, action: any) => {
  switch (action.type) {
    case '增':
      return state += 1;
    case '减':
      return state -= 1;
    default:
      return state;
  }
}