import { RefObject, useCallback } from 'react';

import { toPng } from 'html-to-image';

export function useImage(ref: RefObject<HTMLDivElement>) {
  const saveImage = useCallback(() => {
    if (!ref.current) return;

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'preview.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [ref]);

  return { saveImage };
}
