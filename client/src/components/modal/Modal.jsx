import React, { useState, useEffect } from "react";
import './modal.css'
import { answerCheck } from '../../functions/answer';
import { useSelector, useDispatch } from "react-redux";
import * as types from '../../store/types'


export function Modal ({ active, setActive, question = '' }) {

    const dispatch = useDispatch()
    
    const [value, setValue] = useState('')
    
    const [time, setTime] = useState(3)

    const handleChange = async (e) => {
        e.preventDefault()
        const answer = e.target.answer.value
        const data = await answerCheck(answer, question.id)
        setActive(false)
        setValue('')
        dispatch({type:types.ADD_SCORES, payload: { scores:data }})
    }

    useEffect(() => {
        setInterval(()=> {
            setTime(( pretime )=> {
                return pretime>=1 ? pretime - 1: setActive(false)
            })
        }, 1000)
    }, [setActive])
    
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <form  className="modal__content" onSubmit={handleChange}>
                    <div className="timer">
                        {time}
                    </div>
                    <div className='question'>
                        <label>{question.question}</label>
                    </div>
                    <div className="inputsForAnswer">
                        <input  className="inputForAnswer" type="text" placeholder="Введите ответ" name="answer" onChange={(e) => setValue(e.target.value) } value={value}/>
                        <button className="btnForAnswer" type="submit">Ответить</button>
                    </div>
                    <div>
                        otvet
                    </div>
                </form>
            </div>
        </div>
    )
}