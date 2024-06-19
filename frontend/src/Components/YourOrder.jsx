import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faBoxOpen,
  faShippingFast,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
import AuthContextProvider, { AuthContext } from "./AuthContextProvider";
function YourOrder() {
  const { login } = useContext(AuthContext);
  if (!login) {
    return <Navigate to="/login" />;
  }
  return (
    <section
      className="vh-100"
      style={{ backgroundColor: "#8c9eff", fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12">
            <div
              className="card card-stepper text-black"
              style={{ borderRadius: "16px" }}
            >
              <div className="card-body p-5">
                <div className="d-flex justify-content-between align-items-center mb-5">
                  <div>
                    <h5 className="mb-0">
                      INVOICE{" "}
                      <span className="text-primary font-weight-bold">
                        #Y34XDHR
                      </span>
                    </h5>
                  </div>
                  <div className="text-end">
                    <p className="mb-0">
                      Expected Arrival <span>01/12/19</span>
                    </p>
                    <p className="mb-0">
                      USPS{" "}
                      <span className="font-weight-bold">
                        234094567242423422898
                      </span>
                    </p>
                  </div>
                </div>
                <ul
                  id="progressbar-2"
                  className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2"
                >
                  <li className="step0 active text-center" id="step1"></li>
                  <li className="step0 active text-center" id="step2"></li>
                  <li className="step0 active text-center" id="step3"></li>
                  <li className="step0 text-muted text-end" id="step4"></li>
                </ul>
                <div className="d-flex justify-content-between">
                  <div className="d-lg-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faClipboardList}
                      className="fa-3x me-lg-4 mb-3 mb-lg-0"
                    />
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">Processed</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faBoxOpen}
                      className="fa-3x me-lg-4 mb-3 mb-lg-0"
                    />
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">Shipped</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faShippingFast}
                      className="fa-3x me-lg-4 mb-3 mb-lg-0"
                    />
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">En Route</p>
                    </div>
                  </div>
                  <div className="d-lg-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="fa-3x me-lg-4 mb-3 mb-lg-0"
                    />
                    <div>
                      <p className="fw-bold mb-1">Order</p>
                      <p className="fw-bold mb-0">Arrived</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourOrder;
