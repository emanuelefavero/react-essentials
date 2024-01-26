interface CounterAction {
  type: string
}

export function counterReducer(state: number, action: CounterAction) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      if (state === 0) return 0
      return state - 1
    case 'RESET':
      return 0
    default:
      throw new Error('Unexpected reducer action')
  }
}
