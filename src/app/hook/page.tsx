'use client';

import React, { useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { Form } from './Form';
import { useImage } from './useImage';

export default function Hook() {
  const previewRef = useRef<HTMLDivElement>(null);
  const { handleShare } = useImage(previewRef);

  return (
    <main>
      <Box sx={{ p: 2 }}>
        <p>this is Hook</p>
        <Box sx={{ mt: 2 }}>
          <Form ref={previewRef} />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button onClick={handleShare} variant="outlined">
            Save
          </Button>
        </Box>
      </Box>
    </main>
  );
}
