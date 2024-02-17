
import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import 'bootstrap/dist/css/bootstrap.min.css';
const Navbar = () => {
  return (
    <>
    


<AppBar position="static" style={{backgroundColor:"grey"}}>
        <Toolbar variant="dense">
          
          <Typography variant="h5 " color="inherit" component="div" >
            Form
          </Typography>

            <div style={{ marginLeft:"750px"}}>
        <Link style={{listStyleType:"none", margin:"10px",color:"white",textDecoration:"none"}} to="/">Home</Link>
          <Link style={{listStyleType:"none", margin:"10px",color:"white",textDecoration:"none"}} to="/signup">Signup</Link>
        <Link style={{listStyleType:"none", margin:"10px",color:"white",textDecoration:"none"}} to="/login">Log in</Link>
        </div>
        
        </Toolbar>
      </AppBar>
    
    </>
  )
}

export default Navbar