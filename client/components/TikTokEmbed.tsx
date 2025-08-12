import { useEffect, useRef } from "react";

interface TikTokEmbedProps {
  videoId: string;
  cite: string;
}

export default function TikTokEmbed({ videoId, cite }: TikTokEmbedProps) {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedRef.current) return;

    // Clear any existing content
    embedRef.current.innerHTML = `
      <blockquote 
        class="tiktok-embed" 
        cite="${cite}" 
        data-video-id="${videoId}" 
        style="max-width: 605px; min-width: 325px;"
      >
        <section>
          <a target="_blank" title="@nut.cravings" href="${cite}">@nut.cravings</a>
        </section>
      </blockquote>
    `;

    // Initialize TikTok embed
    const initEmbed = () => {
      if (window.tiktokEmbed) {
        window.tiktokEmbed.lib.render();
      }
    };

    // Try multiple times to ensure initialization
    initEmbed();
    setTimeout(initEmbed, 100);
    setTimeout(initEmbed, 500);
    setTimeout(initEmbed, 1000);
  }, [videoId, cite]);

  return <div ref={embedRef} className="w-full" />;
}

declare global {
  interface Window {
    tiktokEmbed?: {
      lib: {
        render: () => void;
      };
    };
  }
}
