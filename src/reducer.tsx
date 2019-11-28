//redux reducer
//action

//action
export const actionAdd = {
  type: '增'
}

export const actionCut = {
  type: '减'
}

//action
export const actionBroAdd = {
  type: '兄弟增'
}

export const actionBroCut = {
  type: '兄弟减'
}

interface IState {
  tiger: number;
  bro: number;
}

//设置默认值
const initialState = {
  tiger: 0,
  bro: 0
};

//把当前 Redux store state 映射到展示组件的 props 中
export function mapStateToProps(state: IState) {
  // console.log('mapStateToProps')
  // console.log(state)
  //设置默认值
  return {
    tiger: state.tiger,
    bro: state.bro,
  };
}

//分发 action
export function mapDispatchToProps(dispatch: any) {
  return {
    add: () => { dispatch(actionAdd) },
    cut: () => { dispatch(actionCut) },
    broAdd:()=>{dispatch(actionBroAdd)},
    broCut:()=>{dispatch(actionBroCut)},
  }
}

//子孙交互reducer,纯函数
//在 default 情况下返回旧的 state。遇到未知的 action 时，一定要返回旧的 state。
export const reducerTiger = (state = initialState, action: any) => {
  switch (action.type) {
    case '增':
      return Object.assign({}, state, {
        tiger: state.tiger + 1
      })
    case '减':
      return Object.assign({}, state, {
        tiger: state.tiger - 1
      })
    case '兄弟增':
      return Object.assign({}, state, {
        bro: state.bro + 1
      })
    case '兄弟减':
      return Object.assign({}, state, {
        bro: state.bro - 1
      })
    default:
      return state;
  }
}
