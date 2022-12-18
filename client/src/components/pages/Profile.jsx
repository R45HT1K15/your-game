import { useSelector } from "react-redux";

export default function Profile () {
    
    const { rating } = useSelector((store) => store.profile)

    return (
        <div className="container-list">
            <h3>Выбери тему</h3>
                {Array.isArray(rating) ? (
                    rating.map((el) => (
                        <>
                            <div>
                                <p>{el.title}</p>
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