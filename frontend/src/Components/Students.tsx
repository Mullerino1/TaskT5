import Avatar from "./Avatar"
import { Student as StudentProps } from "./Types"



export default function Student(props: StudentProps){
    const {id, name} = props

    return(
        <>
        <Avatar name={name} />
        <p className="student-name">{name}</p>
        </>
    )
}