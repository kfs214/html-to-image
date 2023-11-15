'use client';

import { useState, ChangeEvent } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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

      <Card sx={{ width: 320, mt: 2, height: 240 }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{ height: '100%' }}
        >
          <CardContent>
            <Typography variant="body1">{name}</Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
}
