import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SupertopicList () {
    
    const supertopics = useSelector((store) => store.supertopics)
    console.log('supertopics', supertopics)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
            <div className="list-group">
                {Array.isArray(supertopics) ? (
                    supertopics.map((supertopic) => (
                        <div className="list">
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