import css from './Filter.module.css';
import { setStatusFilter } from 'redux/filterReducer';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.status);
  const handleFilter = e => {
    dispatch(setStatusFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <>
      <label className={css.title}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          value={filter}
          onChange={handleFilter}
        />
      </label>
    </>
  );
};

export default Filter;
