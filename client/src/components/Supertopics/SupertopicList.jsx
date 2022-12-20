import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startGame } from "../../functions/game";
import * as types from '../../store/types'


export default function SupertopicList () {
    
    const supertopics = useSelector((store) => store.supertopics)
    const dispatch = useDispatch()

    useEffect(() => {
        ( async () => {
            const response = await fetch('http://localhost:3100/', {
                method: 'GET',
                credentials: 'include',
              })
            const supertopics = await response.json()
            dispatch({ type: types.ADD_SUPERTOPICS, supertopics})

        })()
    },[])

    return (
        <div className="container-list">
            <h2>Выбери тему</h2>
            <div className="list-group">
                {Array.isArray(supertopics) ? (
                    supertopics.map((supertopic) => (
                        <div className="list" key={supertopic.id}>
                            <h2>{supertopic.tema}</h2>
                            <Link to={`/game/${supertopic.tema}`}><button className="btnForAuth" onClick={() => startGame(supertopic.id, supertopic.tema)}>Начать игру</button></Link>
                        </div>
                    ))
                ) : (
                    supertopics
                ) 
                }
            </div>
        </div>
    )
}