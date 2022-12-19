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
                <h2>*название темы*</h2>
            <div className="scoreAndButton">
                <h4 className="scores">scores: 0</h4>
                <button className="btnForAuth">Завершить игру</button>
            </div>
            <div>
                {Array.isArray(topics) ? (
                    topics.map((topic) => (
                        <>
                            <table class="table">
                                <tbody>
                                    <tr>
                                    <th scope="row">{topic.name}</th>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 200))}><p className="points">200</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 400))}><p className="points">400</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 600))}><p className="points">600</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 800))}><p className="points">800</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 1000))}><p className="points">1000</p></button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    ))
                ) : (
                    'загрузка'
                ) 
            }
            </div>
                <Modal active={modalActive} setActive={setModalActive} question={question}/>
        </div>
    )
}