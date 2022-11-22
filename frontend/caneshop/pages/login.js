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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LogIn = () => {
    const classes = useStyles();
    const initialValues = {
        email: '',
        password: '',
        remember: false,
    };
    const onSubmit = (values, props) => {
        console.log(values);
        setTimeout(() => {
            props.resetForm();
            props.setSubmitting(false);
        },2000);
    };
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Please enter valid email')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Must be 6 characters')
            .required('Password is required'),
    });
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
                    <Formik
                        initialValues={initialValues}
                        onSubmit={onSubmit}
                        validationSchema={validationSchema}
                    >
                        {(props) => (
                            <Form>
                                <List>
                                    <ListItem>
                                        <Field
                                            as={TextField}
                                            className={classes.email}
                                            label="Email"
                                            placeholder="Enter your email"
                                            variant="outlined"
                                            fullWidth
                                            required
                                            name="email"
                                            helperText={
                                                <ErrorMessage name="email" />
                                            }
                                        />
                                    </ListItem>
                                    <ListItem>
                                        <Field
                                            as={TextField}
                                            label="Password"
                                            placeholder="Enter your password"
                                            variant="outlined"
                                            type="password"
                                            fullWidth
                                            required
                                            className={classes.password}
                                            name="password"
                                            helperText={
                                                <ErrorMessage name="password" />
                                            }
                                        />
                                    </ListItem>
                                </List>

                                <Field
                                    as={FormControlLabel}
                                    name="remember"
                                    control={<Checkbox color="secondary" />}
                                    label="Remember me"
                                />
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                    fullWidth
                                    className={classes.submit}
                                    disabled={props.isSubmitting}
                                >
                                    {props.isSubmitting ? 'Loading' : 'Sign In'}
                                </Button>
                            </Form>
                        )}
                    </Formik>

                    <Typography className={classes.forgot_password}>
                        <NextLink href="/password" passHref>
                            <Link>Forgot Password?</Link>
                        </NextLink>
                    </Typography>
                    <Typography>
                        Do you have an account? &nbsp;
                        <NextLink
                            href="/register"
                            passHref
                            className={classes.register}
                        >
                            <Link>Register</Link>
                        </NextLink>
                    </Typography>
                </Paper>
            </Grid>
        </Layout>
    );
};

export default LogIn;
