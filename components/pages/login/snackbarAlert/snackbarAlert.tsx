'use client';

import React, { useState } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

// Alert コンポーネント
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// SnackbarAlert コンポーネント
interface SnackbarAlertProps {
  open: boolean;
  severity: 'error' | 'warning' | 'info' | 'success';
  message: string;
  onClose: () => void;
}

export const SnackbarAlert: React.FC<SnackbarAlertProps> = ({ open, severity, message, onClose }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
      <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
