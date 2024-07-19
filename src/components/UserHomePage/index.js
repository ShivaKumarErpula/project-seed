import { Component } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

class UserHomePage extends Component {
  state = {
    isActive: false,
  }

  render() {
    const {isActive} = this.state
    console.log(isActive)
    return (
    <div className="user-home-container" bgColor="black">
      <AppBar position="static" bgColor="#ffffff">
        <Toolbar>
          <IconButton size="medium" edge="start" color="inherit" bgColor="red" aria-label="logo">
            <HomeIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>)
  }
}


export default UserHomePage
