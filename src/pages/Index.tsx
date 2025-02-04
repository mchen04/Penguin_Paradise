import React, { useState } from 'react';
import { Snow } from '@/components/Snow';
import { Penguin } from '@/components/Penguin';
import { AudioPlayer } from '@/components/AudioPlayer';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const PHRASES = [
  "Waddle I do without you?",
  "You're flippin' amazing!",
  "Let's chill together!",
  "Ice to meet you!",
  "Having a whale of a time!",
  "Stay cool!",
  "Waddle you do next?",
  "Just chillin'!",
  "Feeling snow special!",
  "You make my heart melt!",
  "Penguin pals forever!",
  "Snow much fun!",
  "Looking ice today!",
  "Totally cool!",
  "Winter wishes!"
];

const ACCESSORIES = [
  'scarf',
  'hat',
  'sunglasses',
  'flower',
  'bowtie',
  'crown',
  'earmuffs',
  'ribbon',
  'glasses',
  ''
] as const;

const PROPS = [
  'balloon',
  'sign',
  'candy',
  'umbrella',
  'fishing-rod',
  'snowboard',
  'heart',
  ''
] as const;

const Index = () => {
  const [penguins, setPenguins] = useState(() => 
    Array.from({ length: 3 }, (_, i) => ({
      id: i,
      phrase: PHRASES[Math.floor(Math.random() * PHRASES.length)],
      accessory: ACCESSORIES[Math.floor(Math.random() * ACCESSORIES.length)],
      prop: PROPS[Math.floor(Math.random() * PROPS.length)]
    }))
  );
  const { toast } = useToast();

  const handlePenguinClick = () => {
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-quick-funny-kiss-2193.mp3');
    audio.play();
    toast({
      title: "Chirp!",
      description: "This penguin likes you!",
    });
  };

  const getUniqueRandomItems = <T extends unknown>(array: readonly T[], count: number): T[] => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const handleMeetMore = () => {
    const uniquePhrases = getUniqueRandomItems(PHRASES, 3);
    const uniqueAccessories = getUniqueRandomItems(ACCESSORIES, 3);
    const uniqueProps = getUniqueRandomItems(PROPS, 3);

    setPenguins(Array.from({ length: 3 }, (_, i) => ({
      id: Date.now() + i,
      phrase: uniquePhrases[i],
      accessory: uniqueAccessories[i],
      prop: uniqueProps[i]
    })));
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#BDE0FE] to-[#A2D2FF]">
      <Snow />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-white mb-20 shadow-sm bg-blue-400/30 rounded-full py-4 px-8 backdrop-blur-sm">
          Penguin Paradise
        </h1>
        
        <div className="flex flex-wrap justify-center gap-16 mb-12">
          {penguins.map((penguin) => (
            <Penguin
              key={penguin.id}
              phrase={penguin.phrase}
              accessory={penguin.accessory}
              prop={penguin.prop}
              onClick={handlePenguinClick}
            />
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleMeetMore}
            className="bg-white/80 hover:bg-white text-blue-500 font-semibold py-2 px-6 rounded-full shadow-lg transform transition hover:scale-105"
          >
            Meet More Penguins!
          </Button>
        </div>
      </div>

      <div className="sliding-penguin absolute bottom-8 z-20">
        <Penguin className="transform -scale-x-100" accessory="scarf" />
      </div>

      <AudioPlayer />
    </div>
  );
};

export default Index;