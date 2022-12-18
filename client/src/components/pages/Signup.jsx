import { useSelector, useDispatch } from "react-redux";
import * as types from '../../store/types';
// import { signup } from "../hooks/auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    // const handleCange = async (e) => {
    //     e.preventDefault()
    //     const name = e.target.name.value
    //     const email = e.target.email.value
    //     const password = e.target.password.value
    //     const data = await signup(name, email, password)
    //     dispatch({ type: types.ADD_NAME, payload: { name: data.name}})
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
      <button type="submit">Зарегистрироваться</button>
      </form>
      );
}