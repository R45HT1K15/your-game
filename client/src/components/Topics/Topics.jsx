import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Modal } from "../modal/Modal";
import { updateStatusQuest } from "../../functions/game"
import Button from '../button/Button'
import * as types from '../../store/types'

export default function TopicList () {

    const dispatch = useDispatch()
    const params = useParams()
    const topics = useSelector((store) => store.supertopics).filter((el) => el.tema === params.name)[0]?.Topics
    console.log('topics', topics)
    const scores = useSelector((store) => store.scores)
    const [modalActive, setModalActive] = useState(false)
    const [question, setQuestion] = useState()
    const [styleStat, setStyleStat] = useState(true)

    

    const findQuestion = (question) => {
        console.log('question', question)
        updateStatusQuest(question.id)
        setQuestion(question)
        setModalActive(true)
    }

    const handleStyle = (event) => {
        console.log('event', event)
        event.currentTarget.style.textDecorationLine = "line-through";
        // event.currentTarget.style.pointerEvents = "none";
        event.currentTarget.parentNode.style.pointerEvents = "none";
        // console.log('event.currentTarget.parentNode', event.currentTarget.parentNode)

    }

    useEffect(() => {
        ( async () => {
            await Promise.all(topics)
            const id = topics[0]?.tema_id
            const response = await fetch('http://localhost:3100/answer/check', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                credentials: "include",
                body: JSON.stringify({ id })
            });
            const data = await response.json()
            dispatch({type:types.ADD_SCORES, payload: { scores:data }})
        })()
    }, [])

    return (
        <div className="container-list">
                <h2>{params.name}</h2>
            <div className="scoreAndButton">
                <h4 className="scores">scores: {scores.scores}</h4>
                <Link to="/">Вернуться на главную</Link>
                <Button className="btnForAuth">Обнулить</Button>
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