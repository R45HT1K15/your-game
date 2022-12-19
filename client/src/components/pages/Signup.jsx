import { useSelector, useDispatch } from "react-redux";
import * as types from '../../store/types';
import { signup } from '../../functions/auth';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button'
export default function Signup() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const password = e.target.password.value
        const data = await signup(name, password)
        dispatch({ type: types.ADD_PROFILE, payload: { id: data.id, name: data.name }})
        navigate("/")
    }

    return (
        <form onSubmit={handleChange}>
            <div className='authForm'>
                <h4>Регистрация</h4>
                <div className="divForLogin">
                    <label>Ваше имя</label>
                    <input name="name" type="text"/>
                </div>
                <div className="divForPassword">
                    <label>Пароль</label>
                    <input name="password" type="password"/>
                </div>
                <button className="btnForAuth" type="submit">Зарегистрироваться</button>
            </div>
        </form>
      );
}