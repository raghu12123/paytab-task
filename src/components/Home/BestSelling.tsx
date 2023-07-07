import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Image } from "react-bootstrap";

const Loading = dynamic(() => import("../layout/Loading"), {
  ssr: false,
});
const BestSelling = () => {
  const [loading, setLoading] = useState(false);
  const [bestSellingProduct, setBestSellingProduct] = useState([]);  
const res:any ={
  "data": [
      {
          "product_id": 1,
          "product_status": 1,
          "product_name": "Sleeping Pillow",
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
          "product_id": 2,
          "product_status": 1,
          "product_name": "Pillow",
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
          "product_id": 5,
          "product_status": 1,
          "product_name": "Complete Comforter Set",
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
          "product_id": 6,
          "product_status": 1,
          "product_name": "Bed Sheet",
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
      }
  ],
  "status": true
}
useEffect(()=>{
  setLoading(true);
      if (res.data.length > 4) {
        setBestSellingProduct(res.data.slice(0, 4));
      } else {
        setBestSellingProduct(res.data);
      }
    
    setLoading(false);
  
    },[])

  return (
    <>
    {loading && <Loading />}
    {bestSellingProduct.length === 0 ? (
      <></>
    ) : (
      <>
        <section
          className="section ec-new-product section-space-p mb-5 mt-5"
          id="arrivals"
        >
          <div className="container">
          <div className="col-md-12 text-center">
                <div className="section-title">
     
                  <h2 className="ec-title">Best Selling</h2>
                  <p className="sub-title">
                    Browse The Collection of Best Selling Products
                  </p>
                </div>
              </div>
            <div className="row">
              {bestSellingProduct.map((data:any , index : number) => (
                  <>
                       <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
                <div className="ec-product-inner">
                  <div className="ec-pro-image-outer">
                    <div className="ec-pro-image text-center">
                      <Link href={`/product/${data.product_id}`} className="image">
                        <Image
                          width={"200px"}
                          height={"150px"}
                          className="main-image"
                          src={data.product_image}
                          alt="Product"
                        />
                       
                      </Link>
                    </div>

                  </div>
                  <div className="ec-pro-content">

                    <h5 className="ec-pro-title">
                      <Link href={`/product/${data.product_id}`}>{data.product_name}</Link>
                    </h5>
                    <div className="ec-pro-list-desc ">
                    </div>
                    <span className="ec-price">
                     
                      <span className="old-price">
                        ₹{data.product_price[0].product_demo_amount}
                      </span>
                     
                      <span className="new-price">₹{data.product_price[0].product_price}</span>
                    </span>

                  </div>
                </div>
              </div>
                  </>
              ))}
            </div>
            <div className="row">
              <div className="col-sm-12 shop-all-btn">
                <Link href="/product">Shop All Collection</Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )}
  </>
  );
};

export default BestSelling;
