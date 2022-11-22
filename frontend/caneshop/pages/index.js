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

import data from '../utils/data';

import NextLink from 'next/link';

export default function Home() {
    return (
        <Layout>
            <div>
                <h1>Products</h1>
                <Grid container spacing={3}>
                    {data.products.map((product) => (
                        <Grid item md={4} key={product.name}>
                            <Card>
                                <NextLink
                                    href={`/product/${product.slug}`}
                                    passHref
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={product.image}
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
                                            Add to Cart{' '}
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
