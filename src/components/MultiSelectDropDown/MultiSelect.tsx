import type { MultiSelectTypes } from "./types/mutlSelectTypes.ts"
import { useEffect, useRef, useState } from "react"
import './styles/mutliselect.css'

const MultiSelect: React.FC<MultiSelectTypes> = ({ optionList, placeHolder }) => {

    const msContainerRef = useRef<HTMLDivElement>(null)
    const holderRef = useRef<HTMLDivElement>(null)
    const searchRef = useRef<HTMLInputElement>(null)
    const [openDropDown, setOpenDropDown] = useState<boolean>(false)

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


    const toggle = () => setOpenDropDown(open => !open)

    useEffect(() => document.addEventListener('click', handleClickOnDom, true), [])
    return (

        <div className="multi__select__container" ref={msContainerRef}>

            <div className="multi__select__holder" ref={holderRef}>
                <span>{placeHolder}</span>
                <i onClick={toggle} className={`fa-solid fa-arrow-up ${openDropDown && 'open'}`}></i>
            </div>

            <div className={`multi__select__dropDown__container ${openDropDown && 'active'} `}>
                <input type="text" placeholder="search" ref={searchRef} />

                <div className="multi__select__dropDon__list">
                    {optionList.map((list) => (
                        <div
                            key={list.label}
                            className="multi__select__dropDown__item">
                            {list.icon?.search('svg') ? (<img src={list.icon} width={20} />) : <span>{list.icon}</span>}
                            <span>{list.label}</span>

                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default MultiSelect