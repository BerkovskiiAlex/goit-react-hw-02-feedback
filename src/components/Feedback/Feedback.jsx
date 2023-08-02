import React from 'react';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul>
        {options.map(option => (
          <li key={option}>
            <button onClick={() => onLeaveFeedback(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </>
  );
};
