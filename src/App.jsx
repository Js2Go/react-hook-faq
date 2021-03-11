import React, { useEffect, useRef, useState } from 'react'
import Counter from './components/Counter'
import './App.css'

function App({ color }) {
  const [count, setCount] = useState(0)

  const countRef = useRef(count)

  // useEffect(fn, [])和compoentDidMount的行为不一致，useEffect会捕获state和prop
  // 如果要获取最新的state和prop 需要使用ref
  useEffect(() => {
    // TODO
    // console.log(color)
    // setInterval(() => {
    //   setCount(count+1)
    //   countRef.current = 222
    // }, 1000)
    // setInterval(() => {
    //   console.log(count, countRef.current)
    // }, 2000)
  }, [])

  const handleAlertClick = () => {
    setTimeout(() => {
      alert('You clicked on: ' + count)
    }, 3000)
  }

  // wrong
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000)
  //   return () => clearInterval(id)
  //   // need count as a dep
  // }, [])

  // this be called a wrong dep
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(count + 1)
  //   }, 1000)
  //   return () => clearInterval(id)
  // }, [count])

  // other way
  // this is a good way
  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setCount(c => c + 1)
  //   }, 1000)
  //   return () => clearInterval(id)
  // }, [])

  return (
    <div className="App">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={handleAlertClick}>
        Show alert
      </button>

      <Counter />
    </div>
  )
}

export default App
