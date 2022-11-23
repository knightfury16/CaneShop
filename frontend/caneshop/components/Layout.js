import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Link,
    ThemeProvider,
    CssBaseline,
    Box,
} from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';

import useStyles from '../utils/style.js';

const Layout = ({ title, description, children }) => {
    const theme = createTheme({
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
    });

    const classes = useStyles();
    return (
        <div>
            <Head>
                <title>{title ? `${title} - CaneShop` : 'CaneShop'}</title>
                {description && (
                    <meta name="description" content={description}></meta>
                )}
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" className={classes.navbar}>
                    <Toolbar>
                        <NextLink href="/" passHref>
                            <Link>
                                <Box className={classes.brand}>{title ? title : 'CaneShop'}</Box>
                            </Link>
                        </NextLink>
                        <div className={classes.grow}></div>
                        <div>
                            <NextLink href="/cart" passHref>
                                <Link>Cart</Link>
                            </NextLink>
                            <NextLink href="/login" passHref>
                                <Link>Sign In</Link>
                            </NextLink>
                        </div>
                    </Toolbar>
                </AppBar>
                <Container className={classes.main}>{children}</Container>
                <footer className={classes.footer}>
                    <Box className={classes.foot}>
                        All rights reserved. CaneShop
                    </Box>
                </footer>
            </ThemeProvider>
        </div>
    );
};

export default Layout;
