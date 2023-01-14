import { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="burger-menu">
            <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
        </div>
    );
}

export default BurgerMenu;