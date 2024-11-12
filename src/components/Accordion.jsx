import { Accordion as RadixAccordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';

const Accordion = ({ items }) => {
  return (
    <RadixAccordion type="single" collapsible>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-xl font-semibold cursor-pointer flex items-center justify-between card">
            {item.type}
          </AccordionTrigger>
          <AccordionContent className="list-disc list-inside bg-white shadow overflow-hidden sm:rounded-lg p-4">
            {item.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="text-gray-700">{detail}</li>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </RadixAccordion>
  );
};

export default Accordion;
