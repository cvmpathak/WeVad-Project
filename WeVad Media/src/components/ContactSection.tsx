import React from "react";
import { Button } from "./ui/button";
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";

const YoutubeIcon = FaYoutube as unknown as React.FC<{ size?: number }>;
const LinkedinIcon = FaLinkedin as unknown as React.FC<{ size?: number }>;
const InstagramIcon = FaInstagram as unknown as React.FC<{ size?: number }>;
const WhatsAppIcon = FaWhatsapp as unknown as React.FC<{ size?: number }>;
const ContactSection = () => {
  return (
    <div className="relative h-[400px] flex flex-col justify-end"
    style={{ backgroundColor: '#041a3e' }}>
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="bg-[#6E5DFC] rounded-3xl pt-40 flex flex-col md:flex-row items-center justify-between">
          <div>
            <h2 className="text-white text-3xl font-bold mb-2">Got Query?</h2>
            <p className="text-white text-lg font-semibold">
              For pricing, Reach out to us
            </p>
          </div>
          <Button className="bg-[#39D353] text-white text-lg font-bold px-6 py-3 rounded-full flex items-center gap-2 mt-4 md:mt-0">
            <WhatsAppIcon size={22} /> Get In Touch
          </Button>
        </div>
      </div>

      <div className="relative z-10 mt-6 mb-4  flex justify-between items-center w-full max-w-6xl mx-auto">
        <div className="text-white font-bold text-xl">
          <span className="leading-tight">WeVad</span>
          <br />
          <span className="text-[10px] align-top">media</span>
        </div>
        <div className="flex gap-4 text-white text-2xl">
          <InstagramIcon />
          <YoutubeIcon />
          <LinkedinIcon />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;