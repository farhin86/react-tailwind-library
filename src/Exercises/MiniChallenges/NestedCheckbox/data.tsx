
export interface CheckboxDataType {
name: string;
checked: boolean;
children: CheckboxDataType[]
}

export const checkboxData: CheckboxDataType[] = [
    {name: 'p1', checked: false, children: [{name: 'p1-c1', checked: false, children: [{name: 'p1-c1-c1', checked: false, children:[]}]},
        {name: 'p1-c2', checked: false, children: [{name: 'p1-c2-c1', checked: false, children:[]},
        {name: 'p1-c2-c2', checked: false, children:[{name: 'p1-c2-c2-c1', checked: false, children:[]}, {name: 'p1-c2-c2-c2', checked: false, children:[]}]}]},
        ]},
    {name: 'p2',checked: false, children: [{name: 'p2-c1', checked: false, children:[]}]},
    {name: 'p3', checked: false, children: []},
]