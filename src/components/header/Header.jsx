import React from "react";
import './header.css';

const Header = () => {
    return(
        <header>
            <nav className="app-nav">
                <div className="logo">
                    SWInfo
                </div>
                <div className="navigation">
                    <a href="#">
                        Персонажи
                    </a>
                    <a href="#">
                        Планеты
                    </a>
                    <a href="#">
                        Корабли
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;