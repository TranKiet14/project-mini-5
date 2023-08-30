/* eslint-disable no-unused-vars */
import { NavLink, Outlet } from 'react-router-dom'
import './LayoutDefault.scss'
import { getCookie } from '../../helpers/cookie'
import { useSelector } from 'react-redux';
function LayoutDefault() {
    const token = getCookie("token");
    const isLogin = useSelector(state => state.loginReducer);
    const navLinkActiveMenu = (e) => {
        return e.isActive ? "menu__item menu__item--active" : "menu__item";
    }
    const navLinkActiveAcount = (e) => {
        return e.isActive ? "account__item account__item--active" : "account__item";
    }
    return (
        <>
            <div className="layout-default">
                <header className="layout-default__header">
                    <div className="layout-default__logo">Quiz</div>
                    <div className="menu">
                        <ul>
                            <li>
                                <NavLink className={navLinkActiveMenu} to="/" >Home</NavLink>
                            </li>
                            {token && (<>
                                <li>
                                    <NavLink className={navLinkActiveMenu} to="/topic" >Topic</NavLink>
                                </li>
                                <li>
                                    <NavLink className={navLinkActiveMenu} to="/answers" >Answers</NavLink>
                                </li>
                            </>)}

                        </ul>
                    </div>
                    <div className="account">
                        {token ? (
                            <>
                                <NavLink className={navLinkActiveAcount} to={"/logout"}>Đăng xuất</NavLink>
                            </>) : (
                            <>
                                <NavLink className={navLinkActiveAcount} to={"/login"}>Đăng nhập</NavLink>
                                <NavLink className={navLinkActiveAcount} to={"/register"}>Đăng ký</NavLink>
                            </>)}

                    </div>
                </header>
                <main className="layout-default__main">
                    <Outlet />
                </main>
                <footer className="layout-default__footer">
                    CopyRight @2023 by kiet
                </footer>
            </div>
        </>
    )
}
export default LayoutDefault