import React from 'react';

const LocalString = ({ number }) => {


    return (
          <p>{number.toLocaleString('en-US', {
            maximumFractionDigits: 0,
            useGrouping: true,
            notation: 'compact',
            compactDisplay: 'short'
          })}</p>
        );
};

export default LocalString;