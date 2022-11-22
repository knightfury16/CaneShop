import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import {
    AppBar,
    Container,
    Toolbar,
    Typography,
    Link,
    createMuiTheme,
    ThemeProvider,
    CssBaseline,
} from '@material-ui/core';

import useStyles from '../utils/style.js';

const Layout = ({ title, description, children }) => {
    const theme = createMuiTheme({
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
                                <Typography
                                    className={classes.brand}
                                    variant="h4"
                                >
                                    {title?title : 'CaneShop'}
                                </Typography>
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
                    <Typography className={classes.foot}>
                        All rights reserved. CaneShop
                    </Typography>
                </footer>
            </ThemeProvider>
        </div>
    );
};

export default Layout;
