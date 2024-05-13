import React from "react";
import Button2 from "./Button2";

function Imgbox() {
  return (
    <>
      <div className="imgbox-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 img1">
              <div
                className="img-section"
                style={{
                  backgroundImage: "url(assets/img/imgbox01.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button2 text="Shop Hoodies" />
              </div>
              <div
                className="img-section"
                style={{
                  backgroundImage: "url(assets/img/imgbox01.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button2 text="Shop Hoodies" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 img-center">
              <div
                className="img-section"
                style={{
                  backgroundImage: "url(assets/img/imgbox02.png)",
                  backgroundRepeat: "no-repeat",
                  minHeight: "100%",
                }}
              >
                <Button2 text="Shop Hoodies" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 img2">
              <div
                className="img-section"
                style={{
                  backgroundImage: "url(assets/img/imgbox01.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button2 text="Shop Hoodies" />
              </div>
              <div
                className="img-section"
                style={{
                  backgroundImage: "url(assets/img/imgbox01.png)",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <Button2 text="Shop Hoodies" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imgbox;
