import React, { useState } from 'react'

const ButtonData = ({ data, setData }) => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const handleChange = () => {
        setData([...data, {
            name: name,
            mail: mail
        }])
        setName('');
        setMail('');
    }

    return (
        <div>
            {/* Adding Button */}
            <div className='container text-center mt-5'>
                <h3>Click to Add Employee Data</h3>
                <button type="button" className="btn btn-light mt-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add
                </button>
            </div>

            {/* Modal */}
            <div className="modal fade" id="exampleModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Employee Form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <input type="text" className="form-control" placeholder="Employee Name" aria-label="Username"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />

                            <input type="email" className="form-control mt-3" placeholder="Employee Mail" aria-label="Username"
                                value={mail}
                                onChange={(e) => {
                                    setMail(e.target.value)
                                }}
                            />

                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" onClick={handleChange} >Add</button>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default ButtonData