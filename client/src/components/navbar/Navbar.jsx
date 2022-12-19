import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CustomLink } from '../castomLink/CastomLink'
import * as types from '../../store/types';
import { signout } from '../../functions/auth';


export default function Navbar() {

    const dispatch = useDispatch()
    const { name } = useSelector((store) => store.profile)
   
    const handleSignout = async (e) => {
        e.preventDefault()
        const res = await signout()
        dispatch({ type: types.DEL_PROFILE })
        // dispatch({ type: types.DEL_TASK })
    }


    return (
        <nav>
            <div>
                <div className="navbar-nav">
                    {name ? (
                        <>
                            <CustomLink to='/'>Игры</CustomLink>
                            <CustomLink to={`/profile/${name}`}>{name}</CustomLink>
                            <CustomLink to='/raiting'>Общий рейтинг</CustomLink>
                            <Link to='#' onClick={handleSignout}>Выйти</Link>
                            <button className='switcher' dark-mode='false' onClick='changeTheme(event);'>&#9788;</button>
                        </>
                    ) : (
                        <>
                            <CustomLink to='/signin'>Войти</CustomLink>
                            <CustomLink to='/signup'>Зарегистрироваться</CustomLink>
                            <button className='switcher' dark-mode='false' onClick='changeTheme(event);'>&#9788;</button>
                        </>
                    )}
                </div>
                </div>
        </nav>
    )
}