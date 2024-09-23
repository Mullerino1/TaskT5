import Student from "./Students"
import { useState } from "react"
import { Student as StudentProps} from "./Types"
import StudentForm from "./StudentForm"



type GridProps = {
    students: StudentProps[];
}

export default function Grid(props: GridProps){
    const [students, setStudents] = useState<StudentProps[]>(props.students ?? [])

    const onAddStudent = (student: {name : string }) => {
        setStudents((prev) => [...prev, {id: crypto.randomUUID(), ...student}])
    }

    return (
        <section>
        <article className="grid">
            {students.map((student) => (
            <Student key={student.id} name={student.name} id={student.id} />
             ))}
        </article>
    
         <StudentForm onAddStudent={onAddStudent}/>

    </section>
       
    )
}