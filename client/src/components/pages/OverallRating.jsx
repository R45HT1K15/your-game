import { useSelector } from "react-redux";

export default function OverallRating () {
    
    const rating = useSelector((store) => store.overallRating)
    console.log('rating', rating)

    return (
        <div className="container-list">
            <h2>Топ мира по SI game</h2>
            <ol>
                {Array.isArray(rating) ? (
                    rating.map((el) => (
                        <li>
                            <div className="rate">
                                <h3>{el.user}</h3>
                                <h3>{el.score}</h3>
                            </div>
                        </li>
                    ))
                ) : (
                    rating
                ) 
                }
            </ol>
        </div>
    )
}