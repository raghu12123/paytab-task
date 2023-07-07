
import Link from "next/link"
const PageNotFound = () => {
    return (
      <section className="ec-under-maintenance page-not-found-style" style={{height : "370px !important"}}>
  
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="under-maintenance">
                      <h1>Error 404</h1>
                      <h4>The page was not found.</h4>
                      {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                          been the industry's standard dummy.</p> */}
                      <Link href="/" className="btn btn-lg btn-primary" tabIndex={0}>Back to Home</Link>
                  </div>
              </div>
              <div className="col-md-6 disp-768">
                  <div className="under-maintenance">
                      <img className="maintenance-img" src="/assets/images/common/404.png" alt="maintenance" />
                  </div>
              </div>
          </div>
      </div>
  </section>
    )
  }
  
  export default PageNotFound