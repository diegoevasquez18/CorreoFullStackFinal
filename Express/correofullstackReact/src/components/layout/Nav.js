import React from "react";
import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css'

const Nav = (props) => {
    return (
        <div class="holder">
            <nav>
                <div class="holder">
                    <ul>
                        <li><NavLink to='/' className={({ isActive })=> isActive ? 'activo' : undefined}>Inicio</NavLink></li>
                        <li><NavLink to='/Servicios' className={({ isActive })=> isActive ? 'activo' : undefined}>Servicios</NavLink></li>
                        <li><NavLink to='/Contactanos' className={({ isActive })=> isActive ? 'activo' : undefined}>Contactanos</NavLink></li>
                        <li><NavLink to='/Ecofriendly' className={({ isActive })=> isActive ? 'activo' : undefined}>Ecofriendly</NavLink></li>
                        <li><NavLink to='/Nosotros' className={({ isActive })=> isActive ? 'activo' : undefined}>Nosotros</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav;