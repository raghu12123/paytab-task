import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";


const Content = dynamic(() => import("../components/Cart/Content"), {
  ssr: false,
});



const Cart = () => {
  const storedCartItems = useSelector((state: any) => state.cart.items);
  const storedToken = useSelector((state: any) => state.location.token);

  const [cartItems, setCartItems] = useState(storedCartItems);
  const [isCartEmpty, setIsCartEmpty] = useState(storedCartItems.length === 0);

  const [token, setToken] = useState("");

  useEffect(() => {
    setToken(storedToken);
    setCartItems(storedCartItems);
    setIsCartEmpty(storedCartItems.length === 0);
  }, [storedCartItems, storedToken]);

  return (
    <>
      {token ? (
        <>
          {!isCartEmpty ? (
            <>
              <section className="ec-page-content section-space-p">
                <div className="container">
                  <div className="row">
                    <div className="ec-cart-leftside col-lg-8 col-md-12 ">
                      <Content />
                    </div>
                  
                  </div>
                </div>
              </section>
            </>
          ) : (
            <>
              <section
                className="text-center mt-4"
                style={{ fontSize: "24px" }}
              >
                <div> Look like you haven&apos;t added anything</div>
              </section>
            </>
          )}

        </>
      ) : (
        <section className="ec-under-maintenance" style={{height : "370px !important" }}>
        </section>
      )}
    </>
  );
};

export default Cart;
