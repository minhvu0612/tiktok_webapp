import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Link from '@mui/material/Link'
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled'
import { styled } from '@mui/system'
//scss
import './styles.scss'

//icon
import QrCodeIcon from '@mui/icons-material/QrCode'
import PersonIcon from '@mui/icons-material/Person'
import { Input, InputBase, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import CancelIcon from '@mui/icons-material/Cancel'
import FacebookIcon from '@mui/icons-material/Facebook'
import ChevronLeftTwoToneIcon from '@mui/icons-material/ChevronLeftTwoTone'
import GoogleIcon from '@mui/icons-material/Google'
// import PersonIcon from '@mui/icons-material/Person'
//api
import { login } from './../../api/login'
import { useNavigate, useLocation } from 'react-router-dom'

// components
import { useGoogleLogin, useGoogleLogout } from 'react-google-login'

//Noti
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})
Login.propTypes = {}

const CustomButtonRoot = styled('button')`
  background-color: gray;
  padding: 15px 20px;
  border-radius: 10px;
  color: #fff;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  ${
    '' /* &:hover {
    background-color: #0059b2;
  } */
  }

  ${
    '' /* &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  } */
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: 0 0 0 0 rgba(0, 127, 255, 0);
  }
`

const clientId = '919715260856-gdj14rlllp5n4icie9jnc6091eismg0b.apps.googleusercontent.com';

function CustomButton(props) {
  return <ButtonUnstyled {...props} component={CustomButtonRoot} />
}
function Login(props) {
  const location = useLocation()
  const { modal, onHandleClose } = props
  const [open, setOpen] = useState(false)
  const [openLoginModal, setOpenLoginModal] = React.useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gg,setGG] = useState()
  // GG login
  
  const onSuccess = (res) => {
      console.log('Login Success: currentUser:', res.profileObj);
    }
  const onFailure = (res) => {
        console.log('Login failed: res:', res);
        alert(
          'Failed to login.'
        );
    }
  const onLogoutSuccess = (res) => {
        console.log('Logged out Success');
        alert('Logged out Successfully ✌');
        console.clear();
    }
  const onFailure2 = () => {
        alert('Fail');
    }
  const {signIn} = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    // responseType: 'code',
    // prompt: 'consent',
  });


  const {signOut} = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure2,
  })

  //noti && snackbar
  const [openSnackBar, setOpenSnackBar] = React.useState(false)

  const handleClick = () => {
    setOpenSnackBar(true)
  }

  const handleCloseSnackBar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenSnackBar(false)
  }
  let navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.user)
          localStorage.setItem('token', response.data.access_token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
          navigate(location.pathname, { state: response.data.user })
          window.location.reload()
        }
      })
      .catch(() => {
        setOpenSnackBar(true)
      })
  }
  

  const [scroll, setScroll] = React.useState('paper')
  const [buttons, setButtons] = React.useState([
    {
      icon: <QrCodeIcon className="icon-btn" />,
      text: 'Sử dụng QR Code',
      url: '#',
    },
    {
      icon: <FacebookIcon className="icon-btn" />,
      text: 'Tiếp tục với Facebook',
      url: '#',
    },
    {
      icon: <PersonIcon className="icon-btn" />,
      text: 'Đăng nhập với email',
      url: '#',
      onClick: () => {
        setOpen(false)
        setOpenLoginModal(true)
      },
    },
    {
      icon: <GoogleIcon className="icon-btn" />,
      text: 'Đăng nhập với google',
      url: '#',
      onClick: () => setGG(signIn),
    }
  ])
  const handleClickOpen = (scrollType) => () => {
    setOpen(true)
    setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
    onHandleClose(false)
  }
  const handleCloseLoginModal = () => {
    setOpenLoginModal(false)
    onHandleClose(false)
  }

  const descriptionElementRef = React.useRef(null)
  useEffect(() => {
    setOpen(modal)
  }, [modal])
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="modal"
      >
        <DialogTitle disableTypography className="scroll-dialog-title">
          Đăng nhập vào tiktok
          <IconButton onClick={handleClose}>
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box
              sx={{
                width: '500px',
                height: '500px',
                bgcolor: 'background.paper',
              }}
            >
              <nav aria-label="main mailbox folders">
                <List>
                  {buttons.map((button, index) => {
                    return (
                      <ListItem
                        key={index}
                        disablePadding
                        className="login__btn"
                        disableRipple
                      >
                        <ListItemButton
                          sx={{ padding: '0 16px' }}
                          onClick={button.onClick}
                        >
                          <ListItemIcon sx={{ minWidth: 0 }}>
                            {button.icon}
                          </ListItemIcon>
                          <ListItemText
                            disableTypography
                            primary={button.text}
                            sx={{
                              fontWeight: 'bold',
                              color: 'black',
                              border: '1px solid rgba(22, 24, 35, 0.12)',
                              textAlign: 'center',
                              lineHeight: '44px',
                              minWidth: '240px',
                              fontSize: '15px',
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    )
                  })}
                </List>
              </nav>
            </Box>
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions
          sx={{ justifyContent: 'flex-start', alignItems: 'center' }}
        >
          <Typography variant="subtitle2" component="span">
            Bạn không có tài khoản?
          </Typography>
          <Button onClick={handleClose} className="register">
            Đăng ký
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openLoginModal}
        onClose={handleCloseLoginModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className="modal"
      >
        <DialogTitle
          // children={<React.Fragment></React.Fragment>}
          className="scroll-dialog-title"
        >
          <ChevronLeftTwoToneIcon
            fontSize="medium"
            sx={{ cursor: 'pointer' }}
            onClick={() => {
              setOpenLoginModal(false)
              setOpen(true)
            }}
          />
          <Typography variant="h5" component="span">
            Đăng nhập
          </Typography>
          <IconButton
            onClick={() => {
              setOpenLoginModal(false)
            }}
          >
            <CancelIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Box
              sx={{
                width: '500px',
                height: '500px',
                bgcolor: 'background.paper',
                paddingX: '30px',
              }}
              component="form"
              onSubmit={handleSubmit}
            >
              <TextField
                fullWidth
                id="input-field"
                // label="Outlined"
                name="email"
                variant="filled"
                placeholder="Gmail"
                variant="filled"
                sx={{
                  display: 'block',
                  // width: '70%',
                  height: '25px',
                  marginBottom: '40px',
                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
              <TextField
                fullWidth
                id="input-field"
                name="password"
                // label="filled"
                variant="filled"
                placeholder="Mật khẩu"
                type="password"
                sx={{
                  // width: '70%',
                  height: '25px',
                }}
                value={password}
                component="div"
                variant="filled"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              ></TextField>
              {/* <Link href="#" underline="none">
                Quên Mật Khẩu
              </Link> */}
              <CustomButton
                type="submit"
                sx={{ marginTop: '50px', width: '100%' }}
              >
                Đăng Nhập
              </CustomButton>
              <Snackbar
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                open={openSnackBar}
                autoHideDuration={2000}
                onClose={handleCloseSnackBar}
              >
                <Alert
                  onClose={handleCloseSnackBar}
                  severity="error"
                  sx={{ width: '100%' }}
                >
                  Failed!
                </Alert>
              </Snackbar>
            </Box>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Login
