import React, { useEffect, useRef } from 'react';

interface TikTokEmbedProps {
  embedCode: string;
}

export default function TikTokEmbed({ embedCode }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load TikTok embed script if it hasn't been loaded yet
    const loadScript = () => {
      if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
          // Re-process TikTok embeds after script loads
          setTimeout(() => {
            if ((window as any).tiktokEmbed?.lib?.render) {
              (window as any).tiktokEmbed.lib.render();
            }
          }, 500);
        };
      } else {
        // Script already loaded, just trigger render
        setTimeout(() => {
          if ((window as any).tiktokEmbed?.lib?.render) {
            (window as any).tiktokEmbed.lib.render();
          }
        }, 100);
      }
    };

    if (containerRef.current) {
      loadScript();
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="tiktok-embed-container w-full max-w-[605px] min-w-[325px] mx-auto p-4"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
}
