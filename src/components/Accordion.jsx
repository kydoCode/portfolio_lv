import { Accordion as RadixAccordion, AccordionItem, AccordionTrigger, AccordionContent } from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../index.css';
import { Html5, Css3, Javascript, ReactLogo, Tailwind, Bootstrap, Php, Mysql, Nodejs, Express, Vuejs, Python, Postgresql, Nosql, Swift, Swiftui, Kanban, Scrum, Trello, Vscode, Xcode, Github, Blackbox, Copilot, Chatgpt, Linters, Figma } from 'lucide-react';

const Accordion = ({ items }) => {
  return (
    <RadixAccordion type="single" collapsible className="AccordionRoot">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`} className="AccordionItem" id={`accordion-item-${index}`}>
          <AccordionTrigger className="AccordionTrigger flex items-center justify-between p-4 bg-gray-100 border-b border-gray-200" id={`accordion-trigger-${index}`}>
            {item.type}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </AccordionTrigger>
          <AccordionContent className="AccordionContent p-4 bg-white border-b border-gray-200" id={`accordion-content-${index}`}>
            <div className="AccordionContentText">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-gray-700 flex items-center">
                  {detail.icon}
                  {detail.text}
                </li>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </RadixAccordion>
  );
};

export default Accordion;
