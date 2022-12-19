import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../modal/Modal";
import { updateStatusQuest } from "../../functions/game"
import Button from '../button/Button'

export default function TopicList () {

    const params = useParams()
    const topics = useSelector((store) => store.supertopics).filter((el) => el.tema === params.name)[0]?.Topics
    const [modalActive, setModalActive] = useState(false)
    const [question, setQuestion] = useState()
    const [styleStat, setStyleStat] = useState(true)


    const findQuestion = (question) => {
        updateStatusQuest(question.id)
        setQuestion(params)
        setModalActive(true)
    }

    const handleStyle = (event) => {
        console.log('event', event)
        event.currentTarget.style.textDecorationLine = "line-through";
        // event.currentTarget.style.pointerEvents = "none";
        event.currentTarget.parentNode.style.pointerEvents = "none";
        // console.log('event.currentTarget.parentNode', event.currentTarget.parentNode)

    }

    return (
        <div className="container-list">
                <h2>{params.name}</h2>
            <div className="scoreAndButton">
                <h4 className="scores">scores: 0</h4>
                <Button className="btnForAuth">Завершить игру</Button>
            </div>
            <div>
                {Array.isArray(topics) ? (
                    topics.map((topic) => (

                            <table className="table" key={topic.id}>
                                <tbody>
                                    <tr>
                                    <th scope="row">{topic.name}</th>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 200))} style={ topic.Questions.find((el) => el.cost === 200).IsCorrects[0]?.status ?  {pointerEvents: ""} : {pointerEvents: "none"} }><p className="points" style={ topic.Questions.find((el) => el.cost === 200).IsCorrects[0]?.status ?  {textDecorationLine: ""} : {textDecorationLine: "line-through"} } onClick={handleStyle}>200</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 400))} style={ topic.Questions.find((el) => el.cost === 400).IsCorrects[0]?.status ?  {pointerEvents: ""} : {pointerEvents: "none"} }><p className="points" style={ topic.Questions.find((el) => el.cost === 400).IsCorrects[0]?.status ?  { textDecorationLine: "" } : { textDecorationLine: "line-through"} } onClick={handleStyle}>400</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 600))} style={ topic.Questions.find((el) => el.cost === 600).IsCorrects[0]?.status ?  {pointerEvents: ""} : {pointerEvents: "none"} }><p className="points" style={ topic.Questions.find((el) => el.cost === 600).IsCorrects[0]?.status ?  { textDecorationLine: "" } : { textDecorationLine: "line-through"} } onClick={handleStyle}>600</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 800))} style={ topic.Questions.find((el) => el.cost === 800).IsCorrects[0]?.status ?  {pointerEvents: ""} : {pointerEvents: "none"} }><p className="points" style={ topic.Questions.find((el) => el.cost === 800).IsCorrects[0]?.status ?  { textDecorationLine: "" } : { textDecorationLine: "line-through"} } onClick={handleStyle}>800</p></button></td>
                                    <td><button className="open-modal" onClick={() => findQuestion(topic.Questions.find((el) => el.cost === 1000))} style={ topic.Questions.find((el) => el.cost === 1000).IsCorrects[0]?.status ?  {pointerEvents: ""} : {pointerEvents: "none"} }><p className="points" style={ topic.Questions.find((el) => el.cost === 1000).IsCorrects[0]?.status ?  { textDecorationLine: "" } : { textDecorationLine: "line-through"} } onClick={handleStyle}>1000</p></button></td>
                                    </tr>
                                </tbody>
                            </table>
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