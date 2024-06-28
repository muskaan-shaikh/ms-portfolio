"use client";
import React, { useState } from "react";
import Layout from "@/components/Layout";
import Button from "../components/Button";
import { FaCheckCircle } from "react-icons/fa";

export default function Contact() {
  const [data, setData] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await fetch("https://formspree.io/f/mblrrqop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setData({ email: "", message: "" });
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Layout id="contact" title="Contact">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-primary mb-2">Let&apos;s Talk!</h3>
        <p className="mb-10">
          Send me a message and I will get back to you soon
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            value={data.email}
            required
            onChange={handleChange}
            className="
            w-full 
            h-10 
            p-3 
            bg-secondary 
            text-text 
            border 
            border-primary
            rounded-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-primary
            placeholder-text
            resize-none
            mb-8
        "
          />
          <textarea
            rows={10}
            cols={80}
            placeholder="Enter your message"
            name="message"
            required
            value={data.message}
            onChange={handleChange}
            className="
            w-full 
            h-32 
            p-3 
            bg-secondary 
            text-text 
            border 
            border-primary
            rounded-lg 
            focus:outline-none 
            focus:ring-2 
            focus:ring-primary
            placeholder-text
            resize-none
            mb-16
        "
          ></textarea>

          <Button variant="outlined" type="submit">
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0010 10v-4a6 6 0 01-6-6H2z"
                  ></path>
                </svg>
                Sending...
              </div>
            ) : submitted ? (
              <div className="flex justify-center items-center">
                <FaCheckCircle className="mr-3"/>
                Submitted!
              </div>
            ) : (
              "Send Message"
            )}
          </Button>
        </form>
      </div>
    </Layout>
  );
}
