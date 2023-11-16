import { useRef } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { usePreview } from './usePreview';

export type Props = {
  name: string;
};

export function Preview({ name }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);
  // TODO ShareButton設置
  const { base64url, handleShare } = usePreview(previewRef);

  return (
    <Box sx={{ py: 2 }}>
      <Box position={base64url ? 'absolute' : 'relative'}>
        <Card sx={{ width: 320, height: 240 }} ref={previewRef}>
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
      </Box>
      {base64url && (
        <Box position="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img style={{ display: 'block' }} src={base64url} alt="preview" />
        </Box>
      )}
    </Box>
  );
}
