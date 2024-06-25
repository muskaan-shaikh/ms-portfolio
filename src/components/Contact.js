import React from "react";
import Layout from "@/components/Layout";
import Button from "../components/Button";

export default function Contact() {
  return (
    <Layout id="contact" title="Contact">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-primary mb-2">Let&apos;s Talk!</h3>
        <p className="mb-5">Send me a message and I will get back soon</p>
        <textarea
          rows={10}
          cols={80}
          placeholder="Enter your message"
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
            mb-10
        "
        ></textarea>

        <Button variant="outlined">Send Message</Button>
      </div>
    </Layout>
  );
}
