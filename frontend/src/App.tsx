// import Student from "./Components/Students";
// import Avatar from "./Components/Avatar";
import Grid from "./Components/grid";

const students = [
  { id: '1995', name:'Shvan'},
  { id: '2004', name:'Ida'},
  { id: '2003', name:'Philip'},
  { id: '2002', name:'Nola'},
]


function App() {

  return  (
    <>
    {/* <Student name="Philip" id="2003"/>  */}
    {/* <Avatar name= '' /> */}
    <Grid students={students} />
    </>

  )
}

export default App;