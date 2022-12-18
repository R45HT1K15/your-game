import { useSelector } from "react-redux";

export default function OverallRating () {
    
    const rating = useSelector((store) => store.overallRating)
    console.log('rating', rating)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
                {Array.isArray(rating) ? (
                    rating.map((el) => (
                        <>
                            <div>
                                <p>{el.user}</p>
                                <p>{el.score}</p>
                            </div>
                        </>
                    ))
                ) : (
                    rating
                ) 
                }
        </div>
    )
}