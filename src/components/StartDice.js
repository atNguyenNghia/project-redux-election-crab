/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Dice from "./Dice";
import { useSelector , useDispatch } from "react-redux";
import { PlayGame } from "../action/action";

const StartDice = () => {
    const arrayDice = useSelector((state) => state.CrabReducer.arrayDice);
    const dispatch = useDispatch();
    
    console.log('xucsac container fired')

    return (
        <article>
            <div className="plate_container">
                {
                    arrayDice.map((item , index) => {
                        return <Dice active={item.url} key = {index} index = {index} />
                    })
                }
            </div>
            <button className="btn" style={{width: '300px'}}
                onClick = {() => dispatch(PlayGame())}
            >
                <img src="./img/soc.png" className="img-fluid"/>
            </button>
        </article>
    )
};
export default StartDice;