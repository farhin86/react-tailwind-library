import { useEffect, useState } from "react"
import { createPortal } from "react-dom";

interface Props {
    closeModal: ()=> void;
    isCloseIcon: boolean;
    showBackdrop: boolean;
    isCloseOnEscape: boolean;
    isOutsideClick: boolean;
}
export default function Modal({
    closeModal,
    isCloseIcon,
    showBackdrop,
    isCloseOnEscape,
    isOutsideClick
}: Props){

    useEffect(()=>{
        if(isCloseOnEscape) {
            window.addEventListener('keydown', close)
            return () => window.removeEventListener('keydown', close)
        }
    },[])

    const close = (e) => {
        if(e.key === 'Escape'){
            closeModal();
        }
    }
    return (
        <>
            {createPortal(    
            <section className={`fixed flex justify-center items-center inset-0 h-screen w-screen bg-opacity-30 z-10 ${showBackdrop ? 'bg-black': 'bg-wh'}`}
            onClick={() => isOutsideClick ? closeModal() : console.log('Outside')}>
                <section className="p-8 border-2 rounded w-1/2 bg-white z-20" 
                onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                  }}>
                    <header className="flex justify-between">
                        <h2 className="text-xl">Modal Heading</h2>
                        {isCloseIcon && <button className="cursor-pointer border-2 px-2" 
                        onClick={closeModal}>X</button>}
                    </header>
                    <div className="my-5">This is modal content. You can put any content here. This has a groovy backdrop!
                    You can also close this modal by clicking outside of it or pressing the escape key</div>
                    <button className="cursor-pointer border-2 px-2" onClick={closeModal}>Close</button>
                </section>
            </section>
            ,document.body )}
        </>
    )
}