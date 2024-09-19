import { useState } from "react";
import { Student as StudentProps } from "./Types"



export default function StudentForm(props: StudentProps){

    const {name, id} = props;
    const [StudentName, setStudentName] = useState()

    return (
        <>
        <form>
            <input name='' id='' />
        </form>
        </>
    )
}