import { useRef } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { usePreview } from './usePreview';

export type Props = {
  name: string;
};

export function Preview({ name }: Props) {
  const previewRef = useRef<HTMLDivElement>(null);
  const { base64url, handleShare } = usePreview(previewRef);

  return (
    <Box sx={{ py: 2 }}>
      <Box sx={{ my: 2 }}>
        <Button onClick={handleShare} variant="outlined">
          Save
        </Button>
      </Box>

      <Box position="relative">
        <Box>
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
          <Box position="absolute" top={0} sx={{ height: '100%' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              style={{ display: 'block', width: 'auto', height: '100%' }}
              src={base64url}
              alt="preview"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}
