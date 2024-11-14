import { Accordion as RadixAccordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../index.css';

const Accordion = ({ items }) => {
  return (
    <RadixAccordion type="single" collapsible className="AccordionRoot">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="AccordionItem" id={`accordion-item-${index}`}>
          <AccordionTrigger className="AccordionTrigger" id={`accordion-trigger-${index}`}>
            {item.type}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="AccordionContent" id={`accordion-content-${index}`}>
            <div className="AccordionContentText">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-gray-700">{detail}</li>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </RadixAccordion>
  );
};

export default Accordion;