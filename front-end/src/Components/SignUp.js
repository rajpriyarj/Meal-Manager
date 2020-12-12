import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {

    constructor(props){
        super(props)

        this.onChangeLibraryId = this.onChangeLibraryId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeHostel = this.onChangeHostel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            libraryId: '',
            name: '',
            email: '',
            password: '',
            hostel: ''
        }
    }

    onChangeLibraryId(e) {
        this.setState({ libraryId: e.target.value })
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onChangeHostel(e) {
        this.setState({ hostel: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

    const studentObject = {
        libraryId: this.state.libraryId,
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        hostel: this.state.hostel
    };

    axios.post('http://localhost:7000/student/signup', studentObject)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });

    this.setState({ 
        libraryId: '',
        name: '',
        email: '',
        password: '',
        hostel: ''
    })
}

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Library Id</label>
                        <input type="text" value={this.state.libraryId} onChange={this.onChangeLibraryId} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeName} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.onChangePassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Hostel</label>
                        <input type="text" value={this.state.hostel} onChange={this.onChangeHostel} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;