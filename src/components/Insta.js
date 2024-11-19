import React, { useEffect, useRef } from 'react';

function InstagramEmbed() {
  const embedRef = useRef(null);

  useEffect(() => {
    // Check if the Instagram embed script is already present
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "//www.instagram.com/embed.js";
      script.onload = () => window.instgrm.Embeds.process();
      document.body.appendChild(script);
    } else {
      // If the script is already loaded, just process the embed
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink="https://www.instagram.com/rpiphisig/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '3px',
        boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
        margin: '1px',
        maxWidth: '540px',
        minWidth: '326px',
        padding: 0,
        width: '99.375%',
      }}
      ref={embedRef}
    >
      <a
        href="https://www.instagram.com/rpiphisig/?utm_source=ig_embed&amp;utm_campaign=loading"
        style={{
          background: '#FFFFFF',
          lineHeight: 0,
          padding: '0 0',
          textAlign: 'center',
          textDecoration: 'none',
          width: '100%',
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        View this profile on Instagram
      </a>
    </blockquote>
  );
}

export default InstagramEmbed;
