import { motion } from 'framer-motion';

export default function NexiraDigitalGrid({ opacity = 0.15, className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#3B82F6" strokeWidth="0.5" opacity="0.3">
          {[...Array(13)].map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
          ))}
        </g>
        <g stroke="#3B82F6" strokeWidth="1.5" opacity="0.5">
          <path d="M200 700 L200 100 L1000 700 L1000 100" fill="none" />
        </g>
        <g fill="#3B82F6">
          {[
            [200, 700], [200, 100], [1000, 700], [1000, 100],
            [400, 300], [600, 500], [800, 200], [300, 600],
            [700, 400], [500, 200],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
          ))}
        </g>
        <motion.path
          d="M200 700 L200 100 L1000 700 L1000 100"
          stroke="#60A5FA"
          strokeWidth="2"
          fill="none"
          strokeDasharray="20 1180"
          animate={{ strokeDashoffset: [0, -1200] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
