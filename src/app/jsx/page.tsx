import React from 'react';

import Box from '@mui/material/Box';

import { Form } from './Form';

export default function Jsx() {
  return (
    <main>
      <Box sx={{ p: 2 }}>
        <p>this is Jsx</p>
        <Box sx={{ mt: 2 }}>
          <Form />
        </Box>
      </Box>
    </main>
  );
}
