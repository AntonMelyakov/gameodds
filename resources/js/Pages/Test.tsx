import { Head } from "@inertiajs/react"

type TestProps = {
    name: String, 
    age: String
}
export default function Test({name, age}: TestProps) {
    return (
        <>
        <Head title="Test" />
        <h1>TEST Hello {name}</h1>
        <h2> At age: {age}</h2>
        </>
        
    )
}