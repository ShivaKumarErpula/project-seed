import { Component } from "react";
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

const roles = [
    {id: 'USER',displayText: 'User'},
    {id: 'SCIENTIST',displayText: 'scientist'},
    {id: 'ANALYST',displayText: 'analyst'},
    {id: 'ADMIN',displayText: 'admin'},
]
  

class LoginPage extends Component{
    state = {
      userName: '',
      password: '',
      role: roles[0].id,
      isNameEmpty: false,
      isPasswordEmpty: false,
    }

    onSubmit = event => {
        event.preventDefault()
        const {userName,password,role} = this.state
        console.log(userName,password,role);
    }

    onChangeUSername = event => {
        this.setState({userName: event.target.value})
    }

    onChangePassword = event => {
        this.setState({password: event.target.value})
    }

    onBlurName = event => {
        this.setState(prevState => ({isNameEmpty: !prevState.isNameEmpty}))
        console.log("user reqiured")
    }

    onblurPassword= event => {
        this.setState(prevState => ({isNameEmpty: !prevState.isNameEmpty}))
        console.log("user password")
    }

    onChangeRole = event => {
        this.setState({role: event.target.value})
    }

    render(){
      const {userName, password, role} = this.state
      return (
        <div className="">
            <FormControl className="" onSubmit={this.onSubmit}>
                <h1>Log in</h1>
                <TextField
                required
                id="outlined-required"
                label="Username"
                type="text"
                onBlur={this.onBlurName}
                /*placeholder="Username"*/
                />
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                onBlur={this.onblurPassword}
                />
                <select
                    value={role}
                    onChange={this.onChangeRole}
                >
                {roles.map((name) => (
                    <option
                    key={name.id}
                    value={name.id}
                    >
                    {name.displayText}
                    </option>
                ))}
                </select>
                <Button type="submit" variant="contained" size="medium">Submit</Button>
            </FormControl>
        </div>
      )
    }
}

export default LoginPage
