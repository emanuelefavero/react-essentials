import React from 'react'

interface CounterProps {
  initialValue?: number
}

interface CounterState {
  count: number
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)

    this.state = {
      count: props.initialValue || 0,
    }
  }

  // If you want to dynamically update the state of a component based on props, you can use the static method getDerivedStateFromProps
  /*
  static getDerivedStateFromProps(props: CounterProps, state: CounterState) {
    if (props.initialValue !== state.count) {
      return {
        count: props.initialValue || 0,
      }
    }
    
    return null
  }
  */

  // ------------------------------------------------------------------------
  // * Lifecycle Methods *

  // If you want to perform an action after the component is mounted, you can use the componentDidMount method
  /*
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: 10,
      })
    }, 1000)
  }
  */

  // If you want to prevent a component from updating, you can use the shouldComponentUpdate method
  /*
  shouldComponentUpdate() {
    return false
  }
  */

  // If you want to perform an action before the component is unmounted, you can use the componentWillUnmount method
  /*
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
  */

  // If you want to perform an action after the component is updated, you can use the componentDidUpdate method
  /*
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  */

  // ------------------------------------------------------------------------

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <p className='font-bold text-2xl text-pink-400'>{this.state.count}</p>
        <button onClick={this.incrementCount} className='bg-green-600 p-1'>
          Add
        </button>
      </div>
    )
  }
}

export default Counter
