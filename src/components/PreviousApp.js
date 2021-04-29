import React, { Component } from 'react'
import Modal from 'react-modal'
import Timer from './Timer'
import Button from './Button'
import '../css/App.css'

// Modal.setAppElement('#root');

class App extends Component {
    constructor() {
        super()
        this.state = {
            isRunning: false,
            workTime: 25,
            breakTime: 5,
            longBreakTime: 15,
            breakCycle: 4,
            minute: 25,
            showModal: false
        }
        // this.handleOpenModal = this.handleOpenModal.bind(this)
        // this.handleCloseModal = this.handleCloseModal.bind(this)
    }
    play = (runs) => {
        this.setState({ isRunning: runs })
    }

    changeMinute = (minuteSession) => {
        this.setState({
            minute: minuteSession
        })
    }

    resetTimer = () => {
        this.setState({
            workTime: 25,
            breakTime: 5,
            minute: 25,
            longBreakTime: 15,
            breakCycle: 4
        })
    }
    // addTest = (test) => {
    //     if (test === this.state.workTime) {
    //         if (this.state.workTime < 60) {
    //             this.setState({
    //                 workTime: this.state.workTime + 1,
    //                 minute: this.state.minute + 1
    //             })
    //         }
    //     } else if (test === this.state.breakTime) {
    //         if (this.state.breakTime < 60) {
    //             this.setState({
    //                 breakTime: this.state.breakTime + 1
    //             })
    //         }
    //     } else if (this.state.workTime === this.state.breaktime) {
    //         console.log('cc')
    //     }
    // }

    addWorkTime = () => {
        if (this.state.workTime < 60) {
            this.setState({
                workTime: this.state.workTime + 1,
                minute: this.state.minute + 1
            })
        }
    }

    subWorkTime = () => {
        if (this.state.workTime === 1 || this.state.minute === 0) {
            return
        } else {
            this.setState({
                workTime: this.state.workTime - 1,
                minute: this.state.minute - 1
            })
        }
    }

    addBreakTime = () => {
        if (this.state.breakTime < 60) {
            this.setState({
                breakTime: this.state.breakTime + 1
            })
        }
    }

    subBreakTime = () => {
        if (this.state.breakTime === 1 || this.state.minute === 0) {
            return
        } else {
            this.setState({
                breakTime: this.state.breakTime - 1
            })
        }
    }

    addLongBreakTime = () => {
        if (this.state.longBreakTime < 60) {
            this.setState({
                longBreakTime: this.state.longBreakTime + 1
            })
        }
    }

    subLongBreakTime = () => {
        if (this.state.longBreakTime === 1 || this.state.minute === 0) {
            return
        } else {
            this.setState({
                longBreakTime: this.state.longBreakTime - 1
            })
        }
    }

    addBreakCycle = () => {
        this.setState({
            breakCycle: this.state.breakCycle + 1
        })
    }

    subBreakCycle = () => {
        if (this.state.breakCycle === 1) {
            return
        } else {
            this.setState({
                breakCycle: this.state.breakCycle - 1
            })
        }
    }

    // handleOpenModal() {
    //     this.setState({
    //         showModal: true
    //     })
    // }

    // handleCloseModal() {
    //     this.setState({
    //         showModal: false
    //     })
    // }

    render() {
        return (
            <div className="App">
                <h1 className="App-title">Pomodoro</h1>
                <Timer
                    play={this.play}
                    reset={this.resetTimer}
                    isRunning={this.state.isRunning}
                    workTime={this.state.workTime}
                    breakTime={this.state.breakTime}
                    longBreakTime={this.state.longBreakTime}
                    breakCycle={this.state.breakCycle}
                    minute={this.state.minute}
                    changeMinute={this.changeMinute}
                />
                <div className="App-button">
                    <Button
                        add={this.addTest}
                        sub={this.subWorkTime}
                        time={this.state.workTime}
                        isRunning={this.state.isRunning}
                    />
                    <Button
                        add={this.addTest}
                        sub={this.subBreakTime}
                        time={this.state.breakTime}
                        isRunning={this.state.isRunning}
                    />
                    <Button
                        add={this.addLongBreakTime}
                        sub={this.subLongBreakTime}
                        time={this.state.longBreakTime}
                        isRunning={this.state.isRunning}
                    />
                    <Button
                        add={this.addBreakCycle}
                        sub={this.subBreakCycle}
                        time={this.state.breakCycle}
                        isRunning={this.state.isRunning}
                    />
                    {/* <button onClick={this.handleCloseModal}>test</button> */}
                    {/* <Modal isOpen={this.state.showModal} contentLabel="onRequestClose"
                        onRequestClose={this.handleCloseModal}> */}
                    {/* <p>test</p>
                        <button onClick={this.handleCloseModal}>Close Modal</button> */}
                    {/* </Modal> */}
                </div>
            </div>
        )
    }
}

export default App
