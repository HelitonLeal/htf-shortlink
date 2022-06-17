import './error.css';

import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div className='container-erro'>
            <img src='/not_found.png' alt='Erro 404, página não encontrada' />
            <h1>PÁGINA NÃO ENCONTRADA!!!</h1>
            <Link className='btn-home' to='/'>
                Home
            </Link>
        </div>
    );
}