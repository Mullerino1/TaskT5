// import { Total as TotalTypes } from "./Types";
// import type { Total } from "./Types";

// type TotalProps = {
//     totalCount: number
//     total: TotalTypes[]
//     updatedCount: ( id: string) => void
// }

// export default function Total(props: TotalProps) {
//     const { Count = [], totalCount = 0, updatedCount } = props;

//     return (
//         <>
//         <section>
//             Students total: {total}
//         </section>
//         </>
//     )
// }

export default function Total({total}: Readonly<{ total: number}>) {
    if(total === 0) return null

    return (
        <>
        <article>
            Number of students : { total }
        </article>
        </>
    )
}

