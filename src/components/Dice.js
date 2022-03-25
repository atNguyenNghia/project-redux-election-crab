/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {useSpring , animated} from 'react-spring';


const Dice = ({active , index}) => {
    console.log(active)
    const [propsDice,set] = useSpring(()=> ( {
        to: {
            xyz:[1800,1800,1800]
        },
        from : {
            xyz:[0,0,0]
        },
        config:{
            duration:1000
        },
        reset:true
    }))
    set ({xyz:[1800 , 1800, 1800]});

    return (
        <article className={`dice-${index} dice`}>
            <animated.div className='cube'
                style={{  transform: propsDice.xyz.interpolate((x,y,z) => `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)}}
            >
                <div className="side front"> 
                    <img src={active} className="img-fluid"/>
                </div>
                <div className="side back"> 
                    <img src="./img/tom.png" className="img-fluid"/>
                </div>
                <div className="side right">
                    <img src="./img/nai.png" className="img-fluid"/>
                </div>
                <div className="side left">
                    <img src="./img/ga.png" className="img-fluid"/>
                </div>
                <div className="side top">
                    <img src="./img/cua.png" className="img-fluid"/>
                </div>
                <div className="side bottom">
                    <img src="./img/ca.png" className="img-fluid"/>
                </div>
            </animated.div>
        </article>
    )
};
export default Dice;