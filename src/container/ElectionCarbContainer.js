import React from "react";
import Header from "../components/Header";
import ElectedItem from "../components/ElectedItem";
import StartDice from "../components/StartDice";


const ElectionCarbContainer = () => {
    return (
        <>
            <Header/>
            <section className="container-xl d-flex my-5">
                <ElectedItem />
                <StartDice />
            </section>
        </>
    )
};

export default ElectionCarbContainer;