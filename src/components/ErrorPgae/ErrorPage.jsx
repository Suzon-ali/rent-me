
import { Link } from "react-router-dom";
import './ErrorPage.css'

// eslint-disable-next-line react/prop-types
const ErrorPage = ({message}) => {
  return (
    <section className="page_404 mt-20">
      <div className="container mx-auto ">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">Ops!</h1>
              </div>
              <div className="contant_box_404">
                <h3 className="h2">Look like you're lost</h3>

                <p>{message}</p>

                <Link to={'/'} className="link_404 rounded">Go to Home</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;