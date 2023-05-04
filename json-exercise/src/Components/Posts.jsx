import pdata from '../Data/pdata.json'

const Posts = () => {
    const myD = pdata[0];
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
                    {pdata.map((data, index) => (
                        <tr key={index}>
                            {myKey.map((key) => (
                                <td>{data[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Posts