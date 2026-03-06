"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
  pulseSpeed: number;
  color: string;
  layer: number;
}

interface Connection {
  from: number;
  to: number;
  strength: number;
  signalPos: number;
  signalActive: boolean;
  signalSpeed: number;
  signalColor: string;
}

const COLORS = ["#79C5C7", "#2EA6D4", "#00A79D", "#1B75BB", "#79C5C7"];

export default function NeuralNetwork({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animFrameRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const timeRef = useRef<number>(0);

  const initNodes = useCallback((width: number, height: number) => {
    const count = Math.min(Math.floor((width * height) / 14000), 65);
    const nodes: Node[] = [];

    for (let i = 0; i < count; i++) {
      const layer = Math.floor(Math.random() * 4);
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 2.5 + 1.5,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.008,
        color: COLORS[layer],
        layer,
      });
    }

    const connections: Connection[] = [];
    const maxDist = Math.min(width, height) * 0.28;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          connections.push({
            from: i,
            to: j,
            strength: 1 - dist / maxDist,
            signalPos: Math.random(),
            signalActive: Math.random() > 0.65,
            signalSpeed: Math.random() * 0.004 + 0.002,
            signalColor: COLORS[Math.floor(Math.random() * COLORS.length)],
          });
        }
      }
    }

    nodesRef.current = nodes;
    connectionsRef.current = connections;
  }, []);

  const draw = useCallback(function drawFrame() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;
    timeRef.current += 1;

    ctx.clearRect(0, 0, width, height);

    const nodes = nodesRef.current;
    const connections = connectionsRef.current;

    // Update node positions
    nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      node.pulsePhase += node.pulseSpeed;

      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;
    });

    // Draw connections
    connections.forEach((conn) => {
      const from = nodes[conn.from];
      const to = nodes[conn.to];

      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const maxDist = Math.min(width, height) * 0.28;
      if (dist > maxDist) return;

      conn.strength = 1 - dist / maxDist;

      // Draw connection line
      const alpha = conn.strength * 0.18;
      ctx.beginPath();
      ctx.moveTo(from.x, from.y);
      ctx.lineTo(to.x, to.y);
      ctx.strokeStyle = `rgba(46, 166, 212, ${alpha})`;
      ctx.lineWidth = conn.strength * 0.7;
      ctx.stroke();

      // Draw signal pulse
      if (conn.signalActive) {
        conn.signalPos += conn.signalSpeed;
        if (conn.signalPos > 1) {
          conn.signalPos = 0;
          conn.signalActive = Math.random() > 0.3;
        }

        const sx = from.x + dx * conn.signalPos;
        const sy = from.y + dy * conn.signalPos;

        const gradient = ctx.createRadialGradient(sx, sy, 0, sx, sy, 5);
        gradient.addColorStop(0, conn.signalColor + "cc");
        gradient.addColorStop(1, conn.signalColor + "00");

        ctx.beginPath();
        ctx.arc(sx, sy, 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, 2, 0, Math.PI * 2);
        ctx.fillStyle = conn.signalColor + "ff";
        ctx.fill();
      } else if (Math.random() < 0.001) {
        conn.signalActive = true;
        conn.signalPos = 0;
      }
    });

    // Draw nodes
    nodes.forEach((node) => {
      const pulse = Math.sin(node.pulsePhase) * 0.4 + 0.6;

      // Outer glow
      const glowGradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, node.radius * 6
      );
      glowGradient.addColorStop(0, node.color + Math.round(pulse * 60).toString(16).padStart(2, "0"));
      glowGradient.addColorStop(1, node.color + "00");

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
      ctx.fillStyle = glowGradient;
      ctx.fill();

      // Core node
      const coreGradient = ctx.createRadialGradient(
        node.x - node.radius * 0.3,
        node.y - node.radius * 0.3,
        0,
        node.x,
        node.y,
        node.radius
      );
      coreGradient.addColorStop(0, "#ffffff" + Math.round(pulse * 200).toString(16).padStart(2, "0"));
      coreGradient.addColorStop(1, node.color + "ff");

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius * pulse, 0, Math.PI * 2);
      ctx.fillStyle = coreGradient;
      ctx.fill();
    });

    animFrameRef.current = requestAnimationFrame(drawFrame);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initNodes(canvas.width, canvas.height);
    };

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      resizeObserver.disconnect();
    };
  }, [draw, initNodes]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ display: "block" }}
    />
  );
}
