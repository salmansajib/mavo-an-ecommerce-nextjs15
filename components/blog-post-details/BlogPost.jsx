"use client";
import React, { useState } from "react";
import Link from "next/link";

// Main BlogPost component
const BlogPost = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (name.trim() && email.trim() && message.trim()) {
      console.log("Comment submitted:", formData);
    } else {
      console.log("Please fill in all required fields.");
    }
  };

  return (
    <div className="mavo-single-1 mavo-pt-120 mavo-md-pt-75 mavo-pb-135">
      <div className="container">
        <div className="mavo-post-block-single">
          {/* Blog Content Section */}
          <div className="max-width-850">
            <p className="paragraph mavo-mb-35">
              <span>M</span>inus dictumst porta aliquam quisque posuere maecenas
              ullamco. Sagittis ratione doloremque eligendi holer atque in duis
              convallis varius asperiores nulla per morbi pellentesque curae
              soluta lobortis inventore ovarn molestias taciti diam possimus,
              lobortis luctus cum esse unde malesuada sociosqu enim
              exercitationem magna.
            </p>
            <p className="mavo-mb-30">
              Commodi varius pellentesque aperiam elementum, corporis itaque
              nisi id aliquid hic ullam. Nec lobortis, urna posuere bibendum
              ullamcorper dapibus scelerisque nibh auctor senectus eaque alias
              mollis nobis eius neque habitant rutrum elit similique
              voluptatibus nostra diam quaerat acgravida purus.
            </p>
            <h4 className="mavo-mb-25">Your Imagination, Our Product</h4>
            <p className="mavo-mb-45">
              Aptent corporis perspiciatis occaecati turpis eiusmod pede
              inventore elit ex consectetuer posuere eiusmod nostra ouse
              nascetur quaerat taciti primis porta dignissim. Taciti eiusmod
              occaecat vehicula exercitation convallis arcu magni lobortis
              elementum, vel vestibulum meprehenderit bibendum culpa dolore
              blandit optio.
            </p>
          </div>

          {/* Blog Images Section */}
          <div className="blog-single-post-img mavo-mb-45">
            <div className="row">
              <div className="col-lg-6 flex items-center justify-center">
                <img
                  className="mavo-md-mb-50"
                  src="/images/posts/blog-details-img-1.jpg"
                  alt="img"
                />
              </div>
              <div className="col-lg-6 flex items-center justify-center">
                <img src="/images/posts/blog-details-img-2.jpg" alt="img" />
              </div>
            </div>
          </div>

          {/* Additional Blog Content Section */}
          <div className="max-width-850">
            <p className="mavo-mb-35">
              Sommodi varius pellentesque aperiam elementum, corporis itaque
              nisi id aliquid hic ullam. Nec lobortis, urna posuere bibendum
              ullamcorper dapibus scelerisque nibh auctor senectus eaque alias
              mollis nobis eius neque habitant rutrum elit similique
              voluptatibus nostra diam quaerat acgravida purus.
            </p>
            <p className="mavo-mb-35">
              Omnis similique dignissimos earum, odit cum temporibus eu saepe
              occaecati id inventore fringilla, vivamus rerum nostrud,
              condimentum rutrum facere sociis sed ridiculus parturient
              exercitationem luctus primis, pellentesque, optionre porttitor sed
              ridiculus parturient eleifend, vero lectus orci tellus voluptatum
              dignissim.
            </p>
            <p className="mavo-mb-45">
              Accumsan enim nobis qui delectus pharetra eius hymenaeos habitasse
              omnis explicabo dis laoreet perferendis ratione voluptatem minim
              aliqua malesuada maxime ducimus incididunt gravida corporis aute
              tristique magnis posuere eius repellat imperdiet. Adipisci
              voluptatum nullam consectetur explicabo fugiat ante arcu
              voluptatum Quisque veritatis cursus ex mauris ipsam incididunt
              primis, excepteur pharetra primis luctus.
            </p>

            {/* Testimonial Section */}
            <div className="mavo-single-testimonials mavo-mb-40">
              <div className="testimonial-wrapper">
                <div className="testimonial-author mavo-mb-20">
                  <span className="auother-border">
                    <img src="/images/icons/quote.png" alt="quote" />
                  </span>
                  <span className="author-sub-title"> By Mrickly Moore</span>
                </div>
                <p className="testimonial-desc">
                  Repellat dolor arcu vivamus, dolor mollit aliquet assumenda
                  nemo nora vehicula natoque accusamus, volutpat, eu impedit.
                </p>
              </div>
            </div>

            <h4 className="mavo-mb-35">Best Seller</h4>
            <p className="mavo-mb-45">
              Aptent corporis perspiciatis occaecati turpis eiusmod pede
              inventore elit ex consectetuer posuere eiusmod nostra ouse
              nascetur quaerat taciti primis porta dignissim. Taciti eiusmod
              occaecat vehicula exercitation convallis arcu magni lobortis
              elementum, vel vestibulum meprehenderit bibendum culpa dolore
              blandit optio.
            </p>

            {/* Product Image Section */}
            <div className="blog-single-post-img mavo-mb-30 flex flex-col items-center">
              <img src="/images/posts/blog-product-1.jpg" alt="product" />
              <p className="mavo-mt-15">
                Producing the highest quality products
              </p>
            </div>

            <p>
              Porro magnis do dictum molestiae, repellendus assumenda imperdiet?
              Placerat, doloremque totam officia cursus eveniet reiciendis minus
              architecto eos, beatae, eum fames quisque perferendis ad blandit
              magnis mattis! Torquent officiis ac auctor vel ullam nullam massa
              aenean, vulputate tempore orci vel excepturi volutpat placerat
              platea deserunt pulvinar metus curae, doloribus, mus, iste dolor
              litora venenatis. Aspernatur, condimentum quia ullamcorper? Sociis
              semper, do nemo donec, ipsa ducimus asperiores facilisis, quisque,
              phasellus dui fugit gravida? Diam tempora, corrupti, fuga? Laoreet
              arcu eaque incididunt taciti! Malesuada vel distinctio. Provident
              purus quo expedita sit minim, sequi facilisis potenti. Malesuada,
              repudiandae sollicitudin. Quae dolor tempor viverra.
            </p>
          </div>

          {/* Tags and Social Share Section */}
          <div className="max-width-850">
            <div className="blog-single-tags mavo-mt-60 mavo-pb-40">
              <div className="single-tag mavo-mb-20">
                <span>Tags:</span>
                <Link href="/shoes">#shoe,</Link>
                <Link href="/cloth">#fashion,</Link>
                <Link href="/beauty">#beauty,</Link>
                <Link href="/shoes">#heels</Link>
              </div>
              <div className="blog-social-tag flex items-center">
                <span>Share:</span>
                <div className="!space-x-2">
                  <button>
                    <i className="flaticon-facebook-app-symbol"></i>
                  </button>
                  <button>
                    <i className="flaticon-instagram-1"></i>
                  </button>
                  <button>
                    <i className="flaticon-twitter"></i>
                  </button>
                  <button>
                    <i className="flaticon-pinterest-circular-logo-symbol"></i>
                  </button>
                  <button>
                    <i className="flaticon-youtube"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Blog Navigation Section */}
            <div className="blog_text mavo-mt-35 mavo-mb-45 d-flex align-items-center justify-content-between">
              <div className="blog-1">
                What's the main challenge for bleached heels?
              </div>
              <div className="blog-1">
                The heels we're living in right now your own side.
              </div>
            </div>

            {/* Related Articles Section */}
            {/* <div className="mavo-post-2 shoes">
              <h4 className="title text-center mavo-mb-40">Related Articles</h4>
              <div className="row">
                <div className="col-lg-6">
                  <div className="mavo-post-single">
                    <div className="mavo-post-img">
                      <img src="/images/posts/posts-2.1.jpg" alt="Posts" />
                      <div className="mavo-post-date">
                        <span>Sep 26, 2022</span>
                      </div>
                    </div>
                    <div className="mavo-post-info">
                      <div className="mavo-post-category text-uppercase">
                        Fashion, Trends
                      </div>
                      <h5 className="mavo-mb-20">
                        <a className="mavo-post-title" href="#">
                          {" "}
                          What's the main challenge for bleached heels?
                        </a>
                      </h5>
                      <div className="mavo-post-tead-more">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mavo-post-single">
                    <div className="mavo-post-img">
                      <img src="/images/posts/posts-2.2.jpg" alt="Posts" />
                      <div className="mavo-post-date">
                        <span>Sep 26, 2022</span>
                      </div>
                    </div>
                    <div className="mavo-post-info">
                      <div className="mavo-post-category text-uppercase">
                        Fashion, Trends
                      </div>
                      <h5 className="mavo-mb-20">
                        <a className="mavo-post-title" href="#">
                          {" "}
                          Pop sugar how to clean your sneakers according?
                        </a>
                      </h5>
                      <div className="mavo-post-tead-more">
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Author Testimonial Section */}
            <div className="blog-testimonial mavo-mt-35 mavo-mb-60">
              <div className="testimonial-img">
                <img src="/images/posts/testimonial-img.jpg" alt="img" />
              </div>
              <div className="testimonial-info">
                <div className="author-name">
                  <h5 className="auother-title">Boed Rankin</h5>
                  <p>Verified Author</p>
                </div>
                <p className="testimonial-desc">
                  Luctus nisi mauris, delectus nesciunt commodo ullam sociis,
                  habitant ratione amet, vehicula, augue, fugiat cumque rhoncus,
                  dictumst quisquam sit sem tortor, accusamus aspernatur rem
                  onsequatur optio earum mollit luctus est hic purus sapien.
                </p>
                <div className="blog-social-tag">
                  <ul>
                    <li>
                      <button>
                        <i className="flaticon-facebook-app-symbol"></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-instagram-1"></i>
                      </button>
                    </li>
                    <li>
                      <button>
                        <i className="flaticon-twitter"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="mavo-comment-list">
              <h4 className="mavo-comment-heading mavo-mb-50">3 Comments</h4>
              <div className="blog-comment-content">
                <ul>
                  <li>
                    <article className="mavo-comment-single d-flex mavo-mb-20">
                      <div className="comment-img">
                        <img
                          src="/images/posts/comment-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="mavo-comment-body">
                        <div className="mavo-comment-meta">
                          <div>
                            <h3 className="mavo-comment-title">Hazel Farah</h3>
                            <span className="comment-date"> 2 days ago</span>
                          </div>
                          <button className="comment-reply">Reply</button>
                        </div>
                        <p className="comment-desc">
                          Litora praesentium incididunt hymenaeos ullamco metus
                          parturient eaque justo pede adipisicing nesciunt,
                          viverra dicta nullam. Dignissimos nisi, placeat nec
                          quibusdam laboris.
                        </p>
                      </div>
                    </article>
                    <ul className="children">
                      <li>
                        <article className="mavo-comment-single d-flex">
                          <div className="comment-img">
                            <img
                              src="/images/posts/comment-2.jpg"
                              alt="Author Image"
                            />
                          </div>
                          <div className="mavo-comment-body">
                            <div className="mavo-comment-meta">
                              <div>
                                <h3 className="mavo-comment-title">
                                  Breanna Malzie
                                </h3>
                                <span className="comment-date">2 days ago</span>
                              </div>
                              <button className="comment-reply">Reply</button>
                            </div>
                            <p className="comment-desc">
                              Dolores tellus habitant, ultricies tempor lacus
                              debitis sapiente, nostrud, ipsam delectus
                              consectetuer imperdiet, turpis, minima! Magnis,
                              perferendis justo lobortis adipisicing.
                            </p>
                          </div>
                        </article>
                      </li>
                    </ul>
                    <article className="mavo-comment-single d-flex mavo-mt-45 mavo-mb-40">
                      <div className="comment-img">
                        <img
                          src="/images/posts/comment-1.jpg"
                          alt="Author Image"
                        />
                      </div>
                      <div className="mavo-comment-body">
                        <div className="mavo-comment-meta">
                          <div>
                            <h3 className="mavo-comment-title">Hazel Farah</h3>
                            <span className="comment-date"> 2 days ago</span>
                          </div>
                          <button className="comment-reply">Reply</button>
                        </div>
                        <p className="comment-desc">
                          Mi corporis Minim, nascetur amet error natus quae,
                          dui. Lorem imperdiet! Felis libero praesentium?
                          Semper, totam aliquip incididunt? Atque pharetra
                          luctus a reprehenderit quodentcubilia.
                        </p>
                      </div>
                    </article>
                  </li>
                </ul>
              </div>
            </div>

            {/* Comment Form Section */}
            <form className="mavo-post-comment-form p-6 bg-gray-50 rounded-lg">
              <h4 className="text-2xl font-bold !mb-8">Leave a comment</h4>
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-[#C9A96B] placeholder:!text-gray-400"
                      id="name"
                      name="name"
                      placeholder="Name*"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <input
                      type="email"
                      className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-[#C9A96B] placeholder:!text-gray-400"
                      id="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="">
                  <textarea
                    className="w-full p-3 border rounded focus:outline-none focus:ring-1 focus:ring-[#C9A96B] placeholder:!text-gray-400"
                    rows="3"
                    id="message"
                    name="message"
                    placeholder="Your comment*"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="subscribe"
                    name="subscribe"
                    className="mr-2"
                    checked={formData.subscribe}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="subscribe" className="text-gray-700">
                    I have read and agree to the Newmag Privacy Policy.
                  </label>
                </div>
                <button
                  onClick={handleSubmit}
                  className="bg-[#C9A96B] text-white px-6 py-3 rounded"
                >
                  Post Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
