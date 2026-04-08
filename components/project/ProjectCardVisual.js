import { Smartphone, Link2, Car, Zap, ShoppingBag, Building2, Package, Heart, Brain, Code } from 'lucide-react'

const categoryConfig = {
  mobile:     { from: '#059669', to: '#0d9488', Icon: Smartphone,  label: 'Mobile App'       },
  blockchain: { from: '#2563eb', to: '#4338ca', Icon: Link2,       label: 'Blockchain / Web3' },
  ridehailing:{ from: '#0284c7', to: '#0369a1', Icon: Car,         label: 'Ride Hailing'     },
  defi:       { from: '#4338ca', to: '#6d28d9', Icon: Zap,         label: 'DeFi'             },
  ecommerce:  { from: '#ea580c', to: '#b45309', Icon: ShoppingBag, label: 'E-commerce'       },
  enterprise: { from: '#475569', to: '#1e293b', Icon: Building2,   label: 'Enterprise'       },
  logistics:  { from: '#52525b', to: '#3f3f46', Icon: Package,     label: 'Logistics'        },
  healthcare: { from: '#0d9488', to: '#059669', Icon: Heart,       label: 'Healthcare'       },
  ai:         { from: '#7c3aed', to: '#4f46e5', Icon: Brain,       label: 'AI / ML'          },
}

export default function ProjectCardVisual({ category = 'enterprise', size = 'card' }) {
  const config = categoryConfig[category] ?? categoryConfig.enterprise
  const { from, to, Icon, label } = config

  const isHero = size === 'hero'
  const iconSize = isHero ? 72 : 48
  const dotSpacing = isHero ? 28 : 22

  return (
    <div
      className="w-full h-full relative overflow-hidden flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={`dots-${category}-${size}`} x="0" y="0" width={dotSpacing} height={dotSpacing} patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#dots-${category}-${size})`} />
      </svg>

      <div className="relative flex flex-col items-center gap-3 select-none">
        <div
          className="rounded-2xl flex items-center justify-center"
          style={{
            width: iconSize * 1.6,
            height: iconSize * 1.6,
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(4px)',
          }}
        >
          <Icon
            style={{ width: iconSize, height: iconSize, color: 'white', opacity: 0.95 }}
            strokeWidth={1.5}
          />
        </div>
        <span
          className="font-semibold tracking-wide uppercase"
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: isHero ? 14 : 11,
            letterSpacing: '0.1em',
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}
