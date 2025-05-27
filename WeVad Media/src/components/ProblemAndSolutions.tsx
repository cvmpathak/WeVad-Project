import React from 'react';

const ProblemsAndSolutions = () => {
  return (
    <section className="text-black py-20 px-4 sm:px-6 md:px-12 lg:px-32 font-serif bg-white">
      <h2 className="text-center text-black text-3xl sm:text-4xl italic font-semibold mb-12">
        Making <br />
        <span className="not-italic font-bold">Your Life Easier</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-10 md:gap-20 ">
        {/* Problems */}
        <div className="text-black rounded-xl p-6 w-full md:w-1/2 shadow-lg bg-brand-lightred">
          <h3 className="text-2xl font-bold mb-2">The Problems you are facing</h3>
          <ul className="space-y-2 text-base list-none">
            <li>✖ Low views and stuck follower/subscriber count</li>
            <li>✖ Stress about algorithm change</li>
            <li>✖ Content curation and repurposing challenges</li>
            <li>✖ Less time for other business activities</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="text-black rounded-xl p-6 w-full md:w-1/2 shadow-lg bg-brand-lightgreen">
          <h3 className="text-2xl font-bold mb-2">The Solutions we propose</h3>
          <ul className="space-y-2 text-base list-none">
            <li>✔ Viral and shareable content</li>
            <li>✔ Storytelling for emotional connection</li>
            <li>✔ Tailored strategies to meet your unique goals</li>
            <li>✔ Real time updates and weekly meetings</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProblemsAndSolutions;
