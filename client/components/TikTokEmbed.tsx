import React, { useEffect } from 'react';

interface TikTokEmbedProps {
  embedCode: string;
}

export default function TikTokEmbed({ embedCode }: TikTokEmbedProps) {
  useEffect(() => {
    // Load TikTok embed script if it hasn't been loaded yet
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div 
      className="tiktok-embed-container w-full max-w-[605px] min-w-[325px] mx-auto"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
}
