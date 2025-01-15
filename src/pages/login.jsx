import { Avatar, Container, IconButton, Stack, Typography } from "@mui/material"
import Paper from "@mui/material/Paper"
import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import CameraAltIcon from "@mui/icons-material/CameraAlt"
import  VisuallyHidden  from '../components/styles/StyledComponents';
import {useFileHandler, useInputValidation, useStrongPassword} from "6pp"
import { userNameValidator } from "../utils/validators"
 
const Login = () => {
    const [isLogin, setIsLogin] = useState(false)
    
    const toggaleLogin = () => setIsLogin((prev) => !prev)

    const name = useInputValidation("")
    const bio = useInputValidation("")
    const username = useInputValidation("",userNameValidator)
    const password = useStrongPassword();
    const avatar = useFileHandler("single",1)
   const handleLogin = (e) => {
        e.preventDefault()
      }
      const handleSignup = (e) => {
        e.preventDefault()
       
    }
  return <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
<Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
   {
    isLogin ? <>
     <Typography variant="h5">Login</Typography>
     <form style={{ width: "100%", marginTop: "1rem" }} 
     onSubmit={handleLogin}
     >
        <TextField  fullWidth name="username" label="Username" margin="normal" variant="outlined"  value={username.value} onChange={username.changeHandler} />
        <TextField name="password"  fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
        <Button sx={{
            marginTop:"1rem"
        }}
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        >
            Login </Button>
            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
 
            <Button 
            fullWidth
            variant="text" 
            onClick={ toggaleLogin}
            >Sign Up Instead</Button> 
     </form>
    </> : 
    <>
     <Typography variant="h5">Sign up</Typography>
     <form style={{ width: "100%", marginTop: "1rem" }}
      onSubmit={handleSignup}
      >

        <Stack position={"relative"} width={"10rem"} margin={"auto"} >
         <Avatar sx={{ width: "10rem", height: "10rem", objectFit:"contain" }} src={avatar.preview} />
          
         <IconButton sx={{ position: "absolute", right: 0, bottom: 0 , color:"white", bgcolor: "rgba(0,0,0,0.5)",":hover":{bgcolor:"rgba(0,0,0,.7)"} }} component="label" >
          <>
          <CameraAltIcon />
          <VisuallyHidden type="file" onChange={avatar.changeHandler} />
          </>
         </IconButton>
        </Stack>
          {
            avatar.error && <Typography margin={"0 auto"} width={"fit-content"} display={"block"} variant="caption" color="error">{avatar.error}</Typography>
           }
        <TextField  fullWidth label="Name" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler} />
        <TextField  fullWidth label="Bio" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler} />
        <TextField  fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
           {
            username.error && <Typography color="error">{username.error}</Typography>
           }

        <TextField  fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
           {
            password.error && <Typography color="error">{password.error}</Typography>
           }


        <Button sx={{
            marginTop:"1rem"
        }}
        fullWidth
        variant="contained"
        color="primary"
        type="submit"
        >
            Sign Up </Button>
            <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

            <Button 
            fullWidth
            variant="text"
            onClick={toggaleLogin}
            >Login</Button>
          
     </form>
    </>
   }
    </Paper>
  </Container>
}

export default Login