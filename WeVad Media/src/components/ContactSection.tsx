import React from "react";
import { Button } from "./ui/button";
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const YoutubeIcon = FaYoutube as unknown as React.FC<{ size?: number }>;
const LinkedinIcon = FaLinkedin as unknown as React.FC<{ size?: number }>;
const InstagramIcon = FaInstagram as unknown as React.FC<{ size?: number }>;
const WhatsAppIcon = FaWhatsapp as unknown as React.FC<{ size?: number }>;

const ContactSection = () => {
  return (
    <div
      className="relative py-12 px-4 sm:px-6 md:px-10 flex flex-col justify-end"
      style={{ backgroundColor: "#041a3e" }}
    >
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Contact Card */}
        <div className="bg-[#6E5DFC] rounded-3xl py-10 sm:py-16 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white text-2xl sm:text-3xl font-bold mb-2">Got Query?</h2>
            <p className="text-white text-base sm:text-lg font-semibold">
              For pricing, reach out to us
            </p>
          </div>
          <Button className="bg-[#39D353] text-white text-base sm:text-lg font-bold px-6 py-3 rounded-full flex items-center gap-2">
            <WhatsAppIcon size={20} /> Get In Touch
          </Button>
        </div>

        {/* Footer */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-white">
          <div className="text-xl font-bold text-center sm:text-left mb-4 sm:mb-0">
            <span className="leading-tight">WeVad</span>
            <br />
            <span className="text-xs align-top">media</span>
          </div>
          <div className="flex gap-4 text-2xl">
            <InstagramIcon />
            <YoutubeIcon />
            <LinkedinIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
