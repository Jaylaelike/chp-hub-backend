import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";


class Productitem extends Component {
    constructor(props) {
        super(props);
       
    }
    

    render(){
       const {productName, unitPrice, thumbnail} = this.props.product;

    return (
        <div className="col-md-3 col-sm-6">
            <img className="img-fluid img-thumbnail" src={thumbnail} />
            <h5 className="mt-2">{productName}</h5>
            <p className="title text-right" >{unitPrice}</p>

            {this.props.onAddOrder &&
            <Button variant={"contained"} color={"secondary"}fullWidth onClick={() => this.props.onAddOrder(this.props.product)}> <Icon>add_circle_outlined_rounded</Icon>
               ซื้อ
            </Button>
            }
            
            {(this.props.onDelProduct || this.props.onEditProduct) &&
            <button className="btn  btn-warning col-5 title" onClick={() => this.props.onEditProduct(this.props.product)}>
               แก้ไข
            </button>
            }

            {(this.props.onDelProduct || this.props.onEditProduct) &&
            <button className="btn  btn-danger float-right col-5 title" onClick={() => this.props.onDelProduct(this.props.product)}>
               ลบ
            </button>
            }

            <hr />
        </div>
     )
    }
}

export default Productitem;








