import React from 'react';

const YearDropdown = (props) => {
    const { value, onChange } = props;
  const currentYear = new Date().getFullYear();
  const startYear = 1995;
  const years = [];

  for (let year = currentYear; year >= startYear; year--) {
    years.push(year);
  }

  return (
    <select value={value} onChange={onChange} name='carYear' {...props}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearDropdown;
