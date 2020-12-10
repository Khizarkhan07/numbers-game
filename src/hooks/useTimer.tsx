import { useState, useRef, useContext } from 'react';

const useTimer = (initialState = 0) => {



    const [timer, setTimer] = useState(initialState)
    const [isActive, setIsActive] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const countRef = useRef(0)

    const handleTimerStart = () => {
        setIsActive(true)
        setIsPaused(true)

        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handlePause = () => {
        //dispatch({type: 'PAUSE', payload: timer})
        clearInterval(countRef.current)
        setIsPaused(false)
    }

    const handleSplit = () => {
        //dispatch({type: 'SPLIT', payload: timer})

    }

    const handleResume = () => {
        setIsPaused(true)
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    }

    const handleTimerReset = () => {
        clearInterval(countRef.current)
        setIsActive(false)
        setIsPaused(false)
        setTimer(0)
    }

    return { timer, isActive, isPaused, handleTimerStart, handlePause, handleResume, handleTimerReset, handleSplit }
}

export default useTimer