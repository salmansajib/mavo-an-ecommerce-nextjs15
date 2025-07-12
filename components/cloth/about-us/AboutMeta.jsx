"use client";
import React from "react";
import CountUp from "react-countup";

const AboutMeta = () => {
  return (
    <div className="mavo-about-meta-1 mavo-pt-115 mavo-md-pt-75 mavo-pb-95 mavo-md-pb-15">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-meta-content-area mavo-mb-40 d-flex">
              <div className="meta-tltle">
                <h2 className="size-[70px]">
                  <CountUp
                    start={0}
                    end={39}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </h2>
              </div>
              <div className="meta-dest">
                <div className="meta-name">
                  <h6 className="meta-title">Masters</h6>
                </div>
                <p>Lon iedo ougue bacus</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-meta-content-area mavo-mb-40 d-flex">
              <div className="meta-tltle">
                <h2 className="size-[70px]">
                  <CountUp
                    start={0}
                    end={49}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </h2>
              </div>
              <div className="meta-dest">
                <div className="meta-name">
                  <h6 className="meta-title">Clothing</h6>
                </div>
                <p>Lon iedo ougue bacus</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-meta-content-area mavo-mb-40 d-flex">
              <div className="meta-tltle">
                <h2 className="size-[70px]">
                  <CountUp
                    start={0}
                    end={69}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </h2>
              </div>
              <div className="meta-dest">
                <div className="meta-name">
                  <h6 className="meta-title">Projects</h6>
                </div>
                <p>Lon iedo ougue bacus</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-meta-content-area mavo-mb-40 d-flex">
              <div className="meta-tltle">
                <h2 className="size-[70px]">
                  <CountUp
                    start={0}
                    end={79}
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  >
                    {({ countUpRef }) => <span ref={countUpRef} />}
                  </CountUp>
                </h2>
              </div>
              <div className="meta-dest">
                <div className="meta-name">
                  <h6>Clients</h6>
                </div>
                <p>Lon iedo ougue bacus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeta;
