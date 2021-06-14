// *******정상작동 되는 코드*******

// import React, { useState } from "react";

// export default function Login(props) {
//     const [email, setEmail] = useState();
//     const [password, setPassword] = useState();

//     const createToken = async (user, pw) => {
//         const res = await fetch("http://localhost:4000/users/login", {
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//                 email: user,
//                 password: pw,
//             }),
//         });
//         return await res.json();
//     };

//     const loginClick = async () => {
//         const token = await createToken(email, password);
//         console.log(token);
//         // console.log(res);
//     };

//     return (
//         <>
//             <input type="text" onChange={(e) => setEmail(e.target.value)} />
//             <input
//                 type="password"
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={loginClick}>Login</button>
//         </>
//     );
// }
