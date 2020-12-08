import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useGameContext} from "../context/gameContext";
import {ButtonWrapper, Circle, InputWrapper, SliceWrapper} from "../styles";
import {Button} from "../components/Button";
import StatusBanner from "../components/StatusBanner";
import Slice from "../components/Slice";
import {Input} from "antd";

const Home = () => {
    const {state, dispatch} = useGameContext();
    const [stateValue, setStateValue] = useState({guess: ''})
    console.log(state.level)

    useEffect(()=>{
        if(localStorage.getItem('level')){
            dispatch({type: 'SET_LEVEL', payload : {level: localStorage.getItem('level')}})
        }
    },[])
    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=> {
        const value = e.target.value;
        setStateValue({
            ...stateValue,
            [e.target.name]: value
        });
    }, [stateValue])

    const checkAnswer = useCallback(()=> {
        dispatch({type: 'CHECK', payload: {guess: stateValue.guess}})
        dispatch({type: 'RESET'})
        setStateValue({guess: ''});
    }, [stateValue])

    const handleNextLevel = useCallback(()=> {
        dispatch({type: 'NEXT_LEVEL'})
    }, [state.level])

    const handleReset = useCallback(()=> {
        dispatch({type: 'RESET'})
    },[true])


    const handleStart = useCallback(() => {
        for (let i=1 ; i<= state.level; i ++) {
            setTimeout(function() {
                dispatch({type: 'START'})
            },  i*1000*0.95)

        }
    }, [state.level])

    const handleNewGame = useCallback(() => {
        dispatch({type: 'NEW_GAME'})
    },[])
    const Buttons = useMemo(()=> {
        return (
            <ButtonWrapper>
                {state.gameState.length === state.level ?
                    (<Button callback={handleReset} text='RESET' color='#fc5603'/>) :
                    (<Button callback={handleStart} text='START' color='#5acba1'/>)}
            </ButtonWrapper>
        )
    },[state.gameState, state.level])

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

    const nextButton = useMemo(()=> {
        return (
            <ButtonWrapper>
                {state.previousLevel === state.level  && state.level <13 &&
                    (<Button callback={handleNextLevel} text='NEXT LEVEL' color='#fcba03'/>)}
            </ButtonWrapper>
        )
    }, [state.previousLevel, state.level])

    const newGame = useMemo(()=> {
        return (
            <ButtonWrapper>
                <Button text='NEW GAME' color='#fcba03' callback={handleNewGame}/>
            </ButtonWrapper>
        )
    },[true])

    let circleSlices =[];

    for (let i =1 ; i<= state.level; i++){
       circleSlices.push(
           <SliceWrapper key={i} value={state.gameState[state.gameState.length-1]}>
               <Slice value={i} ></Slice>
           </SliceWrapper>
       )
    }


    return (
        <div className={"container"}>

            {state.status !== 'PENDING' ? (<StatusBanner status={state.status}/>) : ("")}

            <Circle>
                {circleSlices}
            </Circle>
            {Buttons}
            {inputFields}
            {checkButton}
            {nextButton}
        </div>
    );
}

export default Home;