import { useState } from "react";
import useOutsideClick from "../hooks/OutsideClick";
import "./dropdown.css";

export const DropdownCustom = ({
  options,
  onSelect,
  selectedOption,
  setSelectedOption,
  dropDown,
  isImage = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const outsideClickRef = useOutsideClick(() => setIsOpen(false));

  const handleOptionClick = (option) => {
    if (setSelectedOption) {
      setSelectedOption(option);
    }
    onSelect(option.value);
    setIsOpen(false);
  };
  const toggleDropdown = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div
      ref={outsideClickRef}
      className="drop_box_main"
      style={{ position: "relative", width: "fit-content" }}
    >
      <div
        className="drop_box"
        onClick={toggleDropdown}
        style={{ cursor: "pointer" }}
      >
        {selectedOption ? selectedOption.label : "Select an option"}
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M5.575 0.224902C5.44167 0.224902 5.31267 0.249903 5.188 0.299903C5.06267 0.349903 4.95833 0.416569 4.875 0.499903L0.275 5.0999C0.0916663 5.28324 0 5.51657 0 5.7999C0 6.08324 0.0916663 6.31657 0.275 6.4999C0.458333 6.68324 0.691667 6.7749 0.975 6.7749C1.25833 6.7749 1.49167 6.68324 1.675 6.4999L5.575 2.5999L9.475 6.4999C9.65833 6.68324 9.89167 6.7749 10.175 6.7749C10.4583 6.7749 10.6917 6.68324 10.875 6.4999C11.0583 6.31657 11.15 6.08324 11.15 5.7999C11.15 5.51657 11.0583 5.28324 10.875 5.0999L6.275 0.499903C6.175 0.399903 6.06667 0.329236 5.95 0.287903C5.83333 0.245903 5.70833 0.224902 5.575 0.224902Z"
                fill="#5A616A"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
            >
              <path
                d="M5.575 0.224902C5.44167 0.224902 5.31267 0.249903 5.188 0.299903C5.06267 0.349903 4.95833 0.416569 4.875 0.499903L0.275 5.0999C0.0916663 5.28324 0 5.51657 0 5.7999C0 6.08324 0.0916663 6.31657 0.275 6.4999C0.458333 6.68324 0.691667 6.7749 0.975 6.7749C1.25833 6.7749 1.49167 6.68324 1.675 6.4999L5.575 2.5999L9.475 6.4999C9.65833 6.68324 9.89167 6.7749 10.175 6.7749C10.4583 6.7749 10.6917 6.68324 10.875 6.4999C11.0583 6.31657 11.15 6.08324 11.15 5.7999C11.15 5.51657 11.0583 5.28324 10.875 5.0999L6.275 0.499903C6.175 0.399903 6.06667 0.329236 5.95 0.287903C5.83333 0.245903 5.70833 0.224902 5.575 0.224902Z"
                fill="#5A616A"
              />
            </svg>
          )}
        </span>
      </div>
      {isOpen && (
        <ul className="drop_list">
          {options.map((option) => (
            <li
              key={option.value}
              className={`${
                selectedOption?.value === option.value ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              <h4>{option.label}</h4>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
