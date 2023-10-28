import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
const AccordionComp = ({ heading, text, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#010409] pb-4 pt-2">
      <button
        className="w-full bg-transparent text-xl flex justify-between text-start font-semibold"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        <div>
          {index + 1}. {heading}
        </div>{" "}
        {open ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
      </button>
      <Collapse in={open}>
        <div
          id="example-collapse-text"
          className="text-lg text-black opacity-[0.7] mt-4">
          {text}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionComp;
