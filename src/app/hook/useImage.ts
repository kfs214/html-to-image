import { RefObject, useCallback } from 'react';

import { toPng } from 'html-to-image';

const imageOptions = {
  share: { title: 'html-to-image', text: 'Check out this image!' },
  fileName: 'html-to-image.png',
};

// eslint-disable-next-line consistent-return
async function base64toFile(base64url: string) {
  try {
    const blob = await fetch(base64url).then((res) => res.blob());
    return new File([blob], imageOptions.fileName, { type: blob.type });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

function saveImage(dataUrl: string) {
  const link = document.createElement('a');
  link.download = imageOptions.fileName;
  link.href = dataUrl;
  link.click();
}

export function useImage(ref: RefObject<HTMLDivElement>) {
  // TODO base64urlも返す
  const handleShare = useCallback(() => {
    if (!ref.current) return;

    toPng(ref.current, { cacheBust: true })
      .then(async (dataUrl) => {
        const file = await base64toFile(dataUrl);

        if (
          file &&
          navigator.canShare &&
          navigator.canShare({ files: [file] })
        ) {
          await navigator.share({
            ...imageOptions.share,
            files: [file],
          });
        } else {
          saveImage(dataUrl);
        }
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, [ref]);

  return { handleShare };
}
