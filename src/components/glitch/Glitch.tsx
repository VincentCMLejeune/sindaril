import { useEffect, useRef } from 'react';
import './Glitch.css';

interface GlitchProps {
  imgSrc: string;
  alt: string;
}

const CANVAS_SIZE = 400;

export function Glitch({ imgSrc, alt }: GlitchProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const image = new Image();
    image.crossOrigin = 'anonymous';

    const offscreen = document.createElement('canvas');
    offscreen.width = CANVAS_SIZE;
    offscreen.height = CANVAS_SIZE;
    const offscreenCtx = offscreen.getContext('2d');
    if (!offscreenCtx) return;

    const getRandomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
    const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

    const drawGlitchBands = () => {
      const bandCount = getRandomInt(1, 3);
      for (let i = 0; i < bandCount; i++) {
        const y = getRandomInt(0, CANVAS_SIZE - 12);
        const bandHeight = getRandomInt(4, 26);
        const xOffset = getRandomInt(-32, 32);
        const band = offscreenCtx.getImageData(0, y, CANVAS_SIZE, bandHeight);
        ctx.putImageData(band, xOffset, y);
      }
    };

    const drawRgbShift = () => {
      const source = offscreenCtx.getImageData(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      const output = ctx.createImageData(CANVAS_SIZE, CANVAS_SIZE);
      const src = source.data;
      const dst = output.data;
      const rShift = getRandomInt(-8, 8);
      const gShift = getRandomInt(-10, 10);
      const bShift = getRandomInt(-6, 6);

      for (let y = 0; y < CANVAS_SIZE; y++) {
        for (let x = 0; x < CANVAS_SIZE; x++) {
          const index = (y * CANVAS_SIZE + x) * 4;
          const rIndex = (y * CANVAS_SIZE + clamp(x + rShift, 0, CANVAS_SIZE - 1)) * 4;
          const gIndex = (y * CANVAS_SIZE + clamp(x + gShift, 0, CANVAS_SIZE - 1)) * 4;
          const bIndex = (y * CANVAS_SIZE + clamp(x + bShift, 0, CANVAS_SIZE - 1)) * 4;

          dst[index] = src[rIndex];
          dst[index + 1] = src[gIndex + 1];
          dst[index + 2] = src[bIndex + 2];
          dst[index + 3] = src[index + 3];
        }
      }

      ctx.save();
      ctx.globalAlpha = 0.65;
      ctx.putImageData(output, 0, 0);
      ctx.restore();
    };

    const drawGlitchBlocks = () => {
      const blockCount = getRandomInt(1, 2);
      for (let i = 0; i < blockCount; i++) {
        const blockWidth = getRandomInt(10, 90);
        const blockHeight = getRandomInt(6, 34);
        const sourceX = getRandomInt(0, CANVAS_SIZE - blockWidth);
        const sourceY = getRandomInt(0, CANVAS_SIZE - blockHeight);
        const destX = sourceX + getRandomInt(-48, 48);
        const destY = sourceY + getRandomInt(-12, 12);
        const block = offscreenCtx.getImageData(sourceX, sourceY, blockWidth, blockHeight);
        ctx.putImageData(block, destX, destY);
      }
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      offscreenCtx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      offscreenCtx.drawImage(image, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
      ctx.drawImage(offscreen, 0, 0, CANVAS_SIZE, CANVAS_SIZE);

      if (Math.random() > 0.55) {
        drawGlitchBands();
      }
      if (Math.random() > 0.75) {
        drawRgbShift();
      }
      if (Math.random() > 0.8) {
        drawGlitchBlocks();
      }

      animationRef.current = requestAnimationFrame(renderFrame);
    };

    image.onload = () => {
      renderFrame();
    };
    image.src = imgSrc;

    return () => {
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [imgSrc]);

  return (
    <div className="glitch-canvas-wrapper">
      <canvas ref={canvasRef} aria-label={alt} role="img" className="glitch-canvas" width={CANVAS_SIZE} height={CANVAS_SIZE} />
    </div>
  );
}

