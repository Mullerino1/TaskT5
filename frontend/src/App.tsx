// import Student from "./Components/Students";
// import Avatar from "./Components/Avatar";
import Grid from "./Components/Grid";
import { useState } from "react"
import Total from "./Components/Total";
import type { Student } from "./Components/Types";
import StudentForm from "./Components/StudentForm";
import Filter from "./Components/Filter";


const initialStudents = [
  { id: '1995', name:'Shvan'},
  { id: '2004', name:'Ida'},
  { id: '2003', name:'Philip'},
  { id: '2002', name:'Nola'},
]


function App() {
  const [filter, setFilter] = useState('-')
  const [students, setStudents] = useState<Student[]>(initialStudents ?? [])

  const filteredStudents = students.filter((student) => filter != '-' ? student.name.toLowerCase().includes(filter) : true )


//   const onAddStudent = (student: Omit<Student, "id">) => {
//     setStudents((prev) => [...prev, {id: crypto.randomUUID(), ...student}])
// }

const options = Array.from(
  students
    .reduce((acc, student: Student) => {
      const name = student.name.trim().split(" ")[0];
      if (acc.has(name)) return acc;

      return acc.set(name, {
        ...student,
        value: name.toLowerCase(),
        label: name,
      });
    }, new Map())
    .values()
);

const onFilterChange = (filter: string) => {
  setFilter(filter)
}

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
    {/* <Grid students={students} onAddStudent={onAddStudent} onRemoveStudent={onRemoveStudent} /> */}
    <Filter filter={filter} onFilterChange={onFilterChange} options={Object.values(options)} />
    <Grid students={filteredStudents}  onRemoveStudent={onRemoveStudent} >
    <StudentForm onAddStudent={onAddStudent} />
    </Grid>
    <Total total={students.length} />
    
    </>

  )
}

export default App;