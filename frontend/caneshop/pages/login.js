import {
    Avatar,
    Grid,
    Paper,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Typography,
    List,
    ListItem,
    Link,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/style.js';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import Layout from '../components/Layout.js';

const LogIn = () => {
    const classes = useStyles();
    return (
        <Layout title="Sign In">
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    <Grid align="center">
                        <Avatar>
                            <LockRoundedIcon />
                        </Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <List>
                        <ListItem>
                            <TextField
                                className={classes.email}
                                label="Email"
                                placeholder="Enter your email"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                label="Password"
                                placeholder="Enter your password"
                                variant="outlined"
                                type="password"
                                fullWidth
                                required
                                className={classes.password}
                            />
                        </ListItem>
                    </List>

                    <FormControlLabel
                        control={<Checkbox name="checkedB" color="secondary" />}
                        label="Remember me"
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        fullWidth
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Typography className={classes.forgot_password}>
                        <NextLink href="/password" passHref>
                            <Link>Forgot Password?</Link>
                        </NextLink>
                    </Typography>
                    <Typography>
                        Do you have an account? &nbsp;
                        <NextLink href="/register" passHref className={classes.register}>
                            <Link>Register</Link>
                        </NextLink>
                    </Typography>
                </Paper>
            </Grid>
        </Layout>
    );
};

export default LogIn;
