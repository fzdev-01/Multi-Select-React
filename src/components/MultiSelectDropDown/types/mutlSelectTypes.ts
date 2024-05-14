export type MultiSelectTypes = {
    optionList: List[];
    placeHolder: string;
}

export type List = {
    value: string | any; //any for now updatelater dont forget 
    label: string;
    icon?: string;
    disabled?: boolean;
}
