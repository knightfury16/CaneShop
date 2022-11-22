import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/style.js';
import NextLink from 'next/link';
import Image from 'next/image';
import { Grid, Link, List, ListItem, Typography } from '@material-ui/core';

export default function productScre() {
    const router = useRouter();
    const classes = useStyles();
    const { slug } = router.query;
    const product = data.products.find((a) => a.slug === slug);
    if (!product) {
        return <div>Product Not Found</div>;
    }
    return (
        <Layout title={product.name}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>
                        <Typography>back to products</Typography>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        className={classes.largeImage}
                        width={640}
                        height={640}
                        layout="responsive"
                    ></Image>
                </Grid>
                <Grid item md={3} xs={12}>
                    <List>
                        <ListItem>
                            <Typography>
                                Catagory: {product.category}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Brand: {product.brand}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Rating: {product.rating}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Description:{product.description}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Layout>
    );
}
