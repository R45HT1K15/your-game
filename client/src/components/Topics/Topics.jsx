import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Modal } from "../modal/Modal";

export default function TopicList () {
    
    const topics = useSelector((store) => store.topics)
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
                <div className="scores">scores: 0</div>
                {Array.isArray(topics) ? (
                    topics.map((topic) => (
                        <>
                            <table class="table">
                                <tbody>
                                    <tr>
                                    <th scope="row">{topic.question}</th>
                                    <td><button className="open-modal" onClick={() => setModalActive(true)}>200</button></td>
                                    <td><button className="open-modal" onClick={() => setModalActive(true)}>400</button></td>
                                    <td><button className="open-modal" onClick={() => setModalActive(true)}>600</button></td>
                                    <td><button className="open-modal" onClick={() => setModalActive(true)}>800</button></td>
                                    <td><button className="open-modal" onClick={() => setModalActive(true)}>1000</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </>
                    ))
                ) : (
                    topics
                ) 
                }
                <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    )
}