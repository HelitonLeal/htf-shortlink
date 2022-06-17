import './links.css';

import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Links(){
    return(
    <div className='container-links'>
        <div className='header-links'>
            <Link to='/'>
                <FiArrowLeft size={40} color='#00adb5' />            
            </Link>
            <h1>Meus Links</h1>
        </div>

        <div className='item-links'>
            <button className='link'>
                <FiLink size={18} color='#fff' />
                https://www.google.com.br
            </button>
            <button className='trash'>
                <FiTrash size={24} color='#f00'/>
            </button>
        </div>
        <div className='item-links'>
            <button className='link'>
                <FiLink size={18} color='#fff' />
                https://www.google.com.br
            </button>
            <button className='trash'>
                <FiTrash size={24} color='#f00'/>
            </button>
        </div>
    </div>
    );
}