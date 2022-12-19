import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SupertopicList () {
    
    const supertopics = useSelector((store) => store.supertopics)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
            <div className="list-group">
                {Array.isArray(supertopics) ? (
                    supertopics.map((supertopic) => (
                        <div className="list">
                            <h2>{supertopic.title}</h2>
                            <Link to={`/game/${supertopic.title}`}>Начать игру</Link>
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