import { useState } from 'react'
import { Form } from './components/classes/Form'
import { Form as FuncForm } from './components/func/Form'
import styles from './components/func/style.module.css'

export function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <>
      <Form />
      <hr />
      <button className={styles.btn}
        onClick={() => setToggle(!toggle)}>
        {toggle ? 'hide' : 'show'}
      </button>
      {/* <FuncForm title="Function components" /> */}
      {toggle && <FuncForm title="Function components" />}
    </>
  )
}
