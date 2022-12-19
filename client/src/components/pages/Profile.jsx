import { useSelector } from "react-redux";

export default function Profile () {
    
    const { rating } = useSelector((store) => store.profile)

    return (
        <div className="container-list">
            <h2>Твой рейтинг по всем играм</h2>
            <ol>
                {Array.isArray(rating) ? (
                    rating.map((el) => (
                        <li>
                            <div className="rate">
                                <h3>{el.title}</h3>
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