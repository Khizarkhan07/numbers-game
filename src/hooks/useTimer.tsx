import {useState, useRef, useCallback} from 'react';

const useTimer = (initialState = 0) => {

    const [timer, setTimer] = useState(initialState)
    const countRef = useRef(0)

    const handleTimerStart = useCallback(() => {
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1)
        }, 1000)
    },[timer])

    const handlePause =  useCallback(() => {
        clearInterval(countRef.current)
    },[true])

    const handleTimerReset = useCallback(() => {
        clearInterval(countRef.current)
        setTimer(0)
    },[true])

    return { timer, handleTimerStart, handlePause, handleTimerReset }
}

export default useTimer