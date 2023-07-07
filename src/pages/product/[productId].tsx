import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const Content = dynamic(
  () => import("../../components/SingleProduct/Content"),
  {
    ssr: false,
  }
);
const ProductId = () => {
  const [product, setProduct] = useState({});
const res:any={
  "data": {
      "product_id": 5,
      "product_name": "Complete Comforter Set",
      "product_status": 1,
      "product_image": [
          {
              "image": "https://api.mypeppys.com/dashboard/Images/Product/5_0.png"
          },
         
      ],
      "category_id": 1,
      "category_name": "Mattress",
      "category_icon_image": "https://api.mypeppys.com/dashboard/Images/Category_Icon/11916.png",
      "product_video_link": null,
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
      "product_rating": {
          "overall_rating": "5.0",
          "review_count": 1,
          "user": [
              {
                  "user_name": "Testing User",
                  "user_comment": "test comment",
                  "user_rating": "5",
                  "date": "31-01-2023"
              }
          ]
      }
  },
  "status": true
}
  
  useEffect(() => {
    if (res.status) {
      setProduct(res.data);
  }
  }, []);

  return (
    <>
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="ec-pro-rightside ec-common-rightside col-lg-12 col-md-12">
              {Object.keys(product).length !== 0 &&  <Content product={product} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductId;

