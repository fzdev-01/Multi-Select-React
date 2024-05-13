export type MultiSelectTypes = {
    optionList: List[];
    placeHolder: string;
}

export type List = {
    value: string | number;
    label: string;
    icon?: string;
    disabled?: boolean;
}
