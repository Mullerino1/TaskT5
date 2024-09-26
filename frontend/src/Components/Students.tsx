import Avatar from "./Avatar"
import { Student as StudentProps } from "./Types"
import { useState } from "react"



export default function Student(
    props: StudentProps & {
        onRemoveStudent: (id: string) => void
    },

) {
        const {id, name, onRemoveStudent} = props
        const [showRemove, setShowRemove] = useState(false)

        const updateShowState = () => {} 


    return(
        <>
        <div
        onMouseOver={updateShowState} onMouseLeave={() => setShowRemove(false)}
        ></div>
        <Avatar name={name} />
        <p className="student-name">{name}</p>
        {showRemove ? (
        <button type="button" onClick={() => onRemoveStudent(id)}>Remove</button>
        ) : null}
        </>
    )
}