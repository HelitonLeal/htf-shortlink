import './modal.css';
import {FiClipboard, FiX} from 'react-icons/fi';

export default function Modal({closeModal}){
    return(
        <div className='container-modal'>
            <div className='header-modal'>
                <h2>Link Encurtado</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color='#00adb5' />
                </button>
            </div>

            <span>https://www.google.com.br</span>

            <button className='btn-modal'>
                https://bit.ly/ahUn867
                <FiClipboard size={20} color='#00adb5' />            
            </button>
        </div>
    );
}