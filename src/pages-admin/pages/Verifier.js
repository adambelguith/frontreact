import { Component } from "react";
import '../css/Manage.css';
import axios from "axios";

class Verifier extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/users/getuserss/secretkey/adminkey').then((response) => this.setState({ users: response.data.message.Users }))
    }

    handledelete = (id) => {

        axios.delete('http://localhost:3000/users/deleteuser/' + id)

            .then((response) => {
                console.log(response.data)
                axios.get('http://localhost:3000/users/getuserss/secretkey/adminkey')
                    .then((response) => this.setState({ users: response.data.message.Users }))
            }).catch(err => console.log(err))

    }

    handleadd = () => {

    }

    render() {

        const data = this.state.users.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>


                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td >
                        <button
                            className="border-btn-accept"
                            onClick={this.handleadd()}>
                            <pre>Accept</pre>
                        </button>
                        <button
                            className="border-btn-manage"
                        // onClick={this.handledelete()}
                        >
                            <pre >Refuse</pre>
                        </button>
                    </td>
                </tr>
            )
        })


        return (

            <div className="table-manage-container">
                <h3 className="title-manage">List of clients waiting</h3>
                <table className="table-manage">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </table>



            </div>
        );
    }
}
export default Verifier;
