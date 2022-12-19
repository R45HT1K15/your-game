import React from "react";
import './modal.css'
import { answerCheck } from '../../functions/answer';
import { useSelector, useDispatch } from "react-redux";


export function Modal ({ active, setActive, question = '' }) {

    const dispatch = useDispatch()


    const handleChange = async (e) => {
        e.preventDefault()
        const answer = e.target.answer.value
        const data = await answerCheck(answer, question.id)
        // dispatch({ type: types.ADD_PROFILE, payload: { id: data.id, name: data.name }})
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <form  className="modal__content" onSubmit={handleChange}>
                    <div className="timer">
                        25
                    </div>
                    <div className='question'>
                        <label>{question.question}</label>
                    </div>
                    <div className="inputsForAnswer">
                        <input  className="inputForAnswer" type="text" placeholder="Введите ответ" name="answer"/>
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