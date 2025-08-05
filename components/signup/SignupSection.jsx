"use client";
import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// Zod schema for form validation
const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string().min(8, "Confirm password is required"),
    terms: z.literal(true, {
      errorMap: () => ({
        message: "You must agree to the terms and conditions",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const SignupSection = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toastConfig = {
    duration: 3000,
    position: "top-center",
    style: {
      background: "#000",
      color: "#fff",
      fontFamily: "var(--font-josefin-sans)",
    },
  };

  // React Hook Form setup with live validation
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
  });

  const passwordValue = watch("password") || "";

  // Password strength calculation
  const calculatePasswordStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    return score;
  };

  const strengthScore = calculatePasswordStrength(passwordValue);
  const strengthLabels = ["Weak", "Fair", "Good", "Strong"];
  const strengthColors = [
    "text-red-500",
    "text-yellow-500",
    "text-blue-500",
    "text-green-500",
  ];

  const onSubmit = (data) => {
    toast.success("Account created successfully!", toastConfig);
    console.log("Form submitted:", data);
    reset();
  };

  return (
    <section
      className="px-4 pt-[200px] pb-[100px]"
      aria-labelledby="signup-heading"
    >
      <div className="bg-[#F2F1EC] w-full max-w-[1291px] mx-auto grid gap-4 grid-cols-1 lg:grid-cols-2 items-center rounded-xl overflow-hidden">
        {/* Left Image */}
        <div className="hidden lg:block w-full h-full">
          <Image
            width={1000}
            height={1000}
            quality={100}
            src="/login-img/model-1.jpg"
            alt="Decorative image of a model"
            className="w-full h-full object-cover block"
          />
        </div>

        {/* Form */}
        <div className="p-4 lg:!pl-0 flex flex-col gap-4">
          <h1 id="signup-heading" className="!text-3xl font-marcellus">
            Create An Account
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="font-josefin-sans w-full flex flex-col items-start gap-4 text-black">
              {/* Name */}
              <div className="flex flex-col sm:flex-row w-full items-center justify-between gap-4">
                {/* First Name */}
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="First name"
                      {...register("firstName")}
                      autoComplete="given-name"
                      className={`bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] !pr-8 rounded !text-[16px] lg:!text-[18px] ${
                        errors.firstName ? "border border-red-500" : ""
                      }`}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 right-3">
                      <Image
                        width={100}
                        height={100}
                        src="/login-img/avatar.png"
                        alt=""
                        className="w-[14px] h-full object-cover"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="w-full">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Last name"
                      {...register("lastName")}
                      autoComplete="family-name"
                      className={`bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] !pr-8 rounded !text-[16px] lg:!text-[18px] ${
                        errors.lastName ? "border border-red-500" : ""
                      }`}
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 right-3">
                      <Image
                        width={100}
                        height={100}
                        src="/login-img/avatar.png"
                        alt=""
                        className="w-[14px] h-auto object-cover block"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="w-full">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    {...register("email")}
                    autoComplete="email"
                    className={`bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] !pr-8 rounded !text-[16px] lg:!text-[18px] ${
                      errors.email ? "border border-red-500" : ""
                    }`}
                  />
                  <span className="absolute top-1/2 -translate-y-1/2 right-3">
                    <Image
                      width={100}
                      height={100}
                      src="/login-img/email.png"
                      alt=""
                      className="w-[16px] h-auto object-cover block"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div className="w-full">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    {...register("password")}
                    autoComplete="new-password"
                    className={`bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] !pr-8 rounded !text-[16px] lg:!text-[18px] ${
                      errors.password ? "border border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute top-1/2 -translate-y-1/2 right-3 ${
                      showPassword ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/login-img/eye.png"
                      alt=""
                      className="w-[16px] h-auto object-cover block"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}

                {/* Password Strength Meter */}
                {passwordValue && (
                  <div className="mt-2">
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                      <div
                        className={`h-full bg-[#c9a96b]`}
                        style={{ width: `${(strengthScore / 4) * 100}%` }}
                      ></div>
                    </div>
                    <p
                      className={`text-sm mt-1 ${
                        strengthColors[strengthScore - 1] || "text-gray-500"
                      }`}
                    >
                      {strengthLabels[strengthScore - 1] || "Too Short"}
                    </p>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="w-full">
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                    autoComplete="new-password"
                    className={`bg-white placeholder:!text-gray-400 w-full px-3 py-[14px] !pr-8 rounded !text-[16px] lg:!text-[18px] ${
                      errors.confirmPassword ? "border border-red-500" : ""
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className={`absolute top-1/2 -translate-y-1/2 right-3 ${
                      showConfirmPassword ? "opacity-100" : "opacity-50"
                    }`}
                  >
                    <Image
                      width={100}
                      height={100}
                      src="/login-img/eye.png"
                      alt=""
                      className="w-[16px] h-auto object-cover block"
                    />
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-center gap-2">
                <input type="checkbox" id="terms" {...register("terms")} />
                <label htmlFor="terms">
                  I agree to the{" "}
                  <a href="/terms" className="font-semibold">
                    terms and conditions
                  </a>
                </label>
              </div>
              {errors.terms && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.terms.message}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={!isValid}
                className={`bg-black w-full text-white py-[10px] rounded !text-[18px] ${
                  !isValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
