import MultiSelect from "./components/MultiSelectDropDown/MultiSelect.tsx"

import { data } from "./components/data/data.ts"

const App = () => {

    const updateOBJ = data.map(({ country, code, flag }) => ({ label: country, value: code, icon: flag }))

    return (
        <>
            <h1>Multi Select DropDown</h1>
            <hr></hr>
            <MultiSelect optionList={updateOBJ} placeHolder="Multi Select" />
        </>
    )
}

export default App