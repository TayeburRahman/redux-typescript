import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ProductCart = ({ product }: { product: IProduct }) => {
    const { _id, name, price, img } = product;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia component="img" image={img} alt={name} />
                <CardContent>
                    <Typography gutterBottom variant="body2" component="div">
                        {name}
                    </Typography>
                    <Typography variant="h5" color="primary">
                        $ {price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    ADD TO CARD
                </Button>
                <Typography
                    color="primary"
                    component={Link}
                    to={`/product/${_id}`}
                >
                    Learn More
                </Typography>
                <Button size="small" color="primary">
                    BUY NOW
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCart;
