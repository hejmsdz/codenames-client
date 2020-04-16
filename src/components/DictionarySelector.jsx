import React from 'react';

const DICTIONARIES = {
  en: 'English',
  pl: 'Polish',
};

export default ({ value, onChange }) => (
  <div>
    <label htmlFor="dictionary">
      Language:
    </label>
    <select id="dictionary" value={value || ''} onChange={(e) => onChange(e.target.value)}>
      {Object.entries(DICTIONARIES).map(([code, name]) => (
        <option key={code} value={code}>{name}</option>
      ))}
    </select>
  </div>
);
