/* eslint-disable react/prop-types */

import Select from 'react-select'
import { days,selectStyles } from "../../../data";

const Weekly = ({changeDay,styles,changeTime}) => {
  return (
    <div className={`schedule__types-type-weekly ${styles.weeklyStyles}`}>
    <label>
      Every Day
      <Select
      isMulti
      styles={selectStyles}
      options={days}
      closeMenuOnSelect={false}
      onChange={changeDay}
      />
    </label>
    <label>
      At
      <input onChange={changeTime} type="time" />
    </label>
</div>
  )
}

export default Weekly