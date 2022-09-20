import React from 'react';
import { Grid, Typography, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, Card, List, ListItem } from '@mui/material';
import { useStateContext } from '../context/StateContext';
import Link from 'next/link';
import { client, urlFor } from '../lib/client';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';



const Carts = () => {

  const { cartItems, totalQuantities, totalPrice, onRemove, toggleCartItemQuantity } = useStateContext();
 
  

  return (
    <div>
      <Typography style={{marginLeft: '40px'}} className="cart-typ" component="h1" variant="h4">Shopping Cart<span>({totalQuantities} items)</span></Typography>
      {cartItems.length === 0 ? (<div className='scart'>Cart is empty. <Link href={'/Shop'} passHref><a style={{color:'blue'}}>Go shopping</a></Link></div>): (
        <Grid style={{marginLeft: '40px', marginTop: '3em'}} container spacing={1} >
          <Grid item md={9} xs={12}>
            <TableContainer>
              <Table>
              <TableHead>
                <TableRow>
                  <TableCell >Image</TableCell>
                  <TableCell >Name</TableCell>
                  <TableCell align='right'>price</TableCell>
                  <TableCell align='right'>Quantity</TableCell>
                  <TableCell align='right'></TableCell>      
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell >
                          <img src={urlFor(item?.image[0])} alt="product-image" width={70} height={70} />     
                    </TableCell>
           
                  <TableCell>
                    <Typography>{item.name}</Typography>
                  </TableCell>

                    <TableCell align='right'>
                      <Typography component={'h6'} variant="h6">${item.price}</Typography>
                    </TableCell>

                    <TableCell align='right' className='quantity1' style={{width: '180px'}}>
                      <p className='quantity-desc1'>
                      <span className='minus1' onClick={() => toggleCartItemQuantity(item._id, 'dec')}><RemoveIcon /></span>
                      <span className='num1' onClick="">{item.quantity}</span>
                      <span className='plus1' onClick={() => toggleCartItemQuantity(item._id, 'inc')}><AddIcon /></span>
                      </p>
                     
                    </TableCell>
                    <TableCell>
                    <button style={{borderRadius: '50%', cursor: 'pointer', border: '1px solid red', backgroundColor: 'red', color: '#fff'}} className="btn-remove" onClick={() => onRemove(item)} >X</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                 {cartItems.length >= 1 && (
                  <div>
                  <div>
                    <h3>Subtotal: </h3>
                    <h3>${totalPrice}</h3>
                  </div>
                  <div>
                    <Link href={'/Success'}>
                    <button className='btn-checkout'>Pay</button>
                    </Link>
                  </div>
                  </div>

                  
                 )}
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}

export default Carts
