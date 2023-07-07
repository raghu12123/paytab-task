import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: any) {

  return (
   
        <>
          <Header />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </>
    
  );
}
