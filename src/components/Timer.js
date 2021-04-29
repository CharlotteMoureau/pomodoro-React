import React, { Component } from 'react'
import '../css/Timer.css'

class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            minute: this.props.workTime,
            seconds: 0,
            intervalId: '',
            isWorkTime: true,
            isLongBreakTime: false,
            pomodoro: 0,
            start: false
        }
        this.playStop = this.playStop.bind(this)
        this.reset = this.reset.bind(this)
        this.changeMinute = this.changeMinute.bind(this)
    }
    playStop(e) {
        const action = e.target.dataset.type

        switch (action) {
            case 'start':
                this.props.play(true)
                this.startTimer()
                if (this.state.start = true) {

                } else {
                    this.setState({
                        minute: this.props.workTime,
                        start: true
                    })
                }
                break
            case 'stop':
                this.props.play(false)
                clearInterval(this.state.intervalId)
                break
            default: break
        }
    }
    reset(e) {
        const action = e.target.dataset.type

        switch (action) {
            case 'reset':
                this.props.reset()
                this.setState({
                    minute: 25,
                    seconds: 0,
                    start: false
                })
                break
            default: break
        }
    }
    changeMinute(sessionTime) {
        this.setState({
            minute: sessionTime
        })
    }
    correctMinute() {
        return this.state.start ? this.state.minute : this.props.workTime
    }
    startTimer() {
        let intervalId = setInterval(() => {
            switch (this.state.seconds) {
                case 0:
                    if (this.state.pomodoro === this.props.breakCycle) {
                        this.setState(() => ({
                            pomodoro: 0,
                            isLongBreakTime: true
                        }))
                        this.changeMinute(this.props.longBreakTime)
                    } else {
                        if (this.state.minute === 0) {
                            if (this.state.isWorkTime) {
                                this.setState({
                                    isWorkTime: false
                                })

                                this.changeMinute(this.props.breakTime)
                                this.setState({ pomodoro: this.state.pomodoro + 1 })
                            } else {
                                this.setState({
                                    isWorkTime: true,
                                    isLongBreakTime: false
                                })

                                this.changeMinute(this.props.workTime)
                            }
                        } else {
                            this.changeMinute(this.state.minute - 1)
                            this.setState({
                                seconds: 59
                            })
                        }
                    }
                    break
                default:
                    this.setState({
                        seconds: this.state.seconds - 1
                    })
                    break
            }
        }, 10)

        this.setState({
            intervalId: intervalId
        })
    }

    render() {
        return (
            <div className="Timer">
                <div className="Timer-clock">
                    <span className="Timer-cycle">
                        {this.state.isWorkTime ? "Work session" : this.state.isLongBreakTime ? "Long break!" : "Break"}
                    </span>
                    <span className="Timer-time">
                        {`${this.correctMinute()}`.padStart(2, "0")} : {`${this.state.seconds}`.padStart(2, "0")}
                    </span>
                </div>
                <div className="Timer-buttons">
                    <button data-type={this.props.isRunning ? "stop" : "start"} onClick={this.playStop}>{this.props.isRunning ? <i data-type={this.props.isRunning ? "stop" : "start"} className="fas fa-stop"></i> : <i data-type={this.props.isRunning ? "stop" : "start"} className="fas fa-play"></i>}</button>
                    <button data-type="reset" disabled={this.props.isRunning} onClick={this.reset}><i data-type="reset" className="fas fa-undo-alt"></i></button>
                </div>
            </div>
        )
    }
}

export default Timer
