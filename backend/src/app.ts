import { Hono } from "hono";
import { cors } from "hono/cors";
import { isNameValid } from "./lib/validators";
// import type { Student } from "./types";
// import { getStudentData, updateStudentData } from "./studentInfo";

const app = new Hono();

app.use("/*", cors());

let students = [
  { id: "1", name: "Ola Normann" },
  { id: "2", name: "Kari Normann" },
];

app.get("/api/students", (c) => {
  return c.json(students)
})

// app.get("/api/students/:id", (c) => {
// const id = c.req.param("id")
// const student = student.filter((student) => student.id === id)
// return c.json(student)
// })
// How this would look in frontend
// fetch("/api/students/1"), {method: "GET"})
app.get("/api/v1/students/:id", (c) => {
  const id = c.req.param("id");
  const student = students.filter((student) => student.id === id);



  return c.json(student);
});

//fetch('http://server-url/api/students, {method: "POST", body: JSON.stringify(data)}) 

// app.post("/api/students/:id", async (c) => {
//   const data = await c.req.json()
//   const {name} = data
//   students.push({ id: crypto.randomUUID(), name})
//   return c.json(students,{ status: 201})
// })

app.post("/api/students", async (c) => {
  const data = await c.req.json()
  const { name } = data
  if (!isNameValid(name)) 
    return c.json({success: false, error: 'Invalid name'}, {status: 400})

  

students.push({ id: crypto.randomUUID(), name }) //when a name is pushed, ti also pushes a random id.
return c.json({ data: students, success: true, status: 201}) //when successfully posting a name the status is
})

//fetch('http://server-url/api/students, {method: "DELETE"}) 

/*
const handleDelete = async (id: string) => {
const response = await fetch ('link'{id}, {method: 'DELETE'})
const result = await response.json()
setStudentList(result)
}
*/

// app.delete("/api/students/:id", (c) => {
//   const id =  c.req.param("id")
//   const removeStudentFromList = students.filter(
//     (student) => student.id != id
//   )
//   return c.json(removeStudentFromList)
// })
app.delete("/api/students/:id", (c) => {
  const id =  c.req.param("id")
  const removeStudentFromList = students.filter(
    (student) => student.id != id
  )
  return c.json(removeStudentFromList)
})
//fetch('http://server-url/api/students, {method: "PATCH", body: JSON.stringify(data)}) 


app.patch("/api/students/:id", async (c) => {
  const id = c.req.param("id")
  const {name} = await c.req.json()
  students = students.map(student => student.id === id ? {...student, name } : student 
  ) 
  return c.json(students)
})



// app.delete("/api/students/:id", bearerAuth({
//   verifyToken: async
// }))


app.onError((err, c) => {
  console.error(err);

  return c.json(
    {
      error: {
        message: err.message,
      },
    },
    { status: 500 }
  );
});

// app.get("/", async (c) => {
//   const data = await getStudentData()
//   return c.json({data})
// }
// )

// app.get("/:id", async (c) => {
//  const reqId = c.req.param("id")
// })
export default app;
