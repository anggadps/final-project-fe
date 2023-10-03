import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const AccessDenied = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };

  const iconStyle = {
    fontSize: 100,
    color: 'red',
    marginBottom: 20,
  };

  return (
    <Grid container style={containerStyle}>
      <Grid item>
        <CancelPresentationIcon style={iconStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h4" gutterBottom>
          Access Denied
        </Typography>
        <Typography variant="body1" paragraph>
          Anda tidak memiliki izin untuk mengakses halaman admin.
        </Typography>
        <Button variant="contained" color="primary" href="/">
          Kembali ke Halaman Utama
        </Button>
      </Grid>
    </Grid>
  );
};

export default AccessDenied;
