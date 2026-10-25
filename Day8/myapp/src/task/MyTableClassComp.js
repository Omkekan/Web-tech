import React, { Component } from 'react'

class MyTableClassComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emp: [
                { id: 1, ename: "Ajinkya", epost: "CEO", esal: 25000, egender: "Male" },
                { id: 2, ename: "Rohit", epost: "Manager", esal: 15000, egender: "Male" },
                { id: 3, ename: "Ramesh", epost: "Team Lead", esal: 12000, egender: "Male" },
                { id: 4, ename: "Riya", epost: "HR", esal: 10000, egender: "Female" },
                { id: 5, ename: "Arya", epost: "MR", esal: 10000, egender: "Female" }

            ]
        }
    }

    render() {
        const { emp } = this.state
        return (
            <div>
                <h2>This is the EMP table</h2>
                <table border={"2px solid black"} className='table table-bordered table-hover table-dark'>
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th><th>Post</th><th>Salary</th><th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            emp.map((val, index) => {
                                return <tr>
                                    <td>{val.id}</td>
                                    <td>{val.ename}</td>
                                    <td>{val.epost}</td>
                                    <td>{val.esal}</td>
                                    <td>{val.egender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default MyTableClassComp

