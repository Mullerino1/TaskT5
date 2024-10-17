export type Student = {
    student: string
    deleted?: boolean
}

export type ToStudentDomain = Student & {deleted?: true}