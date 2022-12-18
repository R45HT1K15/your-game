import React from "react";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
// import * as types from '../store/types';
// import { signout } from "../hooks/auth";


export default function Navbar() {

    const dispatch = useDispatch()
    const { name } = useSelector((store) => store.profile)
   
    // const handleSignout = async (e) => {
    //     e.preventDefault()
    //     const res = await signout()
    //     dispatch({ type: types.DEL_NAME })
    //     dispatch({ type: types.DEL_TASK })
    // }


    return (
        <nav>
            <div>
                <div className="navbar-nav">
                    {name ? (
                        <>
                            <Link to='/'>Игры</Link>
                            <Link to={`/profile/${name}`}>{name}</Link>
                            <Link className="nav-link" to='/raiting'>Общий рейтинг</Link>
                            <Link className="nav-link" to='#'>Выйти</Link>
                        </>
                    ) : (
                        <>
                            <Link className="nav-link" to='/signin'>Войти</Link>
                            <Link className="nav-link" to='/signup'>Зарегистрироваться</Link>
                        </>
                    )}
                </div>
                </div>
        </nav>
    )
}