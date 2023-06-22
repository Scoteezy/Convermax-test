/* eslint-disable react/prop-types */

const Each = ({styles,exactTimeInput,changeExactTime}) => {
  return (
    <div className={`schedule__types-type-each ${styles.eachStyles}`}>
    <label>
          Each
          <input value={exactTimeInput} required min='0' max='59' onChange={changeExactTime} type="number" />
        </label> 
  </div>
  )
}

export default Each