import { useState, useRef, useEffect } from 'react';
import { Github, Play, RotateCw, ZoomIn, ZoomOut, Grid } from 'lucide-react';

interface ShapeConfig {
  type: 'circle' | 'square' | 'triangle' | 'star' | 'hexagon';
  color: string;
  isFilled: boolean;
  scale: number;
  rotation: number;
}

export function Projects() {
  // 2D Shapes Sandbox state
  const [shapeConfig, setShapeConfig] = useState<ShapeConfig>({
    type: 'star',
    color: '#06b6d4',
    isFilled: true,
    scale: 1,
    rotation: 0,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Redraw the canvas whenever configuration changes
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Grid guide background if dark mode or light mode
    const isDark = document.documentElement.classList.contains('dark');
    ctx.strokeStyle = isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)';
    ctx.lineWidth = 1;
    const step = 20;
    for (let x = 0; x < canvas.width; x += step) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
    }
    for (let y = 0; y < canvas.height; y += step) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Save context
    ctx.save();

    // Translate to center
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    ctx.translate(centerX, centerY);

    // Apply rotation
    ctx.rotate((shapeConfig.rotation * Math.PI) / 180);

    // Base size of shapes
    const size = 60 * shapeConfig.scale;

    // Set styling parameters
    ctx.strokeStyle = shapeConfig.color;
    ctx.fillStyle = shapeConfig.color;
    ctx.lineWidth = 3;

    ctx.beginPath();

    if (shapeConfig.type === 'circle') {
      ctx.arc(0, 0, size, 0, Math.PI * 2);
    } else if (shapeConfig.type === 'square') {
      ctx.rect(-size, -size, size * 2, size * 2);
    } else if (shapeConfig.type === 'triangle') {
      ctx.moveTo(0, -size);
      ctx.lineTo(size * Math.cos(Math.PI / 6), size * Math.sin(Math.PI / 6));
      ctx.lineTo(-size * Math.cos(Math.PI / 6), size * Math.sin(Math.PI / 6));
      ctx.closePath();
    } else if (shapeConfig.type === 'hexagon') {
      for (let i = 0; i < 6; i++) {
        const angle = (i * Math.PI) / 3;
        const x = size * Math.cos(angle);
        const y = size * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    } else if (shapeConfig.type === 'star') {
      const spikes = 5;
      const outerRadius = size;
      const innerRadius = size / 2.2;
      let rot = (Math.PI / 2) * 3;
      let x = 0;
      let y = -outerRadius;
      const step = Math.PI / spikes;

      ctx.moveTo(x, y);
      for (let i = 0; i < spikes; i++) {
        x = Math.cos(rot) * outerRadius;
        y = Math.sin(rot) * outerRadius;
        ctx.lineTo(x, y);
        rot += step;

        x = Math.cos(rot) * innerRadius;
        y = Math.sin(rot) * innerRadius;
        ctx.lineTo(x, y);
        rot += step;
      }
      ctx.closePath();
    }

    // Render path
    if (shapeConfig.isFilled) {
      ctx.globalAlpha = 0.25;
      ctx.fill();
      ctx.globalAlpha = 1.0;
      ctx.stroke();
    } else {
      ctx.stroke();
    }

    // Highlight Center Point
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(0, 0, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }, [shapeConfig]);

  // Adjust parameters
  const updateType = (type: ShapeConfig['type']) => setShapeConfig((c) => ({ ...c, type }));
  const updateColor = (color: string) => setShapeConfig((c) => ({ ...c, color }));
  const toggleFill = () => setShapeConfig((c) => ({ ...c, isFilled: !c.isFilled }));
  const rotateCw = () => setShapeConfig((c) => ({ ...c, rotation: (c.rotation + 15) % 360 }));
  const scaleUp = () => setShapeConfig((c) => ({ ...c, scale: Math.min(1.5, c.scale + 0.1) }));
  const scaleDown = () => setShapeConfig((c) => ({ ...c, scale: Math.max(0.5, c.scale - 0.1) }));

  // Projects list
  const projects = [
    {
      title: '2D Graphics Shapes Project',
      tag: 'Featured Project',
      tech: ['C Programming', 'OpenGL / GLUT', 'Computer Graphics'],
      description:
        'A comprehensive computer graphics mini project that generates and renders 2D geometric shapes dynamically. Implements basic polygon plotting, matrix translation, scaling, and rotation algorithms.',
      features: [
        'Trigonometric rendering of circles and polygons',
        'Interactive inputs to manipulate scaling and rotation angles',
        'Wireframe vs. shaded rendering styles',
        'Coordinate calculation and screen-to-world mapping',
      ],
      github: 'https://github.com/Ardra-Sobharaj/2d-graphics-shapes',
      isInteractive: true,
    },
    {
      title: 'Student Performance & Grade Analyzer',
      tag: 'Academic Project',
      tech: ['Python', 'Matplotlib', 'CSV File I/O'],
      description:
        'A Python utility to store, analyze, and visualize student performance records. Computes class averages, standard deviation, and outputs charts representing grade distributions.',
      features: [
        'Read and write student records from CSV files',
        'Statistical distribution analysis (mean, median, GPA)',
        'Generates bar charts and histograms using Matplotlib',
        'Modular terminal dashboard design',
      ],
      github: 'https://github.com/Ardra-Sobharaj/student-grade-analyzer',
      isInteractive: false,
    },
  ];

  return (
    <section id="projects" className="py-24 bg-light-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Academic Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-cyan to-primary-violet mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Loop Projects */}
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-slate-200/50 dark:border-slate-800/50 bg-light-card dark:bg-dark-card glass hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {proj.tag}
                  </span>
                  
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {proj.tech.slice(0, 2).map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-medium text-slate-500 dark:text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {proj.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-8">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Core Implementations:
                  </h4>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {proj.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start">
                        <span className="mr-2 text-cyan-500">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Interactive Demo for shapes project */}
              {proj.isInteractive && (
                <div className="mb-6 p-4 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-slate-100/50 dark:bg-slate-900/50">
                  <div className="flex items-center gap-2 mb-3 text-slate-700 dark:text-slate-300">
                    <Grid className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-bold tracking-wider uppercase">Live Shapes sandbox</span>
                  </div>
                  
                  {/* Canvas Layout */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                    <div className="sm:col-span-5 flex justify-center bg-white dark:bg-slate-950 rounded-lg p-2 border border-slate-200 dark:border-slate-800">
                      <canvas
                        ref={canvasRef}
                        width={180}
                        height={180}
                        className="max-w-full"
                      />
                    </div>

                    {/* Canvas Controls */}
                    <div className="sm:col-span-7 space-y-3">
                      {/* Shape selectors */}
                      <div className="flex flex-wrap gap-1.5">
                        {['star', 'circle', 'square', 'triangle', 'hexagon'].map((type) => (
                          <button
                            key={type}
                            onClick={() => updateType(type as ShapeConfig['type'])}
                            className={`px-2 py-1 text-[11px] font-semibold rounded capitalize transition-colors ${
                              shapeConfig.type === type
                                ? 'bg-cyan-500 text-white'
                                : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>

                      {/* Colors */}
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-500">Color:</span>
                        <div className="flex gap-1.5">
                          {['#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'].map((color) => (
                            <button
                              key={color}
                              onClick={() => updateColor(color)}
                              className={`w-4 h-4 rounded-full border transition-transform ${
                                shapeConfig.color === color ? 'scale-125 border-slate-700 dark:border-white' : 'border-transparent'
                              }`}
                              style={{ backgroundColor: color }}
                              aria-label={`Select ${color}`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Fill Mode */}
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500">Style:</span>
                        <button
                          onClick={toggleFill}
                          className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold"
                        >
                          {shapeConfig.isFilled ? 'Shaded Fill' : 'Wireframe'}
                        </button>
                      </div>

                      {/* Math Transforms */}
                      <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-2 text-[11px]">
                        <span className="text-slate-500">Math Transforms:</span>
                        <div className="flex gap-1">
                          <button
                            onClick={rotateCw}
                            title="Rotate 15 degrees"
                            className="p-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            <RotateCw className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={scaleUp}
                            title="Scale Up"
                            className="p-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            <ZoomIn className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={scaleDown}
                            title="Scale Down"
                            className="p-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            <ZoomOut className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-4 mt-auto border-t border-slate-100 dark:border-slate-850 pt-4">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 mr-1.5" />
                  Code Repository
                </a>
                
                {proj.isInteractive && (
                  <span className="flex items-center text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                    <Play className="w-3.5 h-3.5 mr-1" />
                    Live Sandbox Demo
                  </span>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
