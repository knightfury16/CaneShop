import {
    Avatar,
    Grid,
    Paper,
    TextField,
    Button,
    Typography,
    List,
    ListItem,
    Link,
} from '@material-ui/core';
import React from 'react';
import NextLink from 'next/link';
import useStyles from '../utils/style.js';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import Layout from '../components/Layout.js';

const LogIn = () => {
    const classes = useStyles();
    return (
        <Layout title="Sign Up">
            <Grid>
                <Paper elevation={10} className={classes.paper}>
                    <Grid align="center">
                        <Avatar>
                            <LockOpenRoundedIcon />
                        </Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <List>
                        <ListItem>
                            <TextField
                                className={classes.name}
                                label="Username"
                                placeholder="Enter your username"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </ListItem>
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
                        <ListItem>
                            <TextField
                                className={classes.phoneNo}
                                label="Phone Number"
                                placeholder="Enter your phone number"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </ListItem>
                        <ListItem>
                            <TextField
                                className={classes.address}
                                label="Address"
                                placeholder="Enter your address"
                                variant="outlined"
                                fullWidth
                                required
                            />
                        </ListItem>
                    </List>
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        fullWidth
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Typography>
                        <NextLink
                            href="/login"
                            passHref
                            className={classes.signin}
                        >
                            <Link>Sign In</Link>
                        </NextLink>
                    </Typography>
                </Paper>
            </Grid>
        </Layout>
    );
};

export default LogIn;
