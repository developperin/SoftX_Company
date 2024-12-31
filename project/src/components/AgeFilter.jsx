import React from 'react';
import PropTypes from 'prop-types';

const AgeFilter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full max-w-xs mx-auto px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      >
        <option value="all">All Ages</option>
        <option value="under18">Under 18</option>
        <option value="18-30">18-30</option>
        <option value="over30">Over 30</option>
      </select>
    </div>
  );
};

AgeFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AgeFilter;