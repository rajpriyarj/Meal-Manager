import React, { Component } from 'react';

class Login extends Component {

    constructor(props){
        super(props)

        this.onChangeLibraryId = this.onChangeLibraryId.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            libraryId: '',
            password: ''
        }
    }

    onChangeLibraryId(e) {
        this.setState({ libraryId: e.target.value })
    }

    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

    const studentObject = {
        libraryId: this.state.libraryId,
        password: this.state.password,
    };

    axios.post('http://localhost:7000/student/login', studentObject)
        .then((res) => {
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        });

    this.setState({ 
        libraryId: '',
        password: '',
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
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.onChangePassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;