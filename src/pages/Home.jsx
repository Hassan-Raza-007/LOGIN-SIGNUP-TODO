import React from 'react'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
const Home = () => {
  return (
    
   
 <Container component="main" maxWidth="xs">
<Button maxWidth="xs" xs={12}
              type="submit"
              href='/login'
              fullWidth
              variant="contained"
              sx={{ mt: 15, mb: 2 ,backgroundColor:"	#afeeee",color:"black",'&:hover': {
                color: 'white',  
              },
            }}
            >
              LogIn
            </Button>

            <Button maxWidth="xs" xs={12}
            href='/signup'
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:"	#afeeee",color:"black",'&:hover': {
                color: 'white',  
              },
            }}
            >
              SignUp
            </Button>
            </Container>


    
    
    
  )
}

export default Home