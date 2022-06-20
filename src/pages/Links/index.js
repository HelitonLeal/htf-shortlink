import { useState, useEffect } from 'react';

import './links.css';

import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { getlinksSave, deleteLink } from '../../services/storeLinks';
import Modal from '../../components/Modal';

export default function Links(){

    const [myLinks, setMyLinks] = useState([]);

    const [data, setData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const [emptyList, setEmptyList] = useState(false);
    
    useEffect(() => {
        async function getLinks(){
            const result = await getlinksSave('@shortLink')

            if(result.length === 0){
                setEmptyList(true);
            }

            setMyLinks(result);
        }

        getLinks();

    }, []);

    function handleOpenLink(link){
        setData(link);
        setShowModal(true);
    }

    async function handleDelete(id){
        const result =  await deleteLink(myLinks, id);
        if(result.length === 0){
            setEmptyList(true);
        }
        setMyLinks(result);
    }

    return(
    <div className='container-links'>
        <div className='header-links'>
            <Link to='/'>
                <FiArrowLeft size={40} color='#00adb5' />            
            </Link>
            <h1>Meus Links</h1>
        </div>

        {emptyList && (
            <div className='item-links' >
                <h2 className='empty-item'>Sua Lista está vazia...</h2>
            </div>
        )}

        {myLinks.map(link => (
            <div key={link.id} className='item-links'>
            <button className='link' onClick={() => handleOpenLink(link)} >
                <FiLink size={18} color='#fff' />
                {link.long_url}
            </button>
            <button className='trash' onClick={() => handleDelete(link.id)} >
                <FiTrash size={24} color='#f00'/>
            </button>
        </div>
        ))}

        {showModal && (
            <Modal 
            closeModal={() => setShowModal(false)}
            content={data}
            />
        )}
    </div>
    );
}