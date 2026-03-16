"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_PATH = "/media/SaaS_Automation_Background_Video_Generation.mp4";
const FALLBACK_IMAGE_PATH = "/media/logo.jpg";

export function AnimatedBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    console.info(`[AnimatedBackground] Resolved video path: ${VIDEO_PATH}`);

    const attemptPlayback = async () => {
      try {
        await video.play();
        console.info("[AnimatedBackground] Background video autoplay started.");
      } catch (error) {
        console.warn("[AnimatedBackground] Autoplay blocked; muted autoplay is required by browser policies.", error);
      }
    };

    void attemptPlayback();
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[-30] h-full w-full overflow-hidden" aria-hidden="true">
      {!videoFailed ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src={VIDEO_PATH}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={FALLBACK_IMAGE_PATH}
          onCanPlay={() => console.info("[AnimatedBackground] Background video can play.")}
          onError={() => {
            console.error(`[AnimatedBackground] Failed to load video at ${VIDEO_PATH}. Falling back to static background.`);
            setVideoFailed(true);
          }}
        />
      ) : (
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${FALLBACK_IMAGE_PATH})` }}
        />
      )}

      <div className="absolute inset-0 z-10 bg-[rgba(248,250,252,0.92)] md:bg-[rgba(248,250,252,0.86)]" />
    </div>
  );
}
