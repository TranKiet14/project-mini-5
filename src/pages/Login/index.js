import { checkLogin } from "../../actions/login";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/userService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Login.scss'
import { useState } from "react";
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [input, setInput] = useState("form-login__input")
    const [error, setError] = useState("form-login__error")
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;
        const response = await login(email,password);
        if(response.length>0) {
            setCookie("id", response[0].id, 1);
            setCookie("fullName", response[0].fullName, 1);
            setCookie("email", response[0].email, 1);
            setCookie("token", response[0].token, 1);
            dispatch(checkLogin(true));
            navigate("/"); 
        }
        else{
            setInput("form-login__input form-login__input--active");
            setError("form-login__error form-login__error--active");
        }
    }
    return (
        <>
            <div className="form-login">
                <form className="form-login__main" onSubmit = {handleSubmit}>
                    <h2 className="form-login__title">Đăng Nhập</h2>
                    <div className="form-login__item">
                        <input className={input} type="email" placeholder="Nhập email" />
                    </div>
                    <div className="form-login__item">
                        <input className={input} type="password" placeholder="Nhập mật khẩu" />
                    </div>
                    <div className={error}>Sai tài khoản hoặc mật khẩu</div>
                    <button className="form-login__btn" type="submit">Đăng Nhập</button>
                </form>
            </div>
            
        </>
    )
}
export default Login