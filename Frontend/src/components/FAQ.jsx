import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className={`overflow-hidden transition-all duration-300 ${
      isOpen ? 'bg-indigo-50/50 rounded-2xl' : 'bg-white'
    }`}>
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between px-6 py-5 text-left focus:outline-none group"
      >
        <span className={`text-lg font-semibold transition-colors duration-300 ${
          isOpen ? 'text-indigo-600' : 'text-gray-800'
        } group-hover:text-indigo-500`}>
          {question}
        </span>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
          isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-gray-100 text-gray-400'
        } group-hover:bg-indigo-100 group-hover:text-indigo-600`}>
          <ChevronDown className="h-5 w-5" />
        </div>
      </button>

      <div className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
        isOpen ? 'grid-rows-[1fr] opacity-100 mb-4' : 'grid-rows-[0fr] opacity-0'
      }`}>
        <div className="overflow-hidden px-6">
          <p className="text-gray-600 leading-relaxed pb-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is SkillTrix really free to join?",
      answer: "Yes! SkillTrix offers a free tier that allows you to start learning core concepts immediately. Our mission is to democratize high-quality tech education."
    },
    {
      question: "Do I need prior programming experience?",
      answer: "Not at all. We have courses ranging from absolute beginner to advanced levels. Our 'Foundations' series is specifically designed for those with zero coding background."
    },
    {
      question: "How does the free internship program work?",
      answer: "Top-performing students are eligible for our partner internship programs. You'll work on real-world projects with industry mentors to gain practical experience."
    },
    {
      question: "What's the time commitment required?",
      answer: "Our courses are self-paced, but we recommend dedicating at least 10-15 hours per week to make consistent progress and complete projects on time."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes, upon successful completion of a course and its final project, you will receive a verified SkillTrix certificate that you can share on LinkedIn."
    },
    {
      question: "What kind of job support do you provide?",
      answer: "We offer resume reviews, mock interviews, and access to our exclusive job board where partner companies post openings directly for SkillTrix graduates."
    },
    {
      question: "Can I switch courses after enrolling?",
      answer: "Absolutely. You can explore different paths to find what suits you best. Your progress in shared modules will be saved across courses."
    },
    {
      question: "How updated is the curriculum?",
      answer: "Our curriculum is reviewed quarterly by industry experts to ensure we're teaching the latest versions of frameworks and current industry best practices."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full uppercase tracking-wider mb-4 border border-indigo-100">
            FAQ
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about SkillTrix to jumpstart your career.
          </p>
        </div>

        <div className="bg-[#f8fafc] rounded-3xl p-3 sm:p-6 space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
