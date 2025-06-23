// import React from 'react';
// import './customStyles.css'; // Import the custom CSS file

const RadioButtons = () => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="metalColor"
          value="gold"
          required
          className="sr-only" // sr-only is Tailwind utility to hide the element visually but keep it accessible
        />
        <span className="custom-radio-label">Gold</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="metalColor"
          value="silver"
          required
          className="sr-only"
        />
        <span className="custom-radio-label">Silver</span>
      </label>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          name="metalColor"
          value="platinum"
          required
          className="sr-only"
        />
        <span className="custom-radio-label">Platinum</span>
      </label>
    </div>
  );
};

export default RadioButtons;