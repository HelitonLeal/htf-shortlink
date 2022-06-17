import './menu.css';
//import { BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Menu(){
    return(
        <div className='menu' >
            <Link className='menu-item' to='/links'>
                Meus Links
            </Link>
        </div>
    );
}