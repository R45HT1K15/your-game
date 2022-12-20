import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { CustomLink } from '../castomLink/CastomLink'
import * as types from '../../store/types';
import { signout } from '../../functions/auth';
import useTheme from '../../hooks/useTheme'

export default function Navbar() {

    const { theme, setTheme } = useTheme()

    const handleClassicThemeClick = () => {
        setTheme('classic')
    }
    const handleCustomThemeClick = () => {
        setTheme('custom')
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { name } = useSelector((store) => store.profile)
   
    const handleSignout = async (e) => {
        e.preventDefault()
        const res = await signout()
        dispatch({ type: types.DEL_PROFILE })
        navigate('/')
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
                            <div className='switcher'>
                            <button className="classicTheme" onClick={handleClassicThemeClick}>
                                Classic
                            </button>
                            <button className="customTheme" onClick={handleCustomThemeClick}>
                                Custom
                            </button>
                            </div>

                        </>
                    ) : (
                        <>
                            <CustomLink to='/'>Своя игра</CustomLink>
                            <CustomLink to='/signin'>Войти</CustomLink>
                            <CustomLink to='/signup'>Зарегистрироваться</CustomLink>
                            <div className='switcher'>
                                <button className="classicTheme" onClick={handleClassicThemeClick}>
                                    Classic
                                </button>
                                <button className="customTheme" onClick={handleCustomThemeClick}>
                                    Custom
                                </button>
                            </div>
                        </>
                    )}
                </div>
                </div>
        </nav>
    )
}