import React from "react";
import {PlayAgain} from '../action/action';
import { useSelector , useDispatch } from "react-redux";

const Header = () => {
    const amountMoney = useSelector ((state) => state.CrabReducer.amountMoney);
    const dispatch = useDispatch();
    return (
        <header className="mt-5">
            <h1 className="text-center display-3">
                The world's top quality crabs
            </h1>
            <h3 className="text-center m-3">
                <span className="text-primary   border-bottom border-top px-3">
                    Your cash:  {amountMoney} $
                </span>
            </h3>
            <button className="btn btn-outline-secondary d-block m-auto"
                onClick={() => dispatch(PlayAgain())}
            >
                Play Again
            </button>
        </header>
    )
};
export default Header;