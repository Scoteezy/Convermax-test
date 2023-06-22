/* eslint-disable react/prop-types */
import Select from 'react-select'
import { days,selectStyles } from "../../../data";
const Monthly = ({styles,changeMonthDay,changeTime,changeDay}) => {
  return (
    <div className={`schedule__types-type-monthly ${styles.monthlyStyles}`}>
    <label >
    On <input onChange={changeMonthDay} min='1' max='31' type="number" />
    </label>
    <label >
    And   <Select
        isMulti
        hasValue={true}
        styles={selectStyles}
        options={days}
        closeMenuOnSelect={false}
        onChange={changeDay}
        />
    </label>
    <label >
    At    <input onChange={changeTime} required type="time" />
    </label>
  </div>
  )
}

export default Monthly