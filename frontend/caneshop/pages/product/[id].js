import React from 'react';
import { useRouter } from 'next/router';
// import data from '../../utils/data';
import Layout from '../../components/Layout';
import useStyles from '../../utils/style.js';
import NextLink from 'next/link';
import Image from 'next/image';
import {
    Grid,
    Link,
    List,
    ListItem,
    Typography,
    Card,
    Button,
    Box,
} from '@material-ui/core';
export const getStaticPaths = async () => {
    const res = await fetch('http://localhost:4000/api/products');
    const data = await res.json();
    const paths = data.products.map((product) => {
        return { params: { id: product.id.toString() } };
    });

    return {
        paths,
        fallback: false,
    };
};
export const getStaticProps = async (context) => {
    const id= context.params.id;
    const res = await fetch(`http://localhost:4000/api/products/${id}`);
    const data = await res.json();

    return {
        props: {
            product:data,
        },
    };
};

export default function productScreen({ product }) {
    const router = useRouter();
    const classes = useStyles();
    const { id } = router.query;
    console.log(product);
    
    if (!product) {
        return <div>Product Not Found</div>;
    }
    return (
        <Layout title={product.name} description={product.description}>
            <div className={classes.section}>
                <NextLink href="/" passHref>
                    <Link>
                        <Box>back to products</Box>
                    </Link>
                </NextLink>
            </div>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12}>
                    <Image
                        src="/images/chair.jpg"
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
                            <Typography component="h1" variant="h1">
                                {product.name}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Catagory: {product.category}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Reviews: {product.numOfReviews}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Rating: {product.ratings}</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Description:{product.description}
                            </Typography>
                        </ListItem>
                    </List>
                </Grid>

                <Grid item md={3} xs={12}>
                    <Card>
                        <List>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Bid: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>
                                            TK {product.price}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid container>
                                    <Grid item xs={6}>
                                        <Typography>Status: </Typography>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Typography>
                                            {product.stock > 0
                                                ? 'In Bid'
                                                : 'SOLD'}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                >
                                    Make a Bid
                                </Button>
                            </ListItem>
                        </List>
                    </Card>
                </Grid>
            </Grid>
        </Layout>
    );
}
