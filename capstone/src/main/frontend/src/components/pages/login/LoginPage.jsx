import React from "react";
import './LoginPage.css'

export const LoginPage = ({ email, pw, handlerEmail, handlerPw, loginButton }) => {
    return (
        <form onSubmit={loginButton}>
            <div className="content">
                <label className="input-label">이메일(아이디)</label>
                <input
                    type="text"
                    placeholder="이메일 형식으로 작성"
                    value={email}
                    onChange={(e) => handlerEmail(e)}
                    className="input-style"
                />
            </div>
            <div>
                <label className="input-label">비밀번호</label>
                <input
                    type="password"
                    value={pw}
                    onChange={(e) => handlerPw(e)}
                    className="input-style"
                />
            </div>
            <div className="content">
                <button className="login-button"
                    type="submit"
                >로그인
                </button>
            </div>
        </form>
    );
};

export default LoginPage;