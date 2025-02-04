import React from 'react';
import { cn } from "@/lib/utils";

interface PenguinProps {
  className?: string;
  accessory?: string;
  prop?: string;
  onClick?: () => void;
  phrase?: string;
}

export const Penguin: React.FC<PenguinProps> = ({
  className,
  accessory,
  prop,
  onClick,
  phrase
}) => {
  return (
    <div className="relative group" onClick={onClick}>
      {phrase && (
        <div className="speech-bubble absolute -top-24 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-48">
          <p className="text-sm text-center font-bold bg-white/90 rounded-xl p-2 shadow-lg">{phrase}</p>
        </div>
      )}
      <div className={cn(
        "relative w-32 h-40 penguin-bounce cursor-pointer transform transition-transform hover:scale-105",
        className
      )}>
        {/* Sparkles */}
        <div className="absolute -top-4 -left-4 w-8 h-8 text-yellow-300 animate-pulse">✨</div>
        <div className="absolute -top-4 -right-4 w-8 h-8 text-yellow-300 animate-pulse">✨</div>
        
        {/* Body */}
        <div className="absolute inset-0 bg-[#2D3436] rounded-full transform scale-90">
          {/* White Belly */}
          <div className="absolute inset-x-4 top-12 bottom-4 bg-white rounded-full" />
          
          {/* Eyes with blinking animation */}
          <div className="absolute top-8 left-6 w-4 h-4 bg-white rounded-full group-hover:h-1">
            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full" />
          </div>
          <div className="absolute top-8 right-6 w-4 h-4 bg-white rounded-full group-hover:h-1">
            <div className="absolute top-1 left-1 w-2 h-2 bg-black rounded-full" />
          </div>
          
          {/* Beak */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-6 h-4 bg-[#FF9F1C] rounded-full" />
          
          {/* Rosy Cheeks */}
          <div className="absolute top-10 left-4 w-3 h-2 bg-[#FF9AA2] rounded-full opacity-60" />
          <div className="absolute top-10 right-4 w-3 h-2 bg-[#FF9AA2] rounded-full opacity-60" />
          
          {/* Accessories */}
          {accessory === 'scarf' && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-[#FF9AA2] rounded-full" />
          )}
          {accessory === 'hat' && (
            <>
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-8 bg-[#FF9AA2] rounded-t-full" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full" />
            </>
          )}
          {accessory === 'sunglasses' && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-4 bg-[#2D3436] rounded-full" />
          )}
          {accessory === 'flower' && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex">
              <div className="w-4 h-4 bg-[#FFB3BA] rounded-full" />
              <div className="w-4 h-4 bg-[#BAFFC9] rounded-full -ml-1" />
              <div className="w-4 h-4 bg-[#BAE1FF] rounded-full -ml-1" />
            </div>
          )}
          {accessory === 'bowtie' && (
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-8 h-4">
              <div className="absolute w-4 h-4 bg-[#FF9AA2] rotate-45" style={{ left: '-4px' }} />
              <div className="absolute w-4 h-4 bg-[#FF9AA2] rotate-45" style={{ right: '-4px' }} />
            </div>
          )}
          {accessory === 'crown' && (
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-6">
              <div className="absolute inset-0 bg-[#FFD700]" />
              <div className="absolute top-0 left-0 w-2 h-2 bg-[#FF0000]" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-[#FF0000]" />
            </div>
          )}
          {accessory === 'earmuffs' && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24">
              <div className="absolute left-0 w-6 h-6 bg-[#FFB3BA] rounded-full" />
              <div className="absolute right-0 w-6 h-6 bg-[#FFB3BA] rounded-full" />
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FFB3BA]" />
            </div>
          )}
          {accessory === 'ribbon' && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
              <div className="w-6 h-6 bg-[#FF69B4] rotate-45" />
            </div>
          )}
          {accessory === 'glasses' && (
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex gap-1">
              <div className="w-4 h-4 border-2 border-[#FFD700] rounded-full" />
              <div className="w-4 h-4 border-2 border-[#FFD700] rounded-full" />
            </div>
          )}
          
          {/* Props */}
          {prop === 'balloon' && (
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-8 h-10 bg-[#FF9AA2] rounded-full" />
              <div className="w-1 h-12 bg-[#2D3436] absolute left-1/2 transform -translate-x-1/2 -bottom-2" />
            </div>
          )}
          {prop === 'sign' && (
            <div className="absolute -right-16 top-8 bg-white p-2 rounded-lg transform rotate-12">
              <p className="text-xs font-bold">Ice to meet you!</p>
            </div>
          )}
          {prop === 'candy' && (
            <div className="absolute -right-8 top-12 w-8 h-16">
              <div className="w-full h-full bg-white rounded-full transform rotate-45 flex overflow-hidden">
                <div className="w-1/2 h-full bg-red-500" />
              </div>
            </div>
          )}
          {prop === 'umbrella' && (
            <div className="absolute -top-12 right-0">
              <div className="w-12 h-12 bg-[#FF9AA2] rounded-t-full" />
              <div className="w-1 h-12 bg-[#2D3436] ml-6" />
            </div>
          )}
          {prop === 'fishing-rod' && (
            <div className="absolute -top-8 -right-8">
              <div className="w-1 h-16 bg-[#8B4513] transform rotate-45" />
              <div className="w-1 h-8 bg-[#87CEEB] absolute bottom-0 right-0" />
            </div>
          )}
          {prop === 'snowboard' && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-4 bg-[#87CEEB] rounded-full transform rotate-12" />
            </div>
          )}
          {prop === 'heart' && (
            <div className="absolute -top-8 -right-8">
              <div className="w-8 h-8 relative">
                <div className="absolute w-4 h-4 bg-[#FF69B4] rounded-full" style={{ left: 0 }} />
                <div className="absolute w-4 h-4 bg-[#FF69B4] rounded-full" style={{ right: 0 }} />
                <div className="absolute w-8 h-4 bg-[#FF69B4]" style={{ bottom: 0, transform: 'rotate(45deg)' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};