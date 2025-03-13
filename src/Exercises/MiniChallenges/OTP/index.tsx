import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import './index.css';

interface OtpValues {
    value: string;
}

const otpLength = [...Array(6)];
const otpValue = [{value: ''}, {value: ''},{value: ''},{value: ''},{value: ''},{value: ''}]

export default function OtpValidation() {
    const [otpValues, setOtpValues]= useState<OtpValues[]>(otpValue);
    const [activeInput, setActiveInput]= useState(0);

    function onchange(otpSerial: number, newVal: string) {
        const updatedVal:OtpValues[] = otpValues ? [...otpValues]: [];
        if(updatedVal[otpSerial]) {
            updatedVal[otpSerial].value = newVal;
        } else {
            updatedVal[otpSerial] = {value: newVal};
        }
        setOtpValues(updatedVal);
    }

    function nextOtp(otpSerial: number, val: string) {
        onchange(otpSerial+1, val);
        setActiveInput(otpSerial+1);
    }

    function moveFocus(otpSerial: number, action: string) {
        if(action === 'RIGHT') {
            if(otpSerial + 1 < otpValue.length){
                setActiveInput(otpSerial +1);
            }
        } else if(action === 'LEFT') {
            if(otpSerial - 1 > -1) {
                setActiveInput(otpSerial -1);
            }
        } else if(action === 'BACK') {
            if(otpSerial - 1 > -1) {
                setActiveInput(otpSerial -1);
                onchange(otpSerial-1, '');
            }
        }
    }

    return (
        <div className="flex gap-3 m-10">
            {otpLength && otpLength.map((val, index)=>{
                return (
                    <div key={index}>
                        <OtpInput activeInput={activeInput === index} otpValue={otpValues && otpValues[index]?.value}  onchange={(inputVal: string)=>onchange(index, inputVal)}
                         nextOtp={(val)=>nextOtp(index, val)} moveFocus={action => moveFocus(index,action)}/>
                    </div>
                )
            })}
        </div>
    )
}

interface OtpInput {
    otpValue: string;
    onchange: (val:string)=> void;
    nextOtp: (val:string)=> void;
    activeInput: boolean;
    moveFocus: (action: string)=> void;
}

function OtpInput({otpValue, onchange, nextOtp, activeInput, moveFocus}: OtpInput) {
    const otpInputRef = useRef<any>(null);

    useEffect(()=>{
        if(activeInput && otpInputRef.current) {
            otpInputRef.current.focus();
        }
    },[activeInput]);

    function otpValidation(event: ChangeEvent<HTMLInputElement>) {
        const inputVal = event?.target.value;
        if(inputVal && inputVal.toString().length === 1) {
            onchange(inputVal);
        } else {
            nextOtp(inputVal.toString().slice(-1))
        }
    }

    function getKeyname(event: KeyboardEvent<HTMLInputElement>) {
        switch (event.key) {
            case 'Backspace':
                if(event.target.value === '') {
                    moveFocus("BACK");
                } else {
                    onchange('');
                }
                break;
            case 'ArrowLeft':
                moveFocus("LEFT");
                break;
            case 'ArrowRight':
                moveFocus("RIGHT");
                break;
            default:
                break;
        }
    }

    return (
        
        <input ref={otpInputRef}  type="number" maxLength={1} className="w-10 h-10 border-gray-400 border-2 text-center remove-caret"
         value={otpValue} onChange={e=>otpValidation(e)} onKeyDown={event => getKeyname(event)}/>
    )
}