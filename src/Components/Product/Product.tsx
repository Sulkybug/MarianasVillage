import React from "react";
import "./Product.css";
import videoHousing from "/video/apartamentomedellin.mp4";
import videoDates from "/video/datingVideo.mp4";
import videoRural from "/video/casadecampo2.mp4";
import videoServices from "/video/servicios.mp4";

import { HashLink } from "react-router-hash-link";

const Product: React.FC = () => {
  return (
    <div id="product">
      <div className="products">
        <div className="SectionOne">
          <HashLink smooth to="/dating">
            <div className="productBox">
              <h2 className="productDescription">Housing</h2>
              <video width="600" loop autoPlay muted>
                <source src={videoHousing} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </HashLink>
          <HashLink smooth to="/dating">
            <div className="productBox">
              <h2 className="productDescription">Services</h2>
              <video width="600" loop autoPlay muted>
                <source src={videoServices} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </HashLink>
        </div>
        <div className="SectionTwo">
          <HashLink smooth to="/dating">
            <div className="productBox">
              <h2 className="productDescription">Dating</h2>

              <video width="600" loop autoPlay muted>
                <source src={videoDates} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </HashLink>
          <HashLink smooth to="/dating">
            <div className="productBox">
              <h2 className="productDescription">Country Side</h2>
              <video width="600" loop autoPlay muted>
                <source src={videoRural} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Product;
