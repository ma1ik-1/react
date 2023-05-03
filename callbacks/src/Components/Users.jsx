import {Link, useParams} from 'react-router-dom'

const User = () => {
    const {id, name} = useParams(); 
    return(
        <>  
            <h1>Users</h1>
            <strong>Select a user:</strong>
            <ul>
                <li>
                    <Link to="/users/1">User 1</Link>
                </li>
                <li>
                    <Link to="/users/2">User 2</Link>
                </li>
                <li>
                    <Link to="/users/3">User 3</Link>
                </li>
            </ul>
            <p>{id}, name: {name}</p>
        </>
    );
}
export default User; 