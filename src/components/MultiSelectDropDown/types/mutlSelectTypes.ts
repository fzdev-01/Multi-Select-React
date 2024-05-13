export type MultiSelectTypes = {
    optionList: List[];
    placeHolder: string;
}

export type List = {
    value: string | undefined;
    label: string;
    icon?: string;
    disabled?: boolean;
}
