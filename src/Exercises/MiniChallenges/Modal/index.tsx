import { useState } from "react"
import { createPortal } from "react-dom";
import Modal from "./modal";

export default function Home(){
    const [isOutsideClick, setOutsideClick] = useState(true);
    const [isCloseOnEscape, setCloseOnEscape] = useState(true);
    const [isCloseIcon, setCloseIcon] = useState(true);
    const [showBackdrop, setShowBackdrop] = useState(true);
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="flex justify-center flex-col text-center items-center gap-2 z-0">
            <div>
                <label htmlFor="closeOutsideClick">Close on outside click</label>
                <input type="checkbox" 
                    className="cursor-pointer ml-2"
                    id='closeOutsideClick'
                    checked={isOutsideClick} 
                    onChange={()=> setOutsideClick(!isOutsideClick)}/>
            </div>
            <div>
                <label htmlFor="closeOnEscape">Close dialog on escape</label>
                <input type="checkbox"
                    className="cursor-pointer ml-2" 
                    id='closeOnEscape'
                    checked={isCloseOnEscape} 
                    onChange={()=> setCloseOnEscape(!isCloseOnEscape)}/>
            </div>
            <div>
                <label htmlFor="isCloseIcon">Show close icon</label>
                <input type="checkbox"
                className="cursor-pointer ml-2" 
                    id='isCloseIcon'
                    checked={isCloseIcon} 
                    onChange={()=> setCloseIcon(!isCloseIcon)}/>
            </div>
            <div>
                <label htmlFor="showBackdrop">Show backdrop</label>
                <input type="checkbox" 
                className="cursor-pointer ml-2"
                    id='showBackdrop'
                    checked={showBackdrop} 
                    onChange={()=> setShowBackdrop(!showBackdrop)}/>
            </div>
            <button className="cursor-pointer border-2 p-2 w-1/5"
             onClick={()=> setShowModal(true)}>Show Modal</button>
            {showModal && <Modal showBackdrop={showBackdrop} isCloseIcon={isCloseIcon}
            closeModal={()=> setShowModal(false)} isCloseOnEscape={isCloseOnEscape}
            isOutsideClick={isOutsideClick}/>}
        </div>
    )
}