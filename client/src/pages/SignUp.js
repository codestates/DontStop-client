import React, { Component } from 'react'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.setState = {
            email: "",
            password: "",
            name: ""
        }
    }
    
    render() {
        return (
            <div className='Main'>
                <div className='Signupwarp'>
                    <div className='OauthsignupBtnwrap'>
                        <button className='OauthsignupBtn' ><img src='img/googleLogo.png' alt='logo' className='google'/>Google</button>
                    </div>
                    <div className='inputField'>
                        {/* <div className='col-25'>이메일</div> */}
                        <input name='emailSignup'
                        type='email'
                        className='col-75'
                        placeholder='Email'/>
                    </div>
                    <div className='inputField'>
                        {/* <div className='col-25'>비밀번호</div> */}
                        <input name='password'
                        type='password'
                        className='col-75'
                        minlength='8'
                        maxLength='16'
                        placeholder='Password'/>
                    </div>
                    <div className='inputField'>
                        {/* <div className='col-25'>이름</div> */}
                        <input name='name'
                        type='text'
                        className='col-75'
                        placeholder='Username'/>
                    </div>
                    <div className='SignupBtnwrap'>
                        <input
                        type='submit'
                        className='SignupBtn' 
                        value='가입하기'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp
