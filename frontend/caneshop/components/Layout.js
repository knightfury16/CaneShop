import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Link,
} from '@material-ui/core';
import useStyles from '../utils/style.js';

const Layout = ({ title, description, children }) => {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - CaneShop` : 'CaneShop'}</title>
                {description && (
                    <meta name="description" content={description}></meta>
                )}
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <NextLink href="/" passHref>
                        <Link>
                            <Typography className={classes.brand} variant="h4">
                                Items
                            </Typography>
                        </Link>
                    </NextLink>
                    <div className={classes.grow}></div>
                    <div>
                        <NextLink href="/cart" passHref>
                            <Link>Cart</Link>
                        </NextLink>
                        <NextLink href="/logIn" passHref>
                            <Link>Login</Link>
                        </NextLink>
                    </div>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>{children}</Container>
            <footer className={classes.footer}>
                <Typography className={classes.foot}>
                    All rights reserved. CaneShop
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;
