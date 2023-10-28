import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import SubHero from "../components/SubHero";

const ContactUs = () => {
  return (
    <>
      <SubHero heading="Contact Us" />
      <Container className="py-20">
        <div className="ContactUsContainer " style={{ borderRadius: "10px" }}>
          <h3 className="text-[40px] font-semibold text-center">
            Send Money to India with Paypenny
          </h3>
          <br />
          <div className="row g-3">
            <div className="col-12 col-lg-6">
              <div class="card shadow" style={{ height: "100%" }}>
                <div class="card-body">
                  <div className="flex items-center gap-2">
                    <h5 className="font-semibold text-2xl my-auto">Canada</h5>
                    <img
                      src="https://img.icons8.com/?size=512&id=15512&format=png"
                      className="h-[30px]"
                      alt=""
                    />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/building.png"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Company Name :</strong> Trackon Canada Private
                        Limited t/as Paypenny
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/address.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Address :</strong> Suite 2700, 225 – 6th Avenue
                        SW, Calgary, Alberta T2P 1N2
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/email-open.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Email-ID :</strong>{" "}
                        <a href="mailto:help@paypenny.org">help@paypenny.org</a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/apple-phone.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Phone Number :</strong> +1(416)323-3112
                      </p>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/whatsapp.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>WhatsApp :</strong> +1(825)733-0200
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="col-12 col-lg-6">
              <div className="card shadow" style={{ height: "100%" }}>
                <div className="card-body">
                  <div className="flex items-center gap-2">
                    <h5 className="text-2xl font-semibold my-auto">
                      United Kingdom
                    </h5>
                    <img
                      src="https://img.icons8.com/?size=512&id=15534&format=png"
                      className="h-[30px]"
                      alt=""
                    />
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/building.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Company Name :</strong> Trackon Canada Private
                        Limited
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/address.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Address :</strong> Brunel House ,15th Floor , 2
                        Fitzalan Road , Cardiff CF24 0EB
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/email-open.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Email-ID :</strong>{" "}
                        <a href="mailto:help@paypenny.org">help@paypenny.org</a>{" "}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/whatsapp.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>WhatsApp :</strong> +1(825)733-0200
                      </p>
                    </div>
                  </div>
                  {/* <div className="row">
                  <div className="col-2 col-lg-1">
                  <img
                  src="https://img.icons8.com/nolan/2x/edit-user-male.png"
                  // className="w-100"
                      height={30}
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-lg-11">
                  <div className="d-flex">
                  <p>
                  <strong>Registration Number :</strong> 13791797
                  </p>
                  </div>
                  </div>
                </div> */}
            {/* <div className="row">
                  <div className="col-2 col-lg-1">
                  <img
                  src="https://img.icons8.com/nolan/2x/apple-phone.png"
                  // className="w-100"
                  height={30}
                  alt=""
                  />
                  </div>
                  <div className="col-10 col-lg-11">
                  <div className="d-flex">
                  <p>
                  {" "}
                  <strong>Phone Number :</strong> +441926350995
                  </p>
                    </div>
                    </div>
                  </div> */}
            {/* </div>
              </div>
            </div>  */}
            <div className="col-12 col-lg-6 mx-auto">
              <div className="card shadow" style={{ height: "100%" }}>
                <div className="card-body">
                  <div className="flex gap-2 items-center">
                    <h5 className="text-2xl font-semibold my-auto">Europe</h5>
                    <img
                      src="https://img.icons8.com/?size=512&id=21742&format=png"
                      className="h-[30px]"
                      alt=""
                    />
                  </div>
                  <br />

                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/whatsapp.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>WhatsApp :</strong> +1 (825) 733–0200
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/email-open.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <p>
                        <strong>Email-ID :</strong>{" "}
                        <a href="mailto:help@paypenny.org">help@paypenny.org</a>{" "}
                      </p>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-2 col-lg-1">
                      <img
                        src="https://img.icons8.com/nolan/2x/apple-phone.png"
                        // className="w-100"
                        height={30}
                        alt=""
                      />
                    </div>
                    <div className="col-10 col-lg-11">
                      <div className="d-flex">
                        <p>
                          {" "}
                          <strong>Phone Number :</strong> +441926350995
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Container>
    </>
  );
};

export default ContactUs;
