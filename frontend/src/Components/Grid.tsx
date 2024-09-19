import Student from "./Students"
import { useState } from "react"
import { Student as StudentProps} from "./Types"



type GridProps = {
    students: StudentProps[];
}

export default function Grid(props: GridProps){
    const [students, setStudents] = useState(props.students ?? [])

    return (
    <article className="grid">
        {students.map((student) => (
            <Student key={student.id} name={student.name} id={student.id} />
        ))}
    </article>
       
    )
}