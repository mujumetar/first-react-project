import { Child } from './components/child'
import { Parent } from './components/parents';
import './App.css'

function App() {

  
  let obj = {
    name: "Mujju",
    surname: "Mujju",
    age: 21,
    role: "front-end developer"
  }
  let arr = [1,2,3,4,5,6,7,8];
  
  return (
    <>
    <Child props={arr} />
    <Parent props={obj} />
    </>
  )
}

export default App
