//import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row,Col,Image,Card,Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'; 
//import products from '../products';
//import axios from 'axios';

const ProductScreen = () => {
  const { id: productId } = useParams();
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);
  //const product = products.find((p) => p._id === productId);
  //const [product, setProduct] = useState({});

// useEffect(() => {
//   const fetchProduct = async() => {
//     const { data } = await axios.get(`/api/products/${productId}`);
//     setProduct(data);
//   };

//   fetchProduct();
// }, [productId]);

  return (
  <>
    <Link className="btn btn-light my-3"  to="/">Go Back</Link>
    { isLoading ? (
      <h2>Loading...</h2>
    ) : error ? (<div>{ error?.data?.message || error.error }</div>) : (
      <Row> 
      <Col md={5}>
        <Image src={ product.image } alt={ product.name } fluid />  
      </Col>
      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroupItem>
            <h3>{ product.name }</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating value={product.rating} text={`${product.numReviews } reviews` }/>
          </ListGroupItem>
          <ListGroupItem>
            Price: ${ product.price }
          </ListGroupItem>
          <ListGroupItem>
            Description: { product.description }
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>
                  <strong>${ product.price }</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>
                  <strong>{ product.countInStock > 0 ? 'In stock' : 'Out of stock '}</strong>
                </Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Button className='btn-block'
                type='button'
                disabled={ product.countInStock === 0 }
              >Add to cart</Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>) }
    
  </>
)};

export default ProductScreen;