import React from "react";
import './modal.css'

export function Modal ({ active, setActive, question = '' }) {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                <form>
                    <label>{question.question}</label>
                    <input type="text" placeholder="Введите ответ"/>
                    <button type="button">Ответить</button>
                </form>
            </div>
        </div>
    )
}