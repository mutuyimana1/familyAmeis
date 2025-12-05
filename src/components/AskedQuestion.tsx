'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
const AskedQuestion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "What kind of therapy services do you offer?",
      answer:
        "We provide a range of therapy services, including individual, couples, and group therapy sessions tailored to your needs.",
    },
    {
      question: "Do you offer online therapy options?",
      answer:
        "Yes, we provide secure online therapy sessions via video calls for your convenience.",
    },
    {
      question: "How can I schedule an appointment?",
      answer:
        "You can schedule an appointment through our website or by calling our front desk.",
    },
    {
      question: "Are your services covered by insurance?",
      answer:
        "Many of our services are covered by insurance. Please contact us or your provider to verify coverage.",
    },
    {
      question: "Do you offer specialized therapy for specific issues?",
      answer:
        "Yes, we have specialists for anxiety, depression, trauma, and more.",
    },
    {
      question: "Can I choose my therapist?",
      answer:
        "Absolutely! We’ll help you find a therapist that fits your needs.",
    },
  ];
  return (
    <div>
      <section className="px-6 sm:px-20 md:px-32 lg:px-42 xl:px-52 mx-auto p-6 mt-5">
        <h2 className="text-3xl font-bold text-center mb-8">Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                className="w-full text-left flex justify-between items-center font-medium text-lg"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>
                  {activeIndex === index ? <ChevronUp /> : <ChevronDown />}
                </span>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-2 text-gray-400">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AskedQuestion;
