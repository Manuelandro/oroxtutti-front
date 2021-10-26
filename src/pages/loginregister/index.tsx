import React from 'react'
import Helmet from 'react-helmet'
import { useIntl } from 'react-intl'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import useLogin from './hooks/useLogin'
import useRegister from './hooks/useRegister';

const Register: React.FC = () => {
    const intl = useIntl()
    const [login, handleLogin] = useLogin()
    const [registration, handleRegister] = useRegister()

    return (
        <Box className="loginregister">
            <Helmet>
                <title>Monile</title>
            </Helmet>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Box component="form" onSubmit={handleLogin}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={login.errorMail}
                                    helperText={login.errorMail ? 'Campo non corretto' : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={login.errorPwd}
                                    helperText={login.errorPwd ? 'Campo non corretto' : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    data-testid="send-login"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    >
                                    Login
                                </Button>
                            </Grid>
                            {login.errorServer ? (
                                <Grid item xs={12}>
                                    <Alert severity="error">{intl.messages[`Errors.${login.errorServer}`]}</Alert>
                                </Grid>
                            ) : null}
                        </Grid>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box component="form" onSubmit={handleRegister}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="name"
                                    label="Nome e Cognome"
                                    name="name"
                                    autoComplete="name"
                                    autoFocus
                                    error={registration.errorName}
                                    helperText={registration.errorName ? 'Campo non corretto' : ''}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    error={registration.errorMail}
                                    helperText={registration.errorMail ? 'Campo non corretto' : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={registration.errorPwd}
                                    helperText={registration.errorPwd ? 'Campo non corretto' : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    type="password"
                                    id="confirmPassword"
                                    autoComplete="current-password"
                                    error={registration.errorConfirmPwd}
                                    helperText={registration.errorConfirmPwd ? 'Le due password non coincidono' : ''}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    type="submit"
                                    data-testid="send-register"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    >
                                    Registrati
                                </Button>
                            </Grid>
                            {registration.errorServer ? (
                                <Grid item xs={12}>
                                    <Alert severity="error">{intl.messages[`Errors.${registration.errorServer}`]}</Alert>
                                </Grid>
                            ) : null}
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Register