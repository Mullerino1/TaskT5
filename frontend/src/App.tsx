// import Student from "./Components/Students";
// import Avatar from "./Components/Avatar";
import Grid from "./Components/Grid";
import { useState } from "react"
import Total from "./Components/Total";
import type { Student } from "./Components/Types";


const initialStudents = [
  { id: '1995', name:'Shvan'},
  { id: '2004', name:'Ida'},
  { id: '2003', name:'Philip'},
  { id: '2002', name:'Nola'},
]


function App() {
  const [students, setStudents] = useState<Student[]>(initialStudents ?? [])

//   const onAddStudent = (student: Omit<Student, "id">) => {
//     setStudents((prev) => [...prev, {id: crypto.randomUUID(), ...student}])
// }
const onAddStudent = (student: { name: string }) => {
  setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student }]);
};

const onRemoveStudent = (id: string) => {
  setStudents((prev) => prev.filter((student) => student.id !== id))
}



  return  (
    <>
    {/* <Student name="Philip" id="2003"/>  */}
    {/* <Avatar name= '' /> */}
    <Grid students={students} onAddStudent={onAddStudent} onRemoveStudent={onRemoveStudent} />
    <Total total={students.length} />
    
    </>

  )
}

export default App;