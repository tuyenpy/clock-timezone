import React, { useState } from 'react';
import timezones from '../../timezone';
import add from './add.svg';
import close1 from './close.svg';
import './AddTimer.css';

const AddTimer = (props) => {
  let [state, setState] = useState(false);
  let [closer, setClose] = useState(false);
  let { onTimer } = props;
  return <div className="AddTimer-container">
    <div className="AddTimer" onClick={() => setState(!state)}>
      
      {closer ? (
        <img src={close1} alt="Close timezone" onClick={() => setClose(!closer)} />

      ) : (
          <img src={add} alt="Add timezone" onClick={() => setClose(!closer)} />

        )}
    </div>
    {
      state && <div className="TimeZone-List">
        <ul>
          {
            timezones.map((timezone, index) =>
              <li key={index} onClick={() => onTimer(index)}>{timezone}</li>)
          }
        </ul>
      </div>
    }
  </div>
}

export default AddTimer;