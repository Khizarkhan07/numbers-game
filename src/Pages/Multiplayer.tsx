import React, {useCallback, useMemo, useState} from 'react';
import {ButtonWrapper, Circle, InputWrapper, SliceWrapper} from "../styles";
import {Button} from "../components/Button";
import StatusBanner from "../components/StatusBanner";
import Slice from "../components/Slice";
import {Input} from "antd";
import useTimer from "../hooks/useTimer";
import {formatTime} from "../utils";
import {useMultiplayerGameContext} from "../context/multiplayerGameContext";

const Multiplayer: React.FC = () => {
    const { timer, handlePause, handleTimerStart, handleTimerReset } = useTimer(0)
    const { timer: timer1, handlePause : handlePause1, handleTimerStart : handleTimerStart1, handleTimerReset: handleTimerReset1 } = useTimer(0)

    const {state, dispatch} = useMultiplayerGameContext();
    const [stateValue, setStateValue] = useState({guess1: '' , guess2: ''})

    const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>)=> {
        const value = e.target.value;
        setStateValue({
            ...stateValue,
            [e.target.name]: value
        });
    }, [stateValue])

    const checkAnswerPlayer1 = useCallback(()=> {
        handlePause();
        dispatch({type: 'CHECK_PLAYER_1', payload: {guess: stateValue.guess1}})

    }, [stateValue.guess1])

    const checkAnswerPlayer2 = useCallback(()=> {
        handlePause1();
        dispatch({type: 'CHECK_PLAYER_2', payload: {guess: stateValue.guess2}})

    }, [stateValue.guess2])

    const handleReset = useCallback(()=> {
        handleTimerReset();
        dispatch({type: 'RESET'})
    },[true])


    const handleStartPlayer1 = useCallback(() => {
        handleTimerStart();
        for (let i=1 ; i<= 12; i ++) {
            setTimeout(function() {
                dispatch({type: 'START_PLAYER_1'})
            },  i*1000)

        }
    }, [true])

    const handleStartPlayer2 = useCallback(() => {
        handleTimerStart1();
        for (let i=1 ; i<= 12; i ++) {
            setTimeout(function() {
                dispatch({type: 'START_PLAYER_2'})
            },  i*1000)

        }
    }, [true])

    const handleNewGame = useCallback(() => {
        handleTimerReset();
        handleTimerReset1();
        dispatch({type: 'NEW_GAME'})
    },[true])

    const handleModChange = useCallback(() => {
        window.location.href= '/number-game'
    }, [true])
    const StartButtonPlayer1 = useMemo(()=> {
        return (
            <ButtonWrapper>
                {state.gameState_player_1.length ===12 ?
                    (<Button callback={handleReset} text='RESET' color='#fc5603'/>) :
                    (<Button callback={handleStartPlayer1} text='START' color='#5acba1'/>)}
            </ButtonWrapper>
        )
    },[state.gameState_player_1])

    const StartButtonPlayer2 = useMemo(()=> {
        return (
            <ButtonWrapper>
                {state.gameState_player_2.length ===12 ?
                    (<Button callback={handleReset} text='RESET' color='#fc5603'/>) :
                    (<Button callback={handleStartPlayer2} text='START' color='#5acba1'/>)}
            </ButtonWrapper>
        )
    },[state.gameState_player_2])

    const inputFieldsPlayer1 = useMemo(() => {
        return (
            <InputWrapper>
                <label htmlFor="guess"><h6>Guess</h6></label>
                <Input placeholder="Enter your guess numbers seperated by commas" name="guess1" onChange={handleChange}/>
            </InputWrapper>
        )
    }, [stateValue.guess1])

    const inputFieldsPlayer2 = useMemo(() => {
        return (
            <InputWrapper>
                <label htmlFor="guess"><h6>Guess</h6></label>
                <Input placeholder="Enter your guess numbers seperated by commas" name="guess2" onChange={handleChange}/>
            </InputWrapper>
        )
    }, [stateValue.guess2])

    const checkButtonPlayer1 = useMemo(()=> {
        return <ButtonWrapper>
            <Button callback={checkAnswerPlayer1} text='CHECK' color='#5acba1'/>
        </ButtonWrapper>
    }, [stateValue])

    const checkButtonPlayer2 = useMemo(()=> {
        return <ButtonWrapper>
            <Button callback={checkAnswerPlayer2} text='CHECK' color='#5acba1'/>
        </ButtonWrapper>
    }, [stateValue])


    const newGame = useMemo(()=> {
        return (
            <ButtonWrapper>
                <Button text='NEW GAME' color='#fcba03' callback={handleNewGame}/>
            </ButtonWrapper>
        )
    },[state])

    const player1_timer = useMemo(()=> {
        return (
            <h6>{formatTime(timer)}</h6>
        )
    }, [timer])

    const player2_timer = useMemo(()=> {
        return (
            <h6>{formatTime(timer1)}</h6>
        )
    }, [timer1])

    let circleSlices =[];

    for (let i =1 ; i<= 12; i++){
        circleSlices.push(
            <SliceWrapper key={i} value={state.gameState_player_1[state.gameState_player_1.length-1]}>
                <Slice value={i} />
            </SliceWrapper>
        )
    }

    const modChangeButton  = useMemo(() => {
        return (
            <Button color="#ff8c66" text={'Go Single Player'} callback={handleModChange}/>
        )
    }, [true])

    let circleSlices_player2 =[];

    for (let i =1 ; i<= 12; i++){
        circleSlices_player2.push(
            <SliceWrapper key={i} value={state.gameState_player_2[state.gameState_player_2.length-1]}>
                <Slice value={i} />
            </SliceWrapper>
        )
    }


    return (
        <div className={"container"}>
            {modChangeButton}
            <hr/>
            {newGame}
            {state.player1_status === 'CORRECT GUESS' && state.player2_status !== 'PENDING' && timer < timer1
                &&  (<StatusBanner status={"PLAYER 1 WINS"}/>)}

            {state.player2_status === 'CORRECT GUESS' && state.player1_status !== 'PENDING' && timer1 < timer
                &&  (<StatusBanner status={"PLAYER 2 WINS"}/>)}

            {state.player2_status === 'WRONG GUESS' && state.player1_status === 'WRONG GUESS'
            &&  (<StatusBanner status={"ITS A DRAW"}/>)}


            <hr/>
            <div className="row">
                <div className="col-sm">
                    {state.player1_status !== 'PENDING' ? (<StatusBanner status={state.player1_status}/>) : ("")}

                    <h5>Player1</h5>
                    {player1_timer}
                    <Circle>
                        {circleSlices}
                    </Circle>
                    {StartButtonPlayer1}
                    {inputFieldsPlayer1}
                    {checkButtonPlayer1}
                </div>

                <div className="col-sm">
                    {state.player2_status !== 'PENDING' ? (<StatusBanner status={state.player2_status}/>) : ("")}

                    <h5>Player2</h5>
                    {player2_timer}
                    <Circle>
                        {circleSlices_player2}
                    </Circle>
                    {StartButtonPlayer2}
                    {inputFieldsPlayer2}
                    {checkButtonPlayer2}
                </div>
            </div>
        </div>
    );
}

export default Multiplayer;