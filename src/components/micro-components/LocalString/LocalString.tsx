import React, { FC } from 'react';

interface LocalStringProps {
  number: number;
}

const LocalString: FC<LocalStringProps> = ({ number }) => {
  return (
    <p>
      {number.toLocaleString('en-US', {
        maximumFractionDigits: 0,
        useGrouping: true,
        notation: 'compact',
        compactDisplay: 'short'
      })}
    </p>
  );
};

export default LocalString;
