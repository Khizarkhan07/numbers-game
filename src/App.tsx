import React, {useEffect} from 'react';
import './App.css';
import Slice from "./components/Slice";
import {Circle, SliceWrapper} from "./styles";
import {useGameContext} from "./context/gameContext";

const App = () => {
    const {state, dispatch} = useGameContext();
    console.log(state)
    useEffect(()=> {
        for (var i=1000 ; i<= 5000; i +=1000) {
            setTimeout(function() {
                dispatch({type: 'ADD_NUMBER'})

            }, i)
        }
    },[])
    return (
        <div>
            <h4>{state.gameState}</h4>
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
        </div>
  );
}

export default App;
