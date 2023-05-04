import tdata from '../Data/tdata.json'

const Todos = () => {
  const myD = tdata[0];
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
                  {tdata.map((data, index) => (
                      <tr key={index}>
                          {myKey.map((key) => (
                              <td>{key === "completed" ? data[key] ? "true" : "false" : data[key]}</td>
                          ))}
                      </tr>
                  ))}
              </tbody>
          </table>
      </>
  )
};

export default Todos;