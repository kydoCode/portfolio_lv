import React from 'react';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../index.css';

const Accordion = ({ items }) => {
  return (
    <RadixAccordion.Root type="single" collapsible className="AccordionRoot">
      {items.map((item, index) => (
        <RadixAccordion.Item key={index} value={`item-${index}`} className="AccordionItem" id={`accordion-item-${index}`}>
          <RadixAccordion.Trigger className="AccordionTrigger flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200" id={`accordion-trigger-${index}`}>
            {item.type}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </RadixAccordion.Trigger>
          <RadixAccordion.Content className="AccordionContent p-4 bg-white border-b border-gray-200" id={`accordion-content-${index}`}>
            <div className="AccordionContentText">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-gray-700 flex items-center">
                  {detail.icon}
                  {detail.text}
                </li>
              ))}
            </div>
          </RadixAccordion.Content>
        </RadixAccordion.Item>
      ))}
    </RadixAccordion.Root>
  );
};

export default Accordion;