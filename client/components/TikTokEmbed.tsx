import React, { useEffect, useRef } from 'react';

interface TikTokEmbedProps {
  embedCode: string;
}

export default function TikTokEmbed({ embedCode }: TikTokEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;

    const loadTikTokScript = () => {
      // Check if TikTok script is already loaded
      if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
        script = document.createElement('script');
        script.src = 'https://www.tiktok.com/embed.js';
        script.async = true;
        script.onload = () => {
          // Initialize TikTok embeds after script loads
          if ((window as any).tiktokEmbed && containerRef.current) {
            (window as any).tiktokEmbed.lib.render(containerRef.current);
          }
        };
        document.head.appendChild(script);
      } else {
        // Script already exists, try to initialize
        setTimeout(() => {
          if ((window as any).tiktokEmbed && containerRef.current) {
            (window as any).tiktokEmbed.lib.render(containerRef.current);
          }
        }, 100);
      }
    };

    // Set the innerHTML and then load/initialize the script
    if (containerRef.current) {
      containerRef.current.innerHTML = embedCode;
      loadTikTokScript();
    }

    return () => {
      // Cleanup if needed
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [embedCode]);

  return (
    <div
      ref={containerRef}
      className="tiktok-embed-container w-full max-w-[605px] min-w-[325px] mx-auto"
    />
  );
}
