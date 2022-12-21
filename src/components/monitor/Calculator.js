import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';


class Calculator extends Component {
                    
             showOrders (orders) {
               if(!orders || orders.length === 0){
                  return <li className="text-right text-muted titel">ไม่มีสินค้าครับ</li>
               } else {
                  return orders.map(order => {
                    return(
                    <li className="text-right text-success title" > 
                        {order.product.productName} x {order.quantity} = {order.product.unitPrice * order.quantity}
                        <IconButton className={Calculator.button} aria-label="Delete" onClick={() => this.props.onDelOrder(order.product)} >
                      <DeleteIcon fontSize="small" /></IconButton>
                    </li>
                    )
                  })
               }
             }  
             
   render() {

    const {totalPrice, orders } = this.props;

      return(
      <div>
          <h1 className="text-right">รวม  {totalPrice} บาท</h1>
          <hr />
           <ul className="list-unstyled">
              {this.showOrders(orders)}
           </ul>
          <hr />
          <button className="ิbtn btn-block btn-success title" onClick={() => this.props.onConfirmOrder()} >ยืนยัน</button>
          <button className="ิbtn btn-block btn-danger title" onClick={() => this.props.onCancelOrder()} >ยกเลิก</button>

      </div>  
      );

}

}

export default Calculator;

