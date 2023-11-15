import React, { useRef } from 'react';

import Box from '@mui/material/Box';

import { Form } from '@/components';

export default function Hook() {
  const previewRef = useRef<HTMLDivElement>(null);

  return (
    <main>
      <Box sx={{ p: 2 }}>
        <p>this is Hook</p>
        <Box sx={{ my: 2 }}>
          <Form ref={previewRef} />
        </Box>
      </Box>
    </main>
  );
}
