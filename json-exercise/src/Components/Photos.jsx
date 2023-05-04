import phdata from '../Data/phdata.json'

const Photos = () => {
    const myD = phdata[0];
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
                    {phdata.map((data, index) => (
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
export default Photos