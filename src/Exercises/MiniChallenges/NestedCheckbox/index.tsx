import { useState } from "react";
import Checkbox from "./checkbox";
import { checkboxData, CheckboxDataType } from "./data";

interface Status {
    active: boolean;
}

export default function NestedCheckbox() {
const [nestedData, setNestedData]= useState(checkboxData);

    function changeSelect(name: string, data: CheckboxDataType[], status?: Status) {
        const newData = data.map(checkbox => {
            if(status) {
                checkbox.checked = status.active;
                checkbox.children = changeSelect(name, checkbox.children, {active: status.active});
            } else {
                if(name === checkbox.name) {
                    checkbox.checked = !checkbox.checked;
                    checkbox.children = changeSelect(name, checkbox.children, {active: checkbox.checked});
                } else {
                    checkbox.children = changeSelect(name, checkbox.children);
                }
                checkbox.children.forEach(children=> {
                    if(children.checked === false) {
                        console.log('POSITIVE',children,children.checked);
                        checkbox.checked = false
                    }
                })
            }
            return checkbox;
        })
        return newData;
    }

    function updateCheckbox(name: string) {
        const data = structuredClone(nestedData);
        let updatedCheckbox = changeSelect(name, data);
        setNestedData(updatedCheckbox);
    }

    return(
        <div>
            <h1 className="m-4"> 
                Nested Checkbox
            </h1>
            <Checkbox checkBoxData={nestedData} changeSelect={updateCheckbox}/>
        </div>
    )
}