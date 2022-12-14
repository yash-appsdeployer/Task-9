import React from 'react'

const TableData = ({ data }) => {
    return (
        <div >
            <table className="container table table-dark mt-5">
                <thead>
                    <tr>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Employee E-Mail</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((emp) => (
                        <tr>
                            <td>{emp.name}</td>
                            <td>{emp.mail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableData