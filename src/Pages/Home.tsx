import React, {useCallback, useMemo, useState} from 'react';
import {useGameContext} from "../context/gameContext";
import {ButtonWrapper, Circle, InputWrapper, SliceWrapper} from "../styles";
import {Button} from "../components/Button";
import StatusBanner from "../components/StatusBanner";
import Slice from "../components/Slice";
import {Input} from "antd";

const Home = () => {
    const {state, dispatch} = useGameContext();
    const [stateValue, setStateValue] = useState({guess: ''})

    const handleStart = useCallback(()=> {
        for (let i=1 ; i<= 3; i ++) {
            setTimeout(function() {
                dispatch({type: 'START'})
            },  i*1000)

        }
    }, [state])


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        const value = e.target.value;
        const name = e.target.name;
        console.log(value, name)
        setStateValue({
            ...stateValue,
            [e.target.name]: value
        });
    }

    const checkAnswer = useCallback(()=> {
        dispatch({type: 'CHECK', payload: {guess: stateValue.guess}})
        dispatch({type: 'RESET'})
        setStateValue({guess: ''});
    }, [stateValue])

    const handleReset = useCallback(()=> {
        dispatch({type: 'RESET'})
    },[true])

    const Buttons = useMemo(()=> {
        return (
            <ButtonWrapper>
                <Button callback={handleStart} text='START' color='#5acba1'/>
                <br/>
                {state.gameState.length === 3 && (<Button callback={handleReset} text='RESET' color='#fc5603'/>
                )}
            </ButtonWrapper>
        )
    },[state.gameState])

    const inputFields = useMemo(() => {
        return (
                <InputWrapper>
                    <label htmlFor="guess"><h6>Guess</h6></label>
                    <Input placeholder="Enter your guess numbers seperated by commas" name="guess" onChange={handleChange}/>
                </InputWrapper>
        )
    }, [stateValue.guess])

    const checkButton = useMemo(()=> {
        return <ButtonWrapper>
            <Button callback={checkAnswer} text='CHECK' color='#5acba1'/>
        </ButtonWrapper>
    }, [stateValue])

    const circle = useMemo(() => {
        return (
            <Circle>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={1} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={2} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={3} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={4} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={5} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={6} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={7} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={8} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={9} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={10} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={11} ></Slice>
                </SliceWrapper>
                <SliceWrapper value={state.gameState[state.gameState.length-1]}>
                    <Slice value={12} ></Slice>
                </SliceWrapper>
            </Circle>
        )
    }, [state.gameState])

    return (
        <div className={"container"}>

            {state.status !== 'PENDING' ? (<StatusBanner status={state.status}/>) : ("")}
            {circle}
            {Buttons}
            {inputFields}
            {checkButton}


        </div>
    );
}

export default Home;