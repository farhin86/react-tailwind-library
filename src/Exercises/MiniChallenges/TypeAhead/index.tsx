import { useEffect, useRef, useState } from 'react';
import {suggestionsList} from './data';

export default function TypeAhead() {
    const [inputText, setInputText]= useState<string>('');
    const [options, setOptions] = useState<string[]>([]);
    // const activeOptionRef = useRef<HTMLElement>(null);
    // const activeOptionIndex = useRef(0);
    const [activeOptionIndex, setActiveOptionIndex] = useState<number>(-1);

    function onchangeInput(e) {
        const val = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
        setInputText(val);
        setList(val);
        setActiveOptionIndex(0);
    }

    function setList(val: string) {
        if(val === '') {
            setOptions([])
        } else {
            const updatedList = suggestionsList.filter(suggestion => suggestion.startsWith(val));
            setOptions(updatedList)
        }
    }

    function selectOption(val: string, index: number) {
        setInputText(val);
        setActiveOptionIndex(index);
    }

    function getKeyAction(e) {

        const handledKey = ['Enter', 'ArrowDown', 'ArrowUp'];

        if(!handledKey.includes(e.key)){
            return;
        }
        
        let index = activeOptionIndex;
        if(e.key === 'Enter') {
            if(activeOptionIndex !== -1) {
                setInputText(options[index]);
            }
        } if(e.key === 'ArrowDown') {
            if(index < options.length-1) {
                index++;
            } else if(index === options.length -1) {
                index = 0
            }
        } else if(e.key === 'ArrowUp') {
            if(index && index > 0) {
                index--;
            } else if(index === 0) {
                index = options.length-1;
            }
        }
        setActiveOptionIndex(index);
    }

    return (
        <div className='m-10 w-full flex flex-col items-center relative'>
            <div className='relative w-1/3'>
                <input value={inputText} onChange={onchangeInput} onKeyDown={(e)=> getKeyAction(e)}
                className='border-2 w-full h-12 p-2' placeholder='Search for Country' />
                <div className='absolute top-3 right-5 cursor-pointer' onClick={()=>{
                    setInputText('');
                    setOptions([])
                }}>X</div>
            </div>
            <div className='w-1/3 absolute top-12 z-10'>
                {options.length > 0 && options.map((option, index)=>{
                    return (
                        <div tabIndex={1} key={option} onClick={()=> selectOption(option, index)} onKeyDown={(e)=> getKeyAction(e)}
                        className={`my-1 pl-3 bg-yellow-100 h-10 flex items-center hover:bg-yellow-300 cursor-pointer focus:bg-yellow-300 ${index == activeOptionIndex ? '!bg-slate-400' : ''}`}
                        >{option}</div>
                    )
                })}
            </div>
        </div>
    )
}