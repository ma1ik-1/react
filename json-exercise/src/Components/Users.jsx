import udata from '../Data/udata.json'

const Users = () => {
    const myD = udata[0];
    const myKey = Object.keys(myD);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {myKey.map((key) => (
                            <th>{key}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {udata.map((data, index) => (
                        <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.username}</td>
                        <td>{data.email}</td>
                        <td>{data.address.street}</td>
                        <td>{data.address.city}</td>
                        <td>{data.address.zipcode}</td>
                        <td>{data.phone}</td>
                        <td>{data.website}</td>
                        <td>{data.company.name}</td>
                        <td>{data.company.catchPhrase}</td>
                        <td>{data.company.bs}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Users