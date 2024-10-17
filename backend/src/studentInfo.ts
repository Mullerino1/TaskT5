// import { readFile, writeFile } from "fs";
// import type {Student, ToStudentDomain } from "./types"

// export async function getStudentData() {
//     const data = await readFile("./data/students.ts", "utf-8")
//     const studentData = JSON.parse(data) as ToStudentDomain[]
//     return studentData.map(toDomain)
// }

// export async function updateStudentData(newData: Student[]){
//     const data = newData.map(studentToJSON)
//     await writeFile("./data/students.ts", JSON.stringify(data, null, 2))
// }

// export function studentToJSON(data: Student[]){
//     return {
//         ...data,
//         ...(data.deleted && {deleted: "true"}),
//     }
// }

// export function toDomain(data: Student & {deleted?: "true"}) {
//     return {
//         ...data,
//         ...(data.deleted === "true" && {deleted: true}),
//     }
// }