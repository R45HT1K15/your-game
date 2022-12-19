import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SupertopicList () {
    
    const supertopics = useSelector((store) => store.supertopics)

    return (
        <div className="container-list">
            <h2>Выбери тему</h2>
            <div className="list-group">
                {Array.isArray(supertopics) ? (
                    supertopics.map((supertopic) => (
                        <div className="list" key={supertopic.id}>
                            <h2>{supertopic.tema}</h2>
                            <Link to={`/game/${supertopic.tema}`}>Начать игру</Link>
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