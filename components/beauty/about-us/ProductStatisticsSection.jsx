"use client";
import React from "react";
import CountUp from "react-countup";

const ProductStatisticsSection = () => {
  return (
    <div className="mavo-statistics mavo-pb-105 mavo-md-pb-15">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner mavo-md-mb-60 mavo-counter-inner1 text-center">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={10}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <>
                      <span ref={countUpRef} />
                      <span>M</span>
                    </>
                  )}
                </CountUp>
              </div>
              <h3>Masters</h3>
              <p>Lon iedo ougue bacus megon</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner mavo-md-mb-60 text-center">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={71}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </div>
              <h3>Beauty Item</h3>
              <p>Lon iedo ougue bacus megon</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner mavo-md-mb-60 text-center">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={88}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </div>
              <h3>Projects</h3>
              <p>Lon iedo ougue bacus megon</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner mavo-md-mb-60 text-center">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={20}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => (
                    <>
                      <span ref={countUpRef} />
                      <span>K</span>
                    </>
                  )}
                </CountUp>
              </div>
              <h3>Clients</h3>
              <p>Lon iedo ougue bacus megon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatisticsSection;
