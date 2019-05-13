import React from 'react';
import {Select} from 'semantic-ui-react';
const options = [
  {key: "march", text:"March", value: 2},
  {key: "april", text:"April", value: 3}
]
export default ({month, handleChange}) => {
 
  return (
    <Select placeholder="Select a month" options={options} onChange={handleChange} value={month}/>
  )
};