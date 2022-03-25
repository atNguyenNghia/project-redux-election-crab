/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {MakeBets} from '../action/action';
import {PLUS , DEDUCTION} from '../constants/constants';

const ElectedItem = () => {
    const placeBets = useSelector((state) => state.CrabReducer);
    const dispatch = useDispatch();
    return (
        <section className="elected col-8">
            {
                placeBets.placeBets.map((item) => {
                    return(
                        <div key={item.id} >
                            <img src={item.url} />
                        <div className="bg-success d-flex justify-content-around rounded-pill">
                            <button className="btn btn-danger"
                                onClick={()=>dispatch(MakeBets(item.id , PLUS))}
                            >   
                                <i className="fas fa-plus"></i>
                            </button>
                            <h3>Đặt: {item.tienCuoc}</h3>
                            <button className="btn btn-danger"
                                onClick={()=> dispatch(MakeBets(item.id , DEDUCTION))}
                            >
                                <i className="fas fa-minus"></i>
                            </button>
                        </div>
                    </div>
                    )
                })
            }
             
        </section>
    )
}
export default ElectedItem;