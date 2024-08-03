import React from "react";
import { Outlet } from "react-router";
import { useNavigate } from 'react-router-dom';
import { NavLink, useLocation } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div>
            <nav className="nav">
                <NavLink to={'/products-api'} className={location.pathname === '/products-api' ? 'active' : ''}>Продукты полученные по api </NavLink>
                <NavLink to={'/products-added'} className={location.pathname === '/products-added' ? 'active' : ''}>Продукты добавленный через форму </NavLink>

                <NavLink to={'/addProduct'} className={location.pathname === '/addProduct' ? 'active' : ''}>Форма </NavLink>
                <NavLink to={'/change'} className={location.pathname === '/change' ? 'active' : ''}>Редактирование </NavLink>

            </nav>
         

            <div className="content">
                <h2>Main</h2>
                <button onClick={() => navigate(-1)} style={{
                    color: 'black',
                    padding: '10px 20px'
                }}>Вернуться назад</button>
                <Outlet />

            </div>
        </div>
    )
}

export default Main