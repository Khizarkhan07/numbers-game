import React, {useCallback, useMemo, useState} from 'react';
import './App.css';
import Slice from "./components/Slice";
import {ButtonWrapper, Circle, SliceWrapper} from "./styles";
import {useGameContext} from "./context/gameContext";
import {Button} from "./components/Button";

const App = () => {
    const {state, dispatch} = useGameContext();
    const handleStart = useCallback(()=> {
        for (var i=1 ; i<= 12; i ++) {
             setTimeout(function() {
                dispatch({type: 'START'})
            },  i*1000)

        }
    }, [state])


    const Buttons = useMemo(()=> {
        return (
            <ButtonWrapper>
                <Button callback={handleStart} text='START' color='#5acba1'/>
            </ButtonWrapper>
        )
    },[true])

    return (
        <div>
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
            {Buttons}
        </div>
  );
}

export default App;
