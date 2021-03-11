import React, { useEffect, useReducer, useState } from 'react'

const initialState = {
  count: 0,
  step: 1
}

function reducer(state, action) {
  const { count, step } = state

  if (action.type === 'tick') {
    return { count: count + step, step }
  } else if (action.type === 'step') {
    return { count, step: action.step }
  } else {
    throw new Error()
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { count, step } = state

  // React会保证dispatch在组件的声明周期内保持不变

  // 你可以从依赖中去除dispatch, setState, 和useRef包裹的值因为React会确保它们是静态的
  // 不过你设置了它们作为依赖也没什么问题
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: 'tick' })
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <h1>{count}</h1>
      <input value={step} onChange={e => dispatch({ type: 'step', step: Number(e.target.value) })} />
    </>
  )
}

// const Counter = () => {
//   const [count, setCount] = useState(0)
//   const [step, setStep] = useState(1)

//   useEffect(() => {
//     console.log('emmm')
//     const id = setInterval(() => {
//       setCount(c => c + step)
//     }, 1000)
//     return () => clearInterval(id)
//   }, [step])

//   return (
//     <>
//       <h1>{count}</h1>
//       <input value={step} onChange={e => setStep(Number(e.target.value))} />
//     </>
//   )
// }

export default Counter
