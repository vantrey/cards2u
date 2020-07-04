import React from "react";

type PropsType = {
    message: string
}

const ErrorServerMessageParser: React.FC<PropsType> = ({message}) => {

    const messageParse = (message: string) => {

        switch (message) {

            case 'some error':
                return 'user already exist'; // registration reducer

            case 'Email address not found':
                return 'nonexistent email';   // несуществующий, restorePsw reducer

            case 'bad token!':
                return 'please, sign in';  // all reducers

            default:
                return 'server error';  // all reducers
        }
    };

    return (
        <>
            {messageParse(message)}
        </>
    )
};

export default ErrorServerMessageParser