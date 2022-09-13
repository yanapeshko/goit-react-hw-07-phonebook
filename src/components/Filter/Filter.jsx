import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { setFilter } from '../../redux/filter/filter-actions';
import s from './Filter.module.css';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  const handleFilterContacts = e => {
    return dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <label className={s.filter_label}>
      Find contacts by name:
      <input
        className={s.filter_input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterContacts}
      />
    </label>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
