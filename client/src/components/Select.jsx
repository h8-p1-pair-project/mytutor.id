import React from 'react'
import helpers from "../helpers"

function Select({ name, options, defvalue, onChange, label }) {
  return (
    <>
      <label htmlFor="role">{label}</label>
      <select name={name} id={name} onChange={onChange} defaultValue={!defvalue ? "" : defvalue}>
          {!defvalue && <option hidden disabled value="">Select {helpers.toCamelCase(name)}</option>}
          {options.map((option, i) => <option value={option} key={i}>{helpers.toCamelCase(option)}</option>)}
      </select>
    </>
  )
}

export default Select