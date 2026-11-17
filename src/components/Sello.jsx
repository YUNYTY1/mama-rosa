import { Flame } from 'lucide-react'

// Sello circular "A LA BRASA · DESDE SIEMPRE" (decorativo)
export default function Sello({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false">
      <defs>
        <path id="sello-top" d="M 28,100 A 72,72 0 0 1 172,100" />
        <path id="sello-bottom" d="M 18,100 A 82,82 0 0 0 182,100" />
      </defs>

      <g className="animate-spin-slow" style={{ transformOrigin: '100px 100px' }}>
        <circle cx="100" cy="100" r="96" fill="rgba(0,0,0,0.35)" stroke="#F6B21B" strokeWidth="1.5" strokeDasharray="2 4" />
        <text fill="#F6B21B" fontSize="17" fontWeight="600" letterSpacing="4" textAnchor="middle" fontFamily="Poppins, sans-serif">
          <textPath href="#sello-top" startOffset="50%">A LA BRASA</textPath>
        </text>
        <text fill="#F6B21B" fontSize="17" fontWeight="600" letterSpacing="4" textAnchor="middle" fontFamily="Poppins, sans-serif">
          <textPath href="#sello-bottom" startOffset="50%">DESDE SIEMPRE</textPath>
        </text>
      </g>

      <circle cx="100" cy="100" r="58" fill="none" stroke="#F6B21B" strokeWidth="1.5" />
      <Flame
        x="70"
        y="70"
        width="60"
        height="60"
        stroke="#C4141C"
        fill="#C4141C"
        strokeWidth="1.5"
        className="animate-flicker"
        style={{ transformOrigin: '100px 128px' }}
      />
    </svg>
  )
}