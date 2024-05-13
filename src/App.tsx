import MultiSelect from "./components/MultiSelectDropDown/MultiSelect.tsx"
import type { List } from "./components/MultiSelectDropDown/types/mutlSelectTypes.ts"


const App = () => {

    const options: List[] = [
        { label: 'any1', value: 'any1' },
        { label: 'any2', value: 'any2' },
        { label: 'any3', value: 'any3' },
    ]

    return (
        <>
            <h1>Multi Select DropDown</h1>
            <hr></hr>
            <MultiSelect optionList={options} placeHolder="Multi Select" />
        </>
    )
}

export default App