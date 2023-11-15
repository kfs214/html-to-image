import Box from '@mui/material/Box';

import { Form } from '@/components';

export default function Hook() {
  return (
    <main>
      <Box sx={{ p: 2 }}>
        <p>this is Hook</p>
        <Box sx={{ my: 2 }}>
          <Form />
        </Box>
      </Box>
    </main>
  );
}
