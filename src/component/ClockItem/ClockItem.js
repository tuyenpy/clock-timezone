import React from 'react';
import Clock from 'react-live-clock';
import './ClockItem.css';

const ClockItem = (props) => {

  let { timezone, onDeleteTimer, index } = props;
  return <div className="ClockItem"  onClick={() => onDeleteTimer(index)}>
    <div className="Zone">
      <p>{timezone}</p>
    </div>
    <Clock format="HH:mm:ss" interval={1000} ticking={true} timezone={timezone} />
  </div>
  }

export default ClockItem;