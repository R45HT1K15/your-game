import { useSelector } from "react-redux";

export default function Profile () {
    
    const { rating } = useSelector((store) => store.profile)

    return (
        <div className="container-list">
            <h2>Твой рейтинг по всем играм</h2>
                {Array.isArray(rating) ? (
                    rating.map((el) => (
                        <>
                            <div className="rate">
                                <h3>{el.title}</h3>
                                <h3>{el.score}</h3>
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