// *******정상작동 되는 코드*******

import React, { useState } from "react";

export default function Login(props) {
    // const [input, setInput] = useState({
    //     email: "",
    //     password: "",
    // });

    // const setInputData = () => {
    //     setInput({
    //         ...input,
    //     });
    // };

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    //토큰을 생성하는 코드
    const createToken = async (user, pw) => {
        const res = await fetch("http://localhost:4000/users/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: user,
                password: pw,
            }),
        });
        return await res.json();
    };

    // const login = async () => {
    //     const response = await api.createToken(input.username);
    // };

    const loginClick = async () => {
        const token = await createToken(email, password);
        console.log(token);
        localStorage.setItem("token", token);
        alert("로그인이 되었습니다.");
        // console.log(res);
    };

    return (
        <>
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={loginClick}>Login</button>
        </>
    );
}
