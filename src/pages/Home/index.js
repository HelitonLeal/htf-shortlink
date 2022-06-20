import { useState } from 'react';
import {FiLink} from "react-icons/fi";

import './home.css';

import Menu from '../../components/Menu';
import Modal from '../../components/Modal';

import api from '../../services/api';
import { saveLink } from '../../services/storeLinks';

export default function Home(){

    const [link, setLink] = useState('');
    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    async function handleShortLink(){
        try{
            const response = await api.post('/shorten', {
                long_url: link            
            })

            setData(response.data);
            setShowModal(true);

            saveLink('@shortLink', response.data);

            setLink('');

        }catch{
            alert('Algo Errado!!');
            setLink('');
        }
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
                content={data}
            />
            ) }       
        </div>
    );
}