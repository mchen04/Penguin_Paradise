import React, { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from "@/components/ui/button";

export const AudioPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        className="bg-white/80 hover:bg-white"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </Button>
      <audio ref={audioRef} loop>
        <source src="https://assets.mixkit.co/music/preview/mixkit-winter-magic-466.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
};