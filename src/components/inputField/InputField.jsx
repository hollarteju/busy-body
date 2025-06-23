import React from 'react';
import { useInView } from 'react-intersection-observer';

const InputField = ({ label, type = 'text', required = false, placeholder, isPhone, options, value, onChange }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className={`transform transition-transform duration-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
      <label className="block text-md font-medium text-gray-700">
        {label}
        {type === 'select' ? (
          <select
            required={required}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary transition duration-150 ease-in-out"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            required={required}
            placeholder={placeholder}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-primary transition duration-150 ease-in-out"
            onChange={onChange}
            value={value}
          />
        )}
        {isPhone && <span className="text-gray-500 text-xs">e.g., Nigeria +234</span>}
      </label>
    </div>
  );
};

export default InputField;
