import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const TooltipWrapper = ({ title, children }) => (
  <Tooltip
    title={title}
    slotProps={{
      tooltip: {
        sx: {
          fontSize: '1.2rem',
        },
      },
    }}
  >
    <div className="tooltip-wrapper" style={{ display: 'inline-block' }}>
      {children}
    </div>
  </Tooltip >
);

export default TooltipWrapper;
