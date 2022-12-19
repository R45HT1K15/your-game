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
                                <p>{el.user}</p>
                                <p>{el.score}</p>
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