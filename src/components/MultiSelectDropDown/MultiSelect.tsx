import type { List, MultiSelectTypes } from "./types/mutlSelectTypes.ts"
import { useEffect, useRef, useState } from "react"
import './styles/mutliselect.css'

const MultiSelect: React.FC<MultiSelectTypes> = ({ optionList, placeHolder }) => {

    const msContainerRef = useRef<HTMLDivElement>(null)
    const holderRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)
    const timerRef = useRef<undefined | number>(undefined)
    const [openDropDown, setOpenDropDown] = useState<boolean>(false)

    const [animationLoading, setAnimationLoading] = useState<boolean>(false)

    const [slectedValues, setSelectedValues] = useState<List[]>([])

    const [data, setData] = useState<List[]>(optionList)
    const handleClickOnDom = (e: Event) => {
        const t = e.target as HTMLDivElement | HTMLInputElement
        if (!msContainerRef.current?.contains(t)) {
            holderRef.current?.classList.remove('elmFocus')
            searchRef.current?.classList.remove('elmFocus')
            return setOpenDropDown(false)
        }
        setOpenDropDown(true)
        holderRef.current?.classList.add('elmFocus')
        searchRef.current?.classList.add('elmFocus')
    }

    const getValueOnClick = (val: string) => {

        if (slectedValues.filter((data) => data.value == val).length > 0) {

            return
        }
        setAnimationLoading(true)
        document.getElementById(val)?.classList.add('removeLableFromList')
        setSelectedValues((prev) => [...optionList.filter((data) => data.value == val), ...prev])
        timerRef.current = setTimeout(() => {
            setData(data.filter((data) => data.value != val))
            setAnimationLoading(false)

        }, 500) //based on animation in css

    }


    const removeValueFromHolder = (val: string) => {
        setAnimationLoading(true)
        document.getElementById(val)?.classList.add('returnValueToHolder')
        const returnToList = slectedValues.filter((data) => data.value == val);
        setData((prev) => [...returnToList, ...prev]);
        timerRef.current = setTimeout(() => {
            setSelectedValues(slectedValues.filter((data) => data.value != val))
            setAnimationLoading(false)
        }, 500) //based on animation in c
    }


    const toggle = () => setOpenDropDown(open => !open)

    useEffect(() => document.addEventListener('click', handleClickOnDom, true), [])
    return (

        <div className="multi__select__container" ref={msContainerRef}>

            <div className="multi__select__holder" ref={holderRef}>
                {
                    slectedValues.length > 0 ?
                        (<TempCompForSelectedValues values={slectedValues} removeIt={removeValueFromHolder} />)
                        :
                        (<TempCompForHolder placeHolder={placeHolder} isOpen={openDropDown} toggleFunc={toggle} />)
                }
            </div>

            <div className={`multi__select__dropDown__container ${openDropDown && 'active'} `}>
                <input type="text" placeholder="search" ref={searchRef} />

                <div className="multi__select__dropDon__list" >
                    {data.map((list) => (
                        <div
                            id={list.value}
                            key={list.label}
                            className="multi__select__dropDown__item  "
                            onClick={() => getValueOnClick(list.value)}
                        >
                            {/* {list.icon?.search('svg') ? (<img src={list.icon} width={20} />) : <span>{list.icon}</span>} */}
                            <span>{list.label}</span>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}



const TempCompForSelectedValues = ({ values, removeIt }: { values: List[], removeIt: (v: string) => void }) => {
    return (
        <>
            <div className="multi__select__dropDown__items__selected__container">

                {values.map((list) => (
                    <div
                        key={list.label}
                        id={list.value}
                        className="multi__select__dropDown__item_selected addValueToHolder"
                    >
                        {list.icon?.search('svg') ? (<img src={list.icon} width={20} />) : (<span>{list.value}</span>)}
                        <span>{list.value}</span>
                        <i onClick={() => removeIt(list.value)} className="fa-solid fa-circle-xmark"></i>
                    </div>
                ))}

            </div>
        </>
    )
}



const TempCompForHolder = ({ placeHolder, isOpen, toggleFunc }: {
    placeHolder: string;
    isOpen: boolean;
    toggleFunc: () => void
}) => {
    return (
        <>
            <span>{placeHolder}</span>
            <i onClick={toggleFunc} className={`fa-solid fa-arrow-up ${isOpen && 'open'}`}></i>
        </>
    )
}

export default MultiSelect