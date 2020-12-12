import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Library Id</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;