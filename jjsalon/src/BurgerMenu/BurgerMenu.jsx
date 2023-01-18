import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';

const BurgerMenu = () => {
        const [isOpen, setIsOpen] = useState(false);

        const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
        const [PaddingTop, setPadding] = useState("15vw");
      
        const listenScrollEvent = () => {
          window.scrollY > 10 ? setPadding("3vw") : setPadding("15vw");
        };
      
        useEffect(() => {
          window.addEventListener("scroll", listenScrollEvent);

          return () => {
            window.removeEventListener("scroll", listenScrollEvent);
          };
        }, []);

        return (
        <>

        <div className="burger-menu"  style={{
                paddingTop: PaddingTop,
            }}>
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
                    <Link to="/"><button className="menuLink">Home</button></Link>
            <Link to="/omnie"><button className="menuLink">O mnie</button> </Link>
            <Link to="/cennik"><button className="menuLink">Cennik</button></Link>
            <Link to="/galeria"><button className="menuLink">Galeria</button></Link>
            <Link to="/kontakt"><button className="menuLink">Kontakt</button></Link>
            </nav>
            </>
    );
}

export default BurgerMenu;