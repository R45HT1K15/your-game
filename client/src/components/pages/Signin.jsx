import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import AppLoader from "../components/Loader";
import * as types from '../../store/types';
import { signin } from '../../functions/auth';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button'
export default function Signin() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value
        const data = await signin(name, password)
        dispatch({ type: types.ADD_PROFILE, payload: { id: data.id, name: data.name }})
        // dispatch({ type: types.ADD_TASK, payload: data.Tasks})
        navigate("/")
    }

    return (
        <form onSubmit={handleChange}>
            <div className='authForm'>
            <h4>Вход</h4>
            <div className="divForLogin"> 
                <label>Ваше имя</label>
                <input name="name" type="text"/>
            </div>
            <div className="divForPassword">
                <label>Пароль</label>
                <input name="password" type="password"/>
            </div>
            <Button className="btnForAuth" type="submit">Войти</Button>
        </div>
        </form>
      );
}