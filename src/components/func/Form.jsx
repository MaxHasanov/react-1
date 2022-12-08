import { useState } from "react"
import styles from './style.module.css'

export function Form(props) {

    const [name, setName] = useState('Maxim')
    const [count, setCount] = useState(0)

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <h1 style={{ color: 'green' }}>{props.title}</h1>
            <h2 className={styles.title}>Name: {name}</h2>
            <input onChange={handleChange} type="text" />
            <p>Count: {count}</p>
            <button className={styles.btn}
                onClick={handleClick}>COUNT +</button>
        </>
    )
}