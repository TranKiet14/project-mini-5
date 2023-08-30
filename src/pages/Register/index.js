import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkExits, register } from "../../services/userService";
import { generateToken } from "../../helpers/generateToken";
function Register() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const checkExitsEmail = await checkExits("email", email);
        if (checkExitsEmail.length > 0) alert("email đã tồn tại");
        else {
            const option = {
                fullName: fullName,
                email: email,
                password: password,
                token: generateToken()
            }
            const response = await register(option);
            if(response){
                navigate("/login");
            } else {
                alert("Đăng ký không thành công");
            }
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div>
                    <input type="fullName" placeholder="Nhập họ tên" />
                </div>
                <div>
                    <input type="email" placeholder="Nhập email" />
                </div>
                <div>
                    <input type="password" placeholder="Nhập mật khẩu" />
                </div>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default Register