import React from "react";
import GoogleLogin from "react-google-login";

const clientId = "488469877588-tr5ojh6ki3kl29g2q3pjj7lqtru04caa";
// -> .env파일 만들어서옮기기

export default function OauthSign({ onSocial }) {
    const onSuccess = async (response) => {
        console.log(response);

        const {
            googleId,
            profileObj: { email, name },
        } = response;

        await onSocial({
            socialId: googleId,
            socialType: "google",
            email,
            nickname: name,
        });
    };

    const onFailure = (error) => {
        console.log(error);
    };

    return (
        <div>
            <GoogleLogin
                clientId={clientId}
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </div>
    );
}
