import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TaskList () {
    
    const supertopics = useSelector((store) => store.supertopics)
    console.log('tasks', supertopics)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
            <ul className="list-group">
                {Array.isArray(supertopics) ? (
                    supertopics.map((supertopic) => (
                        <>
                            <Link to={`/game/${supertopic.title}`}>{supertopic.title}</Link>
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