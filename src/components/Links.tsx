import { ReactNode } from 'react';

import MUIButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

function Button({ children }: { children: ReactNode }) {
  return <MUIButton variant="contained">{children}</MUIButton>;
}

export function Links() {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
    >
      <Button>
        <Link href="/hook">Hook</Link>
      </Button>
      <Button>
        <Link href="/jsx">JSX</Link>
      </Button>
    </Stack>
  );
}
