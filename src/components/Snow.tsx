import React, { useEffect, useState } from 'react';

export const Snow = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snow absolute"
          style={{
            left: `${flake.left}%`,
            animationDelay: `${flake.delay}s`
          }}
        />
      ))}
    </div>
  );
};