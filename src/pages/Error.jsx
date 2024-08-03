import React from "react";
import { useNavigate } from "react-router";


const Error = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Ошибка маршкута </h1>
            <button onClick={() => navigate(-1)} style={{
                color: 'black',
                padding: '10px 20px'
            }}>Вернуться назад</button>
        </>
    )
}
export default Error