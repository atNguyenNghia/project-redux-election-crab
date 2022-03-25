const initState = {
    placeBets : [
        {
            id:'bau'
            ,url:'./img/bau.png'
            ,tienCuoc:0,
        },
        {
            id:'ca',
            url:'./img/ca.png',
            tienCuoc:0,
        },
        {
            id:'cua',
            url:'./img/cua.png',
            tienCuoc:0},
        {
            id:'ga',
            url:'./img/ga.png',
            tienCuoc:0,
        },
        {
            id:'nai',
            url:'./img/nai.png',
            tienCuoc:0,
        },
        {
            id:'tom',
            url:'./img/tom.png',
            tienCuoc:0,
        }
    ],
    amountMoney : 10000,
    arrayDice :[
        {
            ma:'bau',
            url:'./img/bau.png'
        },
        {
            ma:'ca',
            url:'./img/ca.png'
        },
        {
            ma:'tom',
            url:'./img/tom.png'
        }
    ],
};

const CrabReducer = (state = initState , action) => {
    switch (action.type) {
        case 'BETTING':
            let target = state.placeBets.find((item) => item.id === action.payload.id);
            const actionUD = action.payload.toggle;
            if(actionUD === 'PLUS'){
                if(state.amountMoney >= 400){
                    state.amountMoney -= 400;
                    target.tienCuoc += 400;
                }
            }
            if(actionUD === 'DEDUCTION'){
                if(target.tienCuoc >= 400){
                    state.amountMoney += 400;
                    target.tienCuoc -= 400;
                }
            }
            const newPlaceBets = state.placeBets.map((item) => {
                if(item.id === target.id) {
                    return {...item , placeBets: target.tienCuoc};
                }
                return item;
            })
            return {...state , placeBets: newPlaceBets};
        case 'PLAY_GAME': 
            const diceOne = Math.floor(Math.random() * 6);
            const diceTwo = Math.floor(Math.random() * 6);
            const diceThree = Math.floor(Math.random() * 6);

            const manyDiceOne = state.placeBets[diceOne];
            const manyDiceTwo = state.placeBets[diceTwo];
            const manyDiceThree = state.placeBets[diceThree];
            const newArrayDice = [manyDiceOne , manyDiceTwo , manyDiceThree];

            const newPlateBets = state.placeBets.map((choose) => {
                if(choose.tienCuoc !== 0){
                    const newBets = newArrayDice.reduce((total , item) => {
                        if(choose.id === item.id){
                            return total + (choose.tienCuoc * 2);
                        }
                        return total;
                    }, 0);
                    console.log(newBets);
                    return {...choose , tienCuoc: newBets}
                }
                return choose;
            })
            return {...state , arrayDice: newArrayDice , placeBets: newPlateBets}
        case 'PLAY_AGAIN':
            return {...state , amountMoney : 5000}
        default:
            return state
    }
}

export default CrabReducer;