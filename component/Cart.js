import "bootstrap/dist/css/bootstrap.min.css";

function Cart(){
   return(
      <div className="card bg-secondary mt-2" style={{height:'70px',color:'white'}}>
         CART:<br/>
      <p style={{marginTop:'10px'}}>   Now in your cart  <a style={{color:'white'}} href="">0 items</a></p>
      </div>
   )
}
export default Cart;