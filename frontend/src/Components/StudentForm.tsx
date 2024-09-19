import { useState } from "react";


type StudentFormProps = {
    onAddStudent: ({ name }: { name: string }) => void;
}

export default function StudentForm(props: StudentFormProps){
    const {onAddStudent} = props
    const [name, setName] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if(!name)return
        onAddStudent({ name})
        setName('')
    }


    // const {name, id} = props;
    

    return (
        <>
        <form onSubmit={handleSubmit} className='student-form'>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' placeholder='student name' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit'>Add student</button>
        </form>
       
        </>
    )
}