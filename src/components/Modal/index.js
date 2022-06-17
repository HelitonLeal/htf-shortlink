import './modal.css';
import {FiClipboard, FiX} from 'react-icons/fi';

export default function Modal({ closeModal, content }){

    async function copyLink(){
        await navigator.clipboard.writeText(content.link);
        alert('URL copiada com Sucesso!!');
    }

    return(
        <div className='container-modal'>
            <div className='header-modal'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#00adb5' />
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className='btn-modal' onClick={copyLink}>
                {content.link}
                <FiClipboard size={20} color='#00adb5' />            
            </button>
        </div>
    );
}