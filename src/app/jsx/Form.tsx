'use client';

import React, { useState, ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { Preview } from './Preview';

export function Form() {
  const [name, setName] = useState('');
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <>
      <Box>
        <TextField
          label="Your Name"
          variant="filled"
          value={name}
          onChange={handleChangeName}
        />
      </Box>

      <Preview name={name} />
    </>
  );
}
