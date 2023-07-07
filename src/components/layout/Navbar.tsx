import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Navbar = (props: any) => {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  

  const getCategories = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/user/get_category.php`
    );

    const data = await response.json();
    if (data.status) {
      setCategories(data.GTS);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);


  return (
    <>
      <div id="ec-main-menu-desk" className="sticky-nav navbar-menu-responsive">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-12 align-self-center">
              <div className="ec-main-menu">
                <ul>
                  <li className={`${router.pathname === "/" ? "active" : ""}`}>
                    <Link href={"/"}>Home</Link>
                  </li>
                  <li
                    className={`dropdown ${
                      router.pathname === "/product" ||
                      router.pathname === "/product/`[productId]`"
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link href={"/product"}>Products</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
