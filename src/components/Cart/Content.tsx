import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "@/redux/CartSlice";
import Link from "next/link";
import {toast} from 'react-toastify'
import { Image } from "react-bootstrap";

const Content = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: any) => state.cart.items);

   

  const increaseQtyHandler = (id :any) => {
    dispatch(increaseQty(id));
  };
  const decreaseQtyHandler = (id : any) => {
    dispatch(decreaseQty(id));
  };
  const removeItemCart = (id : any) => {
    dispatch(removeItem(id));
    toast.success("Item removed from the cart");
  };
  return (
    <>
     {cartItems.length !==0 && <>
      <div className="ec-cart-content">
        <div className="ec-cart-inner">
          <div className="row">
            <form action="#">
              <div className="table-content cart-table-content">
                <table>
                  <thead>
                    <tr>
                      {/* <th>S.No</th> */}
                      <th>Product</th>
                      <th>Price</th>
                      <th style={{ textAlign: "center" }}>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Look like you haven't added anything */}
                    {cartItems.length === 0 ? (
                      <>
                        <tr role="row">
                          <td
                            className="sorting_1"
                            colSpan={6}
                            style={{ textAlign: "center" }}
                          >
                            Look like you haven&apos;t added anything
                          </td>
                        </tr>
                      </>
                    ) : (
                      <>
                        {cartItems.map((data: any, index: number) => (
                          <tr key={index}>
                            {/* <td>{index + 1}</td> */}
                            <td
                              data-label="Product"
                              className="ec-cart-pro-name"
                            >
                              <Link href={`/product/${data.product_id}`}>
                                <Image
                                style={{width : "55px" , height : "50px"}}
                                  className="ec-cart-pro-img mr-4"
                                  src={data.image.image}
                                  alt=""
                                />
                                {data.name}
                              </Link>
                            </td>
                            <td
                              data-label="Price"
                              className="ec-cart-pro-price"
                            >
                              <span className="amount">₹ {data.price}</span>
                            </td>
                            <td
                              data-label="Quantity"
                            //   className="ec-cart-pro-qty"
                              style={{ textAlign: "center" }}
                            >
                              {/* <div className="ec-single-qty" > */}
                                <div className="qty-plus-minus" style={{display : "flex" , justifyContent : "space-evenly"}}>
                                  <div
                                  style={{cursor : "pointer" , border : "0.1px solid black"}}
                                    className="dec ec_qtybtn pl-2 pr-2 pb-1 pt-1"
                                    onClick={() => decreaseQtyHandler(data.id)}
                                  >
                                    -
                                  </div>
                                  <div
                                  className="pl-2 pr-2 pt-1 pb-1"
                                    style={{
                                      fontWeight: 500,
                                      fontSize: "16px", border : "1px solid black"
                                    }}
                                  >
                                    {data.quantity}
                                  </div>
                                  <div
                                  style={{cursor : "pointer" , border : "1px solid black"}}
                                    onClick={()=>increaseQtyHandler(data.id)}
                                    className="inc ec_qtybtn pl-2 pr-2 pb-1 pt-1"
                                  >
                                    +
                                  </div>
                                </div>
                              {/* </div> */}
                            </td>
                            <td
                              data-label="Total"
                              className="ec-cart-pro-subtotal"
                            >
                              ₹ {Number(data.price * data.quantity)}
                            </td>
                            <td
                              data-label="Remove"
                              className="ec-cart-pro-remove"
                            >
                              <a>
                                <i onClick={()=> removeItemCart(data.id)} className="ecicon eci-trash-o"></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="ec-cart-update-bottom">
                    <Link href={"/product"}>{cartItems.length ===0 ? "Explore Shopping" :  "Continue Shopping"}</Link>
                    {/* <button className="btn btn-primary">Check Out</button> */}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      </> 
      }
    </>
  );
};

export default Content;
