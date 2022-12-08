import React, { Component } from "react";
import styles from '../func/style.module.css'

export class Form extends Component {

    state = {
        name: '',
        count: 0
    }

    handleChange = (event) => {
        this.setState({ name: event.target.value })
    }

    handleClick = (event) => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <>
                <h1>Classes component</h1>
                <h2>Name: {this.state.name}</h2>
                <input onChange={this.handleChange} type="text" />
                <p>Count: {this.state.count}</p>
                <button className={styles.btn}
                    onClick={this.handleClick}>COUNT +</button>
            </>
        )
    }
}