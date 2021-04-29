import React, { Component } from 'react'
import '../css/Button.css'

class Button extends Component {
    constructor() {
        super()
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }
    increment() {
        this.props.addTime(this.props.idForFunc)
    }
    decrement() {
        this.props.subTime(this.props.idForFunc)
    }
    render() {
        return (
            <div className="Button">
                <h3 className="Button-title">{this.props.title}</h3>
                <div className="Button-button">
                    <span className="Button-time"> {this.props.time} </span>
                    <button className="Button-plus" onClick={this.increment} disabled={this.props.isRunning}> + </button>
                    <button className="Button-minus" onClick={this.decrement} disabled={this.props.isRunning}> - </button>
                </div>
            </div>
        )
    }
}

export default Button
