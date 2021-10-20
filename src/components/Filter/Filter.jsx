import React from "react";
import PropTypes from "prop-types";

import s from "./Filter.module.css";

const Filter = ({ filterText, handleFilter }) => (
  <>
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filterText}
        onChange={handleFilter}
      />
    </label>
  </>
);

Filter.propTypes = {
  filterText: PropTypes.string.isRequired,
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
