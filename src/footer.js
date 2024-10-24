import React from 'react';
import { Typography } from '@mui/material';



const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#00aae7', color: '#fff', padding: '10px', textAlign: 'center', position: 'fixed', width: '100%', bottom: 0 }}>
      <Typography variant="body1">
        © 2024 Miracle Software Systems, Inc. | All rights reserved.
      </Typography>
    </footer>
  );
};

export default Footer;
