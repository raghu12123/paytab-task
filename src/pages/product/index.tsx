
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Content = dynamic(() => import("../../components/Product/Content"), {
  ssr: false,
});

export default function Product(props: any) {

  const [products, setProducts] = useState([]);
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
    const data =  res.data
 useEffect(() => {
      setProducts(data);
  },[]);
  
  return (
      <section className="ec-page-content section-space-p">
        <div className="container">
          <div className="row">
            <div className="ec-shop-rightside col-lg-9 order-lg-last col-md-12 order-md-first margin-b-30">
              <Content products={products} />
            </div>
            </div>
          </div>   
      </section>
  );
}


