import "reactjs-popup/dist/index.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { removeToken } from "@/redux/localtionSlice";
import LoginModal from "../Custom/LoginModal";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Image, Navbar } from "react-bootstrap";

const Header = (props: any) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [openLoginSidebarModel, setOpenLoginSidebarModel] = useState(false);
  const toggleLoginSidebarModal = () => {
    setOpenLoginSidebarModel(!openLoginSidebarModel);
  };

  const branchId = useSelector((state: any) => state.location.branchId);
  const storedToken = useSelector((state: any) => state.location.token);

  const [cartItems, setCartItems] = useState([]);
  const [token, setToken] = useState("");

  const cartItem = useSelector((state: any) => state.cart.items);

  const [product, setProduct] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);
  const res:any ={
    "data": [
        {
            "product_id": 6,
            "product_name": "Bed Sheet",
            "product_status": 1,
            "product_video_link": null,
            "product_image": "https://api.mypeppys.com/dashboard/Images/Product/6_0.jpg",
            "category_id": 3,
            "category_name": "Bed Sheets",
            "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
            "product_price": [
                {
                    "product_price_id": 44,
                    "product_variation": "1",
                    "product_unit": "Set",
                    "product_price": 1500,
                    "product_demo_amount": 2000,
                    "saved_amount": "",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                },
                {
                    "product_price_id": 45,
                    "product_variation": "2",
                    "product_unit": "Set",
                    "product_price": 3000,
                    "product_demo_amount": 4000,
                    "saved_amount": "",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                }
            ],
            "product_recommended": 0,
            "product_seasonal": 1,
            "product_percentage": 0,
            "is_favourite": 0,
            "timeslot": "0",
            "product_offer": 0,
            "product_rating": "5.0"
        },
        {
            "product_id": 5,
            "product_name": "Complete Comforter Set",
            "product_status": 1,
            "product_video_link": null,
            "product_image": "https://api.mypeppys.com/dashboard/Images/Product/5_0.png",
            "category_id": 1,
            "category_name": "Mattress",
            "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
            "product_price": [
                {
                    "product_price_id": 46,
                    "product_variation": "1",
                    "product_unit": "Set",
                    "product_price": 3000,
                    "product_demo_amount": 3500,
                    "saved_amount": "",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                },
                {
                    "product_price_id": 47,
                    "product_variation": "2",
                    "product_unit": "Set",
                    "product_price": 6000,
                    "product_demo_amount": 7000,
                    "saved_amount": "",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                }
            ],
            "product_recommended": 0,
            "product_seasonal": 0,
            "product_percentage": 0,
            "is_favourite": 0,
            "timeslot": "0",
            "product_offer": 0,
            "product_rating": "5.0"
        },
        {
            "product_id": 3,
            "product_name": "Dunlop Mattress",
            "product_status": 1,
            "product_video_link": null,
            "product_image": "https://api.mypeppys.com/dashboard/Images/Product/3_0.png",
            "category_id": 1,
            "category_name": "Mattress",
            "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
            "product_price": [
                {
                    "product_price_id": 38,
                    "product_variation": "1",
                    "product_unit": "Set",
                    "product_price": 9000,
                    "product_demo_amount": 9500,
                    "saved_amount": "",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                }
            ],
            "product_recommended": 0,
            "product_seasonal": 1,
            "product_percentage": 0,
            "is_favourite": 0,
            "timeslot": "0",
            "product_offer": 0,
            "product_rating": 0
        },
        {
            "product_id": 2,
            "product_name": "Pillow",
            "product_status": 1,
            "product_video_link": "",
            "product_image": "https://api.mypeppys.com/dashboard/Images/Product/2_0.png",
            "category_id": 2,
            "category_name": "Pillow",
            "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
            "product_price": [
                {
                    "product_price_id": 39,
                    "product_variation": "1",
                    "product_unit": "Set",
                    "product_price": 119,
                    "product_demo_amount": 150,
                    "saved_amount": "You Saved 6",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                },
                {
                    "product_price_id": 40,
                    "product_variation": "2",
                    "product_unit": "Set",
                    "product_price": 238,
                    "product_demo_amount": 300,
                    "saved_amount": "You Saved 13",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                }
            ],
            "product_recommended": 1,
            "product_seasonal": 1,
            "product_percentage": 5,
            "is_favourite": 0,
            "timeslot": "0",
            "product_offer": 1,
            "product_rating": 0
        },
        {
            "product_id": 1,
            "product_name": "Sleeping Pillow",
            "product_status": 1,
            "product_video_link": " ",
            "product_image": "https://api.mypeppys.com/dashboard/Images/Product/1_0.png",
            "category_id": 2,
            "category_name": "Pillow",
            "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
            "product_price": [
                {
                    "product_price_id": 41,
                    "product_variation": "2",
                    "product_unit": "Set",
                    "product_price": 315,
                    "product_demo_amount": 400,
                    "saved_amount": "You Saved 35",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                },
                {
                    "product_price_id": 42,
                    "product_variation": "4",
                    "product_unit": "Set",
                    "product_price": 630,
                    "product_demo_amount": 800,
                    "saved_amount": "You Saved 70",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                }
            ],
            "product_recommended": 1,
            "product_seasonal": 0,
            "product_percentage": 10,
            "is_favourite": 0,
            "timeslot": "0",
            "product_offer": 1,
            "product_rating": 0
        },
        {
            "product_id": 4,
            "product_name": "Xtra Snooze Grid Mattress",
            "product_status": 1,
            "product_video_link": null,
            "product_image": "https://api.mypeppys.com/dashboard/Images/Product/4_0.png",
            "category_id": 1,
            "category_name": "Mattress",
            "product_description": "Consectetur tempor dolore qui occaecat fugiat culpa labore elit ut sunt aute culpa irure laboris.\r\n\r\nOccaecat ad culpa sit irure ad exercitation ex incididunt qui nostrud incididunt irure aute qui. Dolor nulla dolor est laborum sint dolor aliqua eiusmod non incididunt exercitation in qui occaecat.\r\n\r\nAmet anim id fugiat nulla esse et nostrud mollit incididunt non enim velit sit do.\r\n\r\nAute fugiat eu sit eu consectetur minim culpa non est proident adipisicing quis nulla aliqua. Do ex cupidatat consectetur velit eiusmod pariatur non mollit non incididunt sint reprehenderit commodo cupidatat. Tempor voluptate aute excepteur tempor incididunt amet ea laborum Lorem aliquip deserunt id irure enim.",
            "product_price": [
                {
                    "product_price_id": 43,
                    "product_variation": "1",
                    "product_unit": "Set",
                    "product_price": 5500,
                    "product_demo_amount": 6000,
                    "saved_amount": "",
                    "product_weight": null,
                    "product_piece_count": null,
                    "product_serves": "0",
                    "net_weight": null,
                    "gross_weight": null
                }
            ],
            "product_recommended": 0,
            "product_seasonal": 0,
            "product_percentage": 0,
            "is_favourite": 0,
            "timeslot": "0",
            "product_offer": 0,
            "product_rating": 0
        }
    ],
    "status": true
}
  const searchProductHandle = (event: any) => {
    setProduct(event.target.value);
  };
  const searchProductOff = () => {
    setProduct("");
  };
  useEffect(() => {
    setCartItems(cartItem);
    setToken(storedToken);
  }, [cartItem, token]);

  const filteredProducts = searchProduct.filter((item: any) => {
    return item.product_name.toLowerCase().includes(product.toLowerCase());
  });

  useEffect(() => {
    setSearchProduct(res.data)
   
  }, [branchId,storedToken]);


  const logoutHandler = async () => {
    dispatch(removeToken());
    setToken("");
    if (
      router.pathname === "/cart" ||
      router.pathname === "/product" ||
      router.pathname === "/product/[productId]"
    ) {
      router.push("/");
    }
    toast.success("Logout SuccessFully");
  };

  const cartHandler = () => {
    if (token) {
      router.push("/cart");
    } else {
      toggleLoginSidebarModal();
    }
  };
  return (
    <>
      <LoginModal
        openLoginSidebarModel={openLoginSidebarModel}
        toggleLoginSidebarModal={toggleLoginSidebarModal}
        setToken={setToken}
      />
      <header className="ec-header">
        <div className="header-top">
          <div className="col d-lg-none ">
            <div className="ec-header-bottons">
              <div className="ec-header-user dropdown">
                <button className="dropdown-toggle" data-bs-toggle="dropdown">
                  <i className="fi-rr-user"></i>
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  {token ? (
                    <>
                      <li
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={logoutHandler}
                      >
                        Logout
                      </li>
                    </>
                  ) : (
                    <>
                      {" "}
                      <li
                        className="dropdown-item"
                        style={{ cursor: "pointer" }}
                        onClick={toggleLoginSidebarModal}
                      >
                        Login
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <a onClick={cartHandler} className="ec-header-btn ec-side-toggle">
                <div className="header-icon">
                  <i className="fi-rr-shopping-bag"></i>
                </div>
                <span
                  style={{ zIndex: 0 }}
                  className="ec-header-count cart-count-lable"
                >
                  {cartItems ? cartItems.length : 0}
                </span>
              </a>

              <a className="ec-header-btn ec-side-toggle d-lg-none">
              </a>
            </div>
          </div>
        </div>
        <div className="ec-header-bottom d-none d-lg-block">
          <div className="container position-relative">
            <div className="row">
              <div className="ec-flex">
                <div className="align-self-center">
                  <div className="header-logo">
                    <Navbar.Brand href="/">Brand link</Navbar.Brand>
                  </div>
                </div>
                <div className="ec-header-bottom d-none d-lg-block">
                  <div className="align-self-center ec-header-search">
                    <div className="header-search">
                      <form className="ec-search-group-form" action="#">
                        <input
                          className="form-control ec-search-bar"
                          onChange={searchProductHandle}
                          value={product}
                          type="text"
                          name="product-search"
                          id="product-search"
                          placeholder="Search Products"
                        />
                        {product.length !== 0 && (
                          <div className="dropdown search-dropdown-list">
                            <ul className="">
                              {filteredProducts.length !== 0 ? (
                                <>
                                  {filteredProducts.map(
                                    (item: any, index: number) => {
                                      return (
                                        <li
                                          className="dropdown"
                                          key={index}
                                          onClick={searchProductOff}
                                        >
                                          <Link
                                            href={`/product/${item.product_id}`}
                                          >
                                            {item.product_name}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </>
                              ) : (
                                <>
                                  <li className="dropdown">No Product Found</li>
                                </>
                              )}
                            </ul>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>

                <div className="align-self-center">
                  <div className="ec-header-bottons">
                    <div className="ec-header-user dropdown">
                      <button
                        className="dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        <i className="fi-rr-user"></i>
                      </button>
                      <ul className="dropdown-menu dropdown-menu-right">
                        {token ? (
                          <>
                            <li
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              onClick={logoutHandler}
                            >
                              Logout
                            </li>
                          </>
                        ) : (
                          <>
                            {" "}
                            <li
                              className="dropdown-item"
                              style={{ cursor: "pointer" }}
                              onClick={toggleLoginSidebarModal}
                            >
                              Login
                            </li>
                          </>
                        )}
                      </ul>
                    </div>

                    <a
                      // href={"/cart"}
                      onClick={cartHandler}
                      className="ec-header-btn position-relative"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-shopping-bag"></i>
                        <span
                          style={{
                            position: "absolute",
                            bottom: -4,
                            right: -10,
                          }}
                          className="badge rounded-pill bg-secondary"
                        >
                          {" "}
                          {cartItems ? cartItems.length : 0}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ec-header-bottom d-lg-none">
          <div className="container position-relative">
            <div className="row ">
              <div className="col">
                <div className="header-logo">
                  <Link href="/">
                    <Image
                      src="/logo.png"
                      alt="Site Logo"
                      style={{ width: "160px" }}
                    />
                    <Image
                      className="dark-logo"
                      src="assets/images/logo/dark-logo.png"
                      alt="Site Logo"
                      style={{ display: "none" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col">
                <div className="header-search">
                  <form className="ec-search-group-form" action="#">
                    <input
                      className="form-control ec-search-bar"
                      onChange={searchProductHandle}
                      value={product}
                      type="text"
                      name="product-search"
                      id="product-search"
                      placeholder="Search Products"
                    />

                    {/* <div className="dropdown"> */}
                    {product.length !== 0 && (
                      <div className="dropdown search-dropdown-list">
                        <ul className="">
                        {filteredProducts.length !== 0 ? (
                                <>
                                  {filteredProducts.map(
                                    (item: any, index: number) => {
                                      return (
                                        <li
                                          className="dropdown"
                                          key={index}
                                          onClick={searchProductOff}
                                        >
                                          <Link
                                            href={`/product/${item.product_id}`}
                                          >
                                            {item.product_name}
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </>
                              ) : (
                                <>
                                  <li className="dropdown">No Product Found</li>
                                </>
                              )}
                        </ul>
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
