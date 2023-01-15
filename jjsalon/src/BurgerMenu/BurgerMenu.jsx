import { useState } from 'react';
import './BurgerMenu.css';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
        <div className="burger-menu">
            <button className={`burger-button ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
                <div className="burger-line"></div>
            </button>
            </div>
            <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <div className='exitWrapper'>
                    <button className={`exit ${isOpen ? 'open' : ''}`} onClick={toggleOpen}><p>X</p></button>
                    </div>
                <a href="#">O mnie</a>
                <a href="#">Cennik</a>
                <a href="#">Galeria</a>
                <a href="#">Kontakt</a>
            </nav>
            </>
    );
}

export default BurgerMenu;