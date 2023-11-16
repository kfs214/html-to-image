import { RefObject, useCallback, useState } from 'react';

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

export function usePreview(ref: RefObject<HTMLDivElement>) {
  const [base64url, setBase64url] = useState('');

  const handleShare = useCallback(async () => {
    const file = await base64toFile(base64url);

    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator
        .share({
          ...imageOptions.share,
          files: [file],
        })
        .catch();
    } else {
      saveImage(base64url);
    }
  }, [base64url]);

  if (ref.current) {
    toPng(ref.current, { cacheBust: true })
      .then(async (dataUrl) => {
        setBase64url(dataUrl);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }

  return { base64url, handleShare };
}
