
import "./style.css";
import logo from '../../assets/logo.png'
import Cart from "../cart";
import bag from '../../assets/bag.png'
import { Link } from "react-router-dom";
const NavBar = (props) => {


    const openSidebar = () => {
        const event = new CustomEvent('openSidebar');
        window.dispatchEvent(event);
    }
    return <div className="navBar">

        <Link to={'/'} >
            <img
                src={logo}
                className="logoTipo"
                alt="logo"
            />
        </Link>

        {
            props.showMenu ?

                <div className="menu">
                    <Link to="/historico">Historico</Link>
                    <button onClick={openSidebar} className="btn btn-red">
                        <img src={bag} className="icon" />
                        Sacola
                    </button>
                </div>
                : null
        }

        <Cart />
    </div>
}
export default NavBar;