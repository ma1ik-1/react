const Hello = props => {
    return (
        <h1>Hello, {props.name}</h1>
    )
}

const PrompComp = () => {
    return (
        <>
        <Hello name = "Chris"></Hello>
        <Hello name = "p."></Hello>
        <Hello name = "Bacon"></Hello>
        </>
    )
}

export default PrompComp