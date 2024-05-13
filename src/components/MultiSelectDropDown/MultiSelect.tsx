import type { MultiSelectTypes } from "./types/mutlSelectTypes.ts"


const MultiSelect: React.FC<MultiSelectTypes> = ({ optionList, placeHolder }) => {
    return (
        <div className="multi__select__container">

            <div className="multi__select__holder">{placeHolder}</div>

            <div className="multi__select__dropDown__container">
                <input type="text" placeholder="search" />

                <div className="multi__select__dropDon__list">

                    {optionList.map((list) => (<div className="multi__select__dropDown__item">{list.label}</div>))}


                </div>

            </div>



        </div>
    )
}

export default MultiSelect