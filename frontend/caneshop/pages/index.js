import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from '@material-ui/core';

import Layout from '../components/Layout';

// import data from '../utils/data';

import NextLink from 'next/link';

export const getStaticProps = async () => {
    const res = await fetch('http://localhost:4000/api/products');
    const data = await res.json();

    return {
        props: {
            data
        },
    };
};

export default function Home({ data }) {
    

    return (
        <Layout>
            <div>
                <h1>Products</h1>
                <Grid container spacing={3}>
                    {data.products.map((product) => (
                        <Grid item md={4} key={product.name}>
                            <Card>
                                <NextLink
                                    href={`/product/${product.id}`}
                                    passHref
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/images/chair.jpg"
                                            title={product.name}
                                        ></CardMedia>
                                        <CardContent>
                                            <Typography>
                                                {product.name}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Typography>
                                            ${product.price}
                                        </Typography>
                                        <Button size="medium" color="secondary">
                                            Make a BID{' '}
                                        </Button>
                                    </CardActions>
                                </NextLink>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Layout>
    );
}
