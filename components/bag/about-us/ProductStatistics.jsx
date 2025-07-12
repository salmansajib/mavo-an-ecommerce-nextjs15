"use client";
import React from "react";
import CountUp from "react-countup";

const ProductStatistics = () => {
  return (
    <div className="mavo-statistics bag text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={10}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                <span>K+</span>
              </div>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={21}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
                <span>K+</span>
              </div>
              <p>Monthle Backpackn</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={39}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </div>
              <p>Bag Manufacturers</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="mavo-counter-inner">
              <div className="sc-count">
                <CountUp
                  start={0}
                  end={21}
                  duration={3}
                  enableScrollSpy
                  scrollSpyOnce
                >
                  {({ countUpRef }) => <span ref={countUpRef} />}
                </CountUp>
              </div>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductStatistics;
