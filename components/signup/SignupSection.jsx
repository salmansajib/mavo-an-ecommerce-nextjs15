import React from "react";
import Image from "next/image";

const SignupSection = () => {
  return (
    <section className="px-4 pt-[200px] pb-[100px] ">
      <div className="bg-[#F2F1EC] w-full max-w-[1291px] mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2 items-center rounded-xl overflow-hidden ">
        <div className="hidden lg:block">
          <Image
            width={1000}
            height={1000}
            quality={100}
            src="/login-img/model-1.jpg"
            alt="model"
            className="w-full h-full min-h-[700px] object-cover block"
          />
        </div>

        <div className="p-4 lg:!pl-0">
          <h1 className="!text-3xl font-marcellus mb-4">Create An Account</h1>

          <form>
            <div className="font-josefin-sans w-full flex flex-col items-start gap-4">
              <div className="flex w-full items-center justify-between gap-3">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="First name"
                    className="bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] rounded !text-[18px]"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 right-3">
                    <Image
                      width={100}
                      height={100}
                      src="/login-img/avatar.png"
                      alt="avatar icon"
                      className="w-[16px] h-full object-cover"
                    />
                  </span>
                </div>

                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="last name"
                    className="bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] rounded !text-[18px]"
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 right-3">
                    <Image
                      width={100}
                      height={100}
                      src="/login-img/avatar.png"
                      alt="avatar icon"
                      className="w-[16px] h-auto object-cover block"
                    />
                  </span>
                </div>
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] rounded !text-[18px]"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3">
                  <Image
                    width={100}
                    height={100}
                    src="/login-img/email.png"
                    alt="avatar icon"
                    className="w-[16px] h-auto object-cover block"
                  />
                </span>
              </div>

              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] rounded !text-[18px]"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3">
                  <Image
                    width={100}
                    height={100}
                    src="/login-img/eye.png"
                    alt="avatar icon"
                    className="w-[16px] h-auto object-cover block"
                  />
                </span>
              </div>
              <div className="relative w-full">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] rounded !text-[18px]"
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3">
                  <Image
                    width={100}
                    height={100}
                    src="/login-img/eye.png"
                    alt="avatar icon"
                    className="w-[16px] h-auto object-cover block"
                  />
                </span>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <span className="font-semibold">terms and conditions</span>
                </label>
              </div>

              <div className="w-full">
                <button
                  type="submit"
                  className="bg-black w-full text-white py-[10px] rounded !text-[18px]"
                >
                  Create Account
                </button>
              </div>

              <div className="w-full relative my-3">
                <div className="w-full h-[1px] bg-gray-400/50" />
                <p className="bg-black text-white rounded-full size-12 flex items-center justify-center !text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-5 border-[#F2F1EC]">
                  OR
                </p>
              </div>

              <div className="flex items-center justify-center gap-2 w-full">
                <button className="size-[50px] border text-white hover:text-[#7a7a7a]  bg-black !border-[#c6c6c6] flex items-center justify-center !rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1_41)">
                      <path
                        d="M0.5 7.5C0.5 3.6402 3.6402 0.5 7.5 0.5C9.05887 0.5 10.5343 1.00153 11.7669 1.9504L10.1403 4.06347C9.37813 3.4768 8.46513 3.16667 7.5 3.16667C5.1106 3.16667 3.16667 5.1106 3.16667 7.5C3.16667 9.8894 5.1106 11.8333 7.5 11.8333C9.42447 11.8333 11.0599 10.5725 11.6235 8.83333H7.5V6.16667H14.5V7.5C14.5 11.3598 11.3598 14.5 7.5 14.5C3.6402 14.5 0.5 11.3598 0.5 7.5Z"
                        fill="currentColor"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_41">
                        <rect
                          width="14"
                          height="14"
                          fill="white"
                          transform="translate(0.5 0.5)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
                <button className="size-[50px] border text-[#7a7a7a] hover:text-white hover:bg-black !border-[#c6c6c6] flex items-center justify-center !rounded-full">
                  <svg
                    width="9"
                    height="15"
                    viewBox="0 0 9 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.82663 8.40238C2.77406 8.40238 1.61762 8.40238 1.09196 8.40238C0.811609 8.40238 0.723999 8.29725 0.723999 8.03442C0.723999 7.33354 0.723999 6.61514 0.723999 5.91427C0.723999 5.63392 0.82913 5.54631 1.09196 5.54631H2.82663C2.82663 5.49374 2.82663 4.47747 2.82663 4.00438C2.82663 3.3035 2.94928 2.63767 3.29972 2.02441C3.66768 1.39362 4.19334 0.973091 4.85917 0.727785C5.29722 0.570087 5.73526 0.5 6.20835 0.5H7.9255C8.17081 0.5 8.27594 0.605131 8.27594 0.850438V2.84793C8.27594 3.09324 8.17081 3.19837 7.9255 3.19837C7.45241 3.19837 6.97932 3.19837 6.50623 3.21589C6.03314 3.21589 5.78783 3.44368 5.78783 3.93429C5.77031 4.45995 5.78783 4.96808 5.78783 5.51126H7.82037C8.10072 5.51126 8.20585 5.6164 8.20585 5.89675V8.0169C8.20585 8.29725 8.11824 8.38486 7.82037 8.38486C7.18958 8.38486 5.84039 8.38486 5.78783 8.38486V14.097C5.78783 14.3949 5.70022 14.5 5.38482 14.5C4.64891 14.5 3.93051 14.5 3.19459 14.5C2.93176 14.5 2.82663 14.3949 2.82663 14.132C2.82663 12.2922 2.82663 8.45494 2.82663 8.40238Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="size-[50px] border text-[#7a7a7a] hover:text-white hover:bg-black !border-[#c6c6c6] flex items-center justify-center !rounded-full">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9006 14.9012V9.47981C14.9006 6.81537 14.327 4.78003 11.2185 4.78003C9.7197 4.78003 8.72054 5.59417 8.31347 6.37129H8.27646V5.02057H5.33447V14.9012H8.40598V9.9979C8.40598 8.70268 8.64652 7.46298 10.2378 7.46298C11.8106 7.46298 11.8291 8.92472 11.8291 10.0719V14.8827H14.9006V14.9012Z"
                      fill="currentColor"
                    />
                    <path
                      d="M0.342163 5.02057H3.41367V14.9012H0.342163V5.02057Z"
                      fill="currentColor"
                    />
                    <path
                      d="M1.87578 0.0987549C0.89512 0.0987549 0.0994873 0.894387 0.0994873 1.87505C0.0994873 2.85571 0.89512 3.66985 1.87578 3.66985C2.85645 3.66985 3.65208 2.85571 3.65208 1.87505C3.65208 0.894387 2.85645 0.0987549 1.87578 0.0987549Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <button className="size-[50px] text-[#7a7a7a] hover:text-white border hover:bg-black  !border-[#c6c6c6] flex items-center justify-center !rounded-full">
                  <svg
                    width="11"
                    height="15"
                    viewBox="0 0 11 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.54593 2.62772C8.07272 2.06376 8.42904 1.28078 8.33151 0.5C7.57258 0.527084 6.65278 0.945493 6.10803 1.50941C5.6197 2.00864 5.19217 2.80651 5.30627 3.57197C6.15312 3.62926 7.01827 3.19077 7.54593 2.62772ZM9.16218 8.01979C9.146 6.26937 10.548 5.42866 10.6101 5.38803C9.8219 4.19936 8.59433 4.03672 8.15714 4.01837C7.11187 3.90864 6.11903 4.65139 5.58835 4.65139C5.05982 4.65139 4.24231 4.03278 3.37538 4.04939C2.2357 4.06817 1.18557 4.73182 0.600236 5.78363C-0.583679 7.89959 0.29679 11.0341 1.45045 12.7504C2.01441 13.5906 2.68589 14.5332 3.56766 14.4991C4.41884 14.465 4.73971 13.933 5.76665 13.933C6.79401 13.933 7.08166 14.4991 7.98047 14.4821C8.89504 14.465 9.47384 13.6256 10.033 12.7828C10.68 11.8083 10.9467 10.8649 10.962 10.8173C10.9423 10.8059 9.18096 10.113 9.16218 8.01979Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
