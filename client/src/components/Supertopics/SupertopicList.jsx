import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SupertopicList () {
    
    const supertopics = useSelector((store) => store.supertopics)
    console.log('supertopics', supertopics)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
            <ul className="list-group">
                {Array.isArray(supertopics) ? (
                    supertopics.map((supertopic) => (
                        <>
                            <Link key={supertopic.id} to={`/game/${supertopic.tema}`}>{supertopic.tema}</Link>
                        </>
                    ))
                ) : (
                    supertopics
                ) 
                }
            </ul>
        </div>
    )
}