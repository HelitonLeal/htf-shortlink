import { useState } from 'react';

import './home.css';

import {FiLink} from "react-icons/fi";
import Menu from '../../components/Menu';
import Modal from '../../components/Modal';

export default function Home(){

    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function handleShortLink(){
        setShowModal(true);
    }

    return(
        <div className="container-home">
            <div className="capa">
                <img src="/link.png" alt="HTF ShortLink Logo" />
                <h1>HTF ShortLink</h1>
                <span>Encurtando caminhos!! </span>
            </div>
            <div className="area-input">
                <div>
                    <FiLink size={24} color='#fff'/>
                    <input 
                    placeholder="Cole ou Digite o link para encurtar..."
                    value={link}
                    onChange={(event) => setLink(event.target.value)}
                    />
                </div>

                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>
            <Menu />

            { showModal && (
            <Modal 
                closeModal={() => setShowModal(false) }
            />
            ) }       
        </div>
    );
}