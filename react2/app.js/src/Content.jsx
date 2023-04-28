import sampleData from './sampleData.json'

const Content = () => {
    return(
        <div id = "content">
          <h2>Content example</h2>
          {sampleData.map((person)=>(
            <p> Hello, {person.name} from {person.address.city}!</p>
          ))}
        </div>
      )
}

export default Content