import { Button } from './ui/button';
import { ArrowUpRight, Sparkles, Droplet, BadgePlus } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-0 md:px-10 font-sans bg-brand-blue py-20">
      <div className="max-w-7xl mx-auto text-white">
        <p className="text-lg font-medium mb-2">About</p>
        <h1 className="text-5xl font-bold mb-6">Hariom Pathak</h1>
        <h2 className="text-xl font-semibold mb-4">Growth Architect, Creator Mentor & Brand Story Strategist</h2>
        <p className=" mb-4">
          I didn’t come from a fancy corporate background or a high-paying MNC job. I built everything from the ground up—with curiosity, consistency, and a commitment to impact.
        </p>
        <p className=" mb-6">
          I started by experimenting with content, driven by a passion to communicate ideas that truly help people. Over time, that passion turned into a powerful personal brand—today, I’ve built a thriving community of over 10k+ followers who trust and engage with my work.
        </p>
        <p className=" mb-6">
          Now, I help creators, entrepreneurs, and in-house teams do the same—grow faster, connect deeper, and stand out with a story that sticks.
        </p>

        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-4">
            <BadgePlus className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Crafting compelling brand identities that speak for themselves</span>
          </div>
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Engineering content strategies that are built to go viral</span>
          </div>
          <div className="flex items-center gap-4">
            <ArrowUpRight className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Capturing attention with storytelling that hooks instantly</span>
          </div>
          <div className="flex items-center gap-4">
            <Droplet className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Boosting engagement with smart, action-driven messaging</span>
          </div>
        </div>

        <Button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:bg-green-600">
          Chat with me!
        </Button>
      </div>
    </div>
  );
};

export default AboutSection;