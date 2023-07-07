import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Image } from "react-bootstrap";
const LoginModal = dynamic(() => import("../Custom/LoginModal"), {
  ssr: false,
});
const Content = ({ products }: any) => {
  const [openLoginSidebarModel, setOpenLoginSidebarModel] = useState(false);
  const toggleLoginSidebarModal = () => {
    setOpenLoginSidebarModel(!openLoginSidebarModel);
  };
  return (
    <>
<LoginModal
        openLoginSidebarModel={openLoginSidebarModel}
        toggleLoginSidebarModal={toggleLoginSidebarModal}
      />
      <div className="shop-pro-content">
        <div className="shop-pro-inner">
          <div className="row">
            {products.length === 0 && <>No Product Found</>}
            {products && products.map((data: any, index: number) => (
              <>
                <div key={index} className="col-lg-4 col-md-6 col-sm-6 col-xs-6 mb-6 pro-gl-content">
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
                        {data.product_offer == 1 && <>
                          <span className="percentage">{data.product_percentage}%</span>
                        </>}
                      </div>
                    </div>
                    <div className="ec-pro-content">
                      <h5 className="ec-pro-title">
                        <Link href={`/product/${data.product_id}`}>{data.product_name}</Link>
                      </h5>
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
        </div>
      </div>
    </>
  );
};

export default Content;
