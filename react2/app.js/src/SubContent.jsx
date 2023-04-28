import sampleData from './sampleData.json'
import Person from './Person'

const SubContent = () => {
    return(
        <>
          <h2 id = "subc">SubContent example</h2>
          {sampleData.map(person => (
            <Person key={person.id} name={person.name} city={person.address.city}/>
          ))};
        </>
        )
}

export default SubContent