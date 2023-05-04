import cdata from '../Data/cdata.json'

const Comments = () => {
    const myD = cdata[0];
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
                    {cdata.map((data, index) => (
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

export default Comments