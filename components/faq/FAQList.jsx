import FAQItem from "./FAQItem";

export default function FAQList({ faqs }) {
  return (
    <div className="space-y-0">
      {faqs.map((item) => (
        <FAQItem
          key={item.id} // Use unique ID for better React performance
          id={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
