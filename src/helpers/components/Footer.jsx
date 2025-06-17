"use client";

import React from "react";
import { useFormik } from "formik";
import { contactForm } from "../validation/validations";
import { TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "../therdParty/firebaseConfig";
export default function Footer() {
  // Contact component logic
  const latitude = 8.6242692;
  const longitude = 76.9686267;
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1ddummy!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzcnMjcuNCJOIDc2wrA1OCczNC42IkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`;
  
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      comment: "",
    },
    validationSchema: contactForm,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const functions = getFunctions(app);
        const sendContactEmail = httpsCallable(functions, 'sendContactEmail');
        
        await sendContactEmail(values);
        
        alert('Message sent successfully!');
        resetForm();
      } catch (error) {
        console.error('Error sending message:', error);
        alert(`Failed to send message: ${error.message}`);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="h-auto ">
      <div className=" bg-white md:py-10 py-5">
        <div className="w-full font-semibold text-4xl montserrat text-black flex justify-center items-center">
          Contact Us
        </div>
        <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="">
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  src={googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Kollummakkeyezze events location"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="h-full">
            <form
              onSubmit={formik.handleSubmit}
              className=" h-full flex flex-col gap-2"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row gap-2">
                  <div className="w-full md:w-1/2">
                    <TextField
                      fullWidth
                      size="small"
                      id="name"
                      name="name"
                      label="Name"
                      variant="outlined"
                      value={formik.values.name}
                      onChange={(e) => {
                        formik.handleChange(e);
                        if (formik.errors.name) {
                          formik.setErrors({
                            ...formik.errors,
                            name: undefined,
                          });
                        }
                      }}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      sx={{
                        "& .MuiInputBase-input": { color: "black" },
                        "& .MuiInputLabel-root": {
                          color: "black",
                          fontSize: "0.70rem",
                        },
                        "& .Mui-focused": { color: "black" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "black" },
                          height: "40px",
                        },
                      }}
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <TextField
                      fullWidth
                      size="small"
                      id="email"
                      name="email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={formik.values.email}
                      onChange={(e) => {
                        formik.handleChange(e);
                        if (formik.errors.email) {
                          formik.setErrors({
                            ...formik.errors,
                            email: undefined,
                          });
                        }
                      }}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      sx={{
                        "& .MuiInputBase-input": { color: "black" },
                        "& .MuiInputLabel-root": {
                          color: "black",
                          fontSize: "0.70rem",
                        },
                        "& .Mui-focused": { color: "black" },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "black" },
                          height: "40px",
                        },
                      }}
                    />
                  </div>
                </div>
                <TextField
                  fullWidth
                  size="small"
                  id="phone"
                  name="phone"
                  label="Phone number"
                  variant="outlined"
                  type="tel"
                  value={formik.values.phone}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.errors.phone) {
                      formik.setErrors({
                        ...formik.errors,
                        phone: undefined,
                      });
                    }
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  sx={{
                    "& .MuiInputBase-input": { color: "black" },
                    "& .MuiInputLabel-root": {
                      color: "black",
                      fontSize: "0.60rem",
                    },
                    "& .Mui-focused": { color: "black" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "black" },
                      height: "40px",
                    },
                  }}
                />
                <TextField
                  fullWidth
                  size="small"
                  id="comment"
                  name="comment"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formik.values.comment}
                  onChange={(e) => {
                    formik.handleChange(e);
                    if (formik.errors.comment) {
                      formik.setErrors({
                        ...formik.errors,
                        comment: undefined,
                      });
                    }
                  }}
                  onBlur={formik.handleBlur}
                  error={formik.touched.comment && Boolean(formik.errors.comment)}
                  sx={{
                    "& .MuiInputBase-input": { color: "black" },
                    "& .MuiInputLabel-root": {
                      color:
                        formik.errors.comment && formik.touched.comment
                          ? "red"
                          : "black",
                      fontSize: "0.60rem",
                    },
                    "& .Mui-focused": { color: "black" },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "black" },
                      minHeight: "80px",
                    },
                  }}
                />
                <button className="bg-[#624384] px-8 py-2 text-white text-xs flex justify-center items-center rounded-md mt-2">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="w-full md:px-16 px-2 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo/Kallummekkayas_Logo[1].png"
            alt="Kabunmakkajazz Logo"
            width={100}
            height={20}
            className="md:h-12 h-5 w-auto "
          />
        </Link>{" "}
        <p className="text-white md:text-xs text-[6px] text-center ">
          ©2025 Melodia Event Management. All Rights Reserved.
        </p>
        <Link href="www.fedgix.com" className="text-gray-700 text-center md:text-xs text-[6px]">
          Powered by Fedgix Technologies
        </Link>
      </div>
    </div>
  );
}