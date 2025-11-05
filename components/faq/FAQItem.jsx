import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Icon from "../Icon";
import { ChevronDown } from "lucide-react";

export default function FAQItem({ id, question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const answerId = `${id}-answer`;
  const questionId = `${id}-question`;

  return (
    <div className="faq-item border-b border-gray-200 last:border-b-0">
      <button
        id={questionId}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 px-0 font-medium text-gray-900"
        aria-expanded={isOpen}
        aria-controls={answerId}
      >
        <span className="flex justify-between items-center">
          <span>{question}</span>
          <span
            className={`transform transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <Icon name="ChevronDown" />
          </span>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            className="text-gray-700 text-sm leading-relaxed overflow-hidden"
            role="region"
            aria-labelledby={questionId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <p className="py-4 max-w-[50ch] !text-gray-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
