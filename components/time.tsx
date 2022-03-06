import React from 'react';
import Moment from 'react-moment';

const Time = ({ children }: { children: Date }) => {
  return (
    <Moment
      fromNowDuring={7 * 24 * 60 * 60 * 1000}
      interval={1 * 60 * 1000}
      format='MMM DD, YYYY'
    >
      {children}
    </Moment>
  );
};

export default Time;
