import React from "react";
import PropTypes from 'prop-types';

const Filter = ({ filter, setFilter }) => {
  console.log(filter)

  return (
    <input
      type="text"
      id="filter"
      name="filter"
      value={filter}
      onChange={setFilter}
    />
  );
};

export default Filter;

Filter.propTypes ={
  filter: PropTypes.string
}