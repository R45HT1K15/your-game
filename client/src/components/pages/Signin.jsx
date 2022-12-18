import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import AppLoader from "../components/Loader";
// import * as types from '../store/types';
import { useNavigate } from "react-router-dom";

export default function Signin() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleCange = async (e) => {
    //     e.preventDefault()
    //     const name = e.target.name.value
    //     const password = e.target.password.value
    //     const data = await signin(name, password)
    //     console.log('data', data)
    //     dispatch({ type: types.ADD_NAME, payload: { name: data.name, email: data.email}})
    //     dispatch({ type: types.ADD_TASK, payload: data.Tasks})
    //     navigate("/")
    // }

    return (
        <form>
        <div>
            <label>Ваше имя</label>
            <input name="name" type="text"/>
        </div>
        <div>
            <label>Пароль</label>
            <input name="password" type="password"/>
        </div>
        <button type="submit">Войти</button>
        </form>
      );
}