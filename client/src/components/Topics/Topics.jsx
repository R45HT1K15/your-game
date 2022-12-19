import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../modal/Modal";

export default function TopicList () {

    const params = useParams()
    const topics = useSelector((store) => store.supertopics).filter((el) => el.tema === params.name)[0].Topics
    console.log('topics', topics)
    const [modalActive, setModalActive] = useState(false)
    const [question, setQuestion] = useState()


    const findQuestion = (question) => {
        setQuestion(question)
        setModalActive(true)
    }

    return (
        <div className="container-list">
                <h3>*название темы*</h3>
            <div className="scoreAndButton">
                <h4 className="scores">scores: 0</h4>
                <button className="endOfTheGame">Завершить игру</button>
            </div>
            <div>
                {Array.isArray(topics) ? (
                    topics.map((topic) => (
                        <>
                            <table class="table">
                                <tbody>
                                    <tr>
                                    <th scope="row">{topic.name}</th>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 200))}>200</button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 400))}>400</button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 600))}>600</button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 800))}>800</button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 1000))}>1000</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    ))
                ) : (
                    topics
                ) 
            }
            </div>
                <Modal active={modalActive} setActive={setModalActive} question={question}/>
        </div>
    )
}