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
        console.log('data', data)
        // dispatch({ type: types.ADD_PROFILE, payload: { id: data.id, name: data.name }})
    }
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <form onSubmit={handleChange}>
                    <label>{question.question}</label>
                    <input type="text" placeholder="Введите ответ" name="answer"/>
                    <button type="submit">Ответить</button>
                </form>
            </div>
        </div>
    )
}