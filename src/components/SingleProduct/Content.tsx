import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, increaseQty, decreaseQty } from "@/redux/CartSlice";
import { toast } from "react-toastify";
import dynamic from "next/dynamic";
import { Carousel } from "react-responsive-carousel";
import { Image } from "react-bootstrap";

const LoginModal = dynamic(() => import("../Custom/LoginModal"), {
  ssr: false,
});
const Content = ({ product }: any) => {
  const dispatch = useDispatch();
  const [openLoginSidebarModel, setOpenLoginSidebarModel] = useState(false);
  const toggleLoginSidebarModal = () => {
    setOpenLoginSidebarModel(!openLoginSidebarModel);
  };

  const [selectedThumbnail, setSelectedThumbnail] = useState(0);


  const [showFullText, setShowFullText] = useState(false);
  const [variationValue, setVariationValue] = useState(
    product.product_price[0].product_price_id
  );
  const storedToken = useSelector((state: any) => state.location.token);
  const [demoPrice, setDemoPrice] = useState(
    product.product_price[0].product_demo_amount
  );
  const [originalPrice, setOriginalPrice] = useState(
    product.product_price[0].product_price
  );

  const variationChangeHandler = (e: any) => {
    setVariationValue(e.target.value);
  };

  useEffect(() => {
    const item = product.product_price.find(
      (item: any) => item.product_price_id == variationValue
    );
    setDemoPrice(item.product_demo_amount);
    setOriginalPrice(item.product_price);
  }, [variationValue]);

  const addToCartHandler = () => {
    dispatch(
      addItem({
        id: variationValue,
        name: product.product_name,
        price: originalPrice,
        image: product.product_image[0],
        quantity: 1,
        product_id: product.product_id,
      })
    );
    toast.success("Item added to the cart");
  };

  const increaseQtyHandler = () => {
    dispatch(increaseQty(variationValue));
  };
  const decreaseQtyHandler = () => {
    dispatch(decreaseQty(variationValue));
  };

  const cartItems = useSelector((state: any) => state.cart.items);
  const totlaPrice = useSelector((state: any) => state.cart.totalPrice);

  let isInCart = false;
  let cartQty = 1;
  if (cartItems.length !== 0) {
    isInCart = cartItems.some((item: any) => item.id == variationValue);
    const item = cartItems.find((item: any) => item.id == variationValue);
    if (item) {
      cartQty = item.quantity;
    }
  }

  let newWishlist_id = 0;

  const addwishlist = async (id: any) => {
    if (!storedToken) {
      toggleLoginSidebarModal();
    } else {
      toast.success("Item added to the cart");
      newWishlist_id = id;
      getSingleProduct();
      refresh();
    }
  };
  const getSingleProduct = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/add_favourite.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: storedToken,
        },
        body: JSON.stringify({
          product_id: newWishlist_id,
        }),
      }
    );
    const data = await response.json();
    if (data.status) {
    }
  };
  const refresh = () => window.location.reload();

  return (
    <>
      <LoginModal
        openLoginSidebarModel={openLoginSidebarModel}
        toggleLoginSidebarModal={toggleLoginSidebarModal}
      />

      <div className="single-pro-block">
        <div className="single-pro-inner">
          <div className="row">
            <div className=" col-md-6 col-sm-12">
              <div className="single-product-scroll">
                <div className="">
                  <Carousel
                    selectedItem={selectedThumbnail}
                    onChange={(index) => setSelectedThumbnail(index)}
                  >
                    {Object.keys(product).length !== 0 &&
                      product.product_image.length !== 0 &&
                      product.product_image.map((data: any, index: number) => ( 
                        <>
                          <div key={index}>
                            <Image
                              className="img-responsive "
                              src={data.image}
                              alt=""
                            />
                          </div>
                        </>
                      ))}
                  </Carousel>
               
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="single-pro-content">
                <h5 className="ec-single-title">{product.product_name}</h5>
                <div className="ec-single-rating-wrap">
                  <div
                    style={{
                      fontWeight: 500,
                      fontSize: "15px",
                      backgroundColor: "#3474d4",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                    className="pl-1 pr-1"
                  >
                    {product.product_rating.overall_rating == 0
                      ? "0.0"
                      : product.product_rating.overall_rating}
                  </div>
                
                  <div
                    style={{ fontWeight: 300, fontSize: "12px" }}
                    className="pl-2"
                  >
                    {" "}
                    {product.product_rating.review_count} Rating
                  </div>
                
                </div>
                <div className="ec-single-desc">
                  {showFullText ||
                  (Object.keys(product).length !== 0 &&
                    product.product_description.length <= 150)
                    ? product.product_description
                    : Object.keys(product).length !== 0 &&
                      product.product_description.substring(0, 150) + " ..."}
                  <span
                    style={{ cursor: "pointer", color: "#3474d4" }}
                    onClick={() => setShowFullText(!showFullText)}
                  >
                    {showFullText ? "  Read Less" : "Read More"}
                  </span>
                </div>

                <div className="ec-single-price-stoke">
                  <div className="ec-single-price">
                    {/* <span className="ec-single-ps-title">As low as</span> */}
                    <span className="new-price">
                      {" "}
                      <span className="pr-2">₹ {originalPrice}</span>{" "}
                      <span
                        style={{
                          fontWeight: 200,
                          fontSize: "16px",
                          textDecoration: "line-through",
                        }}
                        className="new-price"
                      >
                        ₹ {demoPrice}
                      </span>
                    </span>
                  </div>
                  <div className="ec-single-stoke">
                    <div
                      className="ec-pro-size"
                      style={{
                        border: "0.1px solid black",
                        borderRadius: "4px",
                        width: "110px",
                      }}
                    >
                      <select
                        onChange={variationChangeHandler}
                        className="form-select form-select-sm float-end"
                        aria-label=".form-select-sm example"
                      >
                        {Object.keys(product).length !== 0 &&
                          product.product_price.length !== 0 &&
                          product.product_price.map(
                            (data: any, index: number) => (
                              <>
                                <option
                                  key={index}
                                  defaultValue={variationValue}
                                  value={data.product_price_id}
                                >
                                  {data.product_variation} {data.product_unit}
                                </option>
                              </>
                            )
                          )}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="ec-pro-variation">
                  <div className="ec-pro-variation-inner ec-pro-variation-size">
                   
                  </div>
                
                </div>
                <div className="ec-single-qty">
                  {isInCart ? (
                    <div className="qty-plus-minus">
                      <div
                        className="dec ec_qtybtn"
                        onClick={decreaseQtyHandler}
                      >
                        -
                      </div>
                      <div style={{ fontWeight: 500, fontSize: "18px" }}>
                        {cartQty}
                      </div>
                    
                      <div
                        onClick={increaseQtyHandler}
                        className="inc ec_qtybtn"
                      >
                        +
                      </div>
                    </div>
                  ) : (
                    <div className="ec-single-cart ">
                      <button
                        className="btn btn-primary"
                        onClick={addToCartHandler}
                      >
                        Add To Cart
                      </button>
                    </div>
                  )}

                  <div className="ec-single-wishlist pl-2" color="#e13a7f">
                   
                    {product.is_favourite == 1 && (
                      <>
                        <a
                          className="ec-btn-group wishlist"
                          title="Wishlist"
                          onClick={() => addwishlist(product.product_id)}
                        >
                          <i
                            className="fas fa-heart"
                            style={{
                              color: "#da107c",
                              fontSize: 20,
                              fill: "red",
                            }}
                          ></i>
                        </a>
                      </>
                    )}
                    {product.is_favourite !== 1 && (
                      <>
                        <a
                          className="ec-btn-group wishlist"
                          title="Wishlist"
                          onClick={() => addwishlist(product.product_id)}
                        >
                          <i
                            className="fi-rr-heart"
                            style={{
                              color: "#da107c",
                              fontSize: 20,
                              fill: "red",
                            }}
                          ></i>
                        </a>
                      </>
                    )}
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
