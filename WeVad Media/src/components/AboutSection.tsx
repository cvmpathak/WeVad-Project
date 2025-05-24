import { Button } from './ui/button';
import { ArrowUpRight, Sparkles, Droplet, BadgePlus } from 'lucide-react';

const AboutSection = () => {
  return (
    <div className="bg-white min-h-screen px-6 py-12 md:px-10 md:py-10 font-sans bg-brand-blue">
      <div className="max-w-5xl mx-auto text-white">
        <p className="text-lg font-medium mb-2">About</p>
        <h1 className="text-5xl font-bold mb-6">Hariom Pathak</h1>
        <h2 className="text-xl font-semibold mb-4">Branding Strategist, Self-Growth Coach & a Storyteller</h2>
        <p className=" mb-4">
          I made a bold decision to leave my high-paying consulting job at Accenture
          to pursue something I really love - adding value to people's lives through
          content creation.
        </p>
        <p className=" mb-6">
          I've spent four years growing my own personal brand from scratch to over
          750k+ community. I know how to make your content stand out and go viral.
          Want me to guide your inhouse team to 2x your growth? Want to build a
          strong personal brand?
        </p>

        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-4">
            <BadgePlus className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Designing Brand Identity.</span>
          </div>
          <div className="flex items-center gap-4">
            <Sparkles className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Optimizing content strategies to go viral.</span>
          </div>
          <div className="flex items-center gap-4">
            <ArrowUpRight className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Hooking audiences through storytelling.</span>
          </div>
          <div className="flex items-center gap-4">
            <Droplet className="w-6 h-6 text-purple-400" />
            <span className="text-lg">Improving engagement through call-to-action.</span>
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