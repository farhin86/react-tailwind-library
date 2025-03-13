import { CheckboxDataType} from './data';

interface CheckBox {
    checkBoxData: CheckboxDataType[],
    changeSelect: (name: string)=> void;
}

export default function Checkbox({checkBoxData, changeSelect}: CheckBox) {
    return(
        <>
        {checkBoxData && checkBoxData.map((box)=>{
            return(
                <div key={box.name} className='ml-4'>
                <div className='flex gap-2'>
                    <input type="checkbox" checked={box.checked} className='w-4 cursor-pointer' onChange={()=> changeSelect(box.name)}/>
                        {box.name}
                </div>
                {box.children && <Checkbox checkBoxData={box.children} changeSelect={changeSelect}/>}
                </div>
            )
        })}
        </>

    )
}