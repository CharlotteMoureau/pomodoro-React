import React, { useState } from 'react'
import Modal from 'react-modal'
import Timer from './Timer'
import Button from './Button'
import '../css/App.css'

Modal.setAppElement('#root')

export default function App() {
    const [times, update] = useState({
        // workTime
        1: 25,
        // breakTime
        2: 5,
        // longBreakTime
        3: 15,
        // cycle
        4: 4
    })
    const [run, checkRun] = useState(false)
    const play = (runs) => {
        checkRun(runs)
    }
    const reset = () => {
        update({
            1: 25,
            2: 5,
            3: 15,
            4: 4
        })
    }
    const increment = (e) => {
        update({ ...times, [e]: times[e] + 1 })
    }

    const decrement = (e) => {
        if (times[e] === 1) {
            return
        } else {
            update({ ...times, [e]: times[e] - 1 })
        }
    }

    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="App">
            <h1 className="App-title">Pomodoro</h1>
            <Timer
                play={play}
                reset={reset}
                workTime={times[1]}
                breakTime={times[2]}
                longBreakTime={times[3]}
                breakCycle={times[4]}
                isRunning={run}
                modalOpen={modalIsOpen}
            />
            <button className="App-open-modal" onClick={openModal}><i className="fas fa-cog"></i></button>
            <Modal
                className="Modal"
                overlayClassName="Overlay"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Settings Modal"
            >
                <div className="App-modal-top">
                    <h2 className="App-settings">Settings</h2>
                    <button className="App-close-modal" onClick={closeModal}><i className="fas fa-times"></i></button>
                </div>
                <div className="App-modal-time">
                    <div className="App-modal-button">
                        <h3 className="App-modal-time-title">Time (minutes)</h3>
                        <div className="App-time-buttons">
                            <Button title="session" addTime={increment} subTime={decrement} idForFunc={1} time={times[1]} />
                            <Button title="break" addTime={increment} subTime={decrement} idForFunc={2} time={times[2]} />
                            <Button title="long break" addTime={increment} subTime={decrement} idForFunc={3} time={times[3]} />
                        </div>
                        <h3 className="App-modal-time-title">Choose a session cycle</h3>
                        <div className="App-time-buttons">
                            <Button title="cycle" addTime={increment} subTime={decrement} idForFunc={4} time={times[4]} />
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    )
}
