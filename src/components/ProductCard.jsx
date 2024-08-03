import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {

    return (
        <Card sx={{ width: 245, margin: '20px', bgcolor: '#1E1F1CFF', color: '#1976D2FF'}}>

            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: 'contain' }}
            />

            <Box sx={{ p: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary" sx={{color: '#1976D2FF',  height: '40px', overflow: 'hidden' }}>
                    {product.title}
                </Typography>
                <Typography gutterBottom variant="body1" component="div" sx={{color: '#1976D2FF'}} >
                    Цена: {product.price}
                </Typography>
                <Link to={`/products/${product.id}`}>
                    <Button>Подробнее</Button>
                </Link>
            </Box>


        </Card>
    );
 
}

export default ProductCard;





