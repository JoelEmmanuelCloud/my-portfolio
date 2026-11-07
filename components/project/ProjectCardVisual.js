import { Smartphone, Link2, Car, Zap, ShoppingBag, Building2, Package, Heart, Brain, Code, Flame } from 'lucide-react'

const categoryConfig = {
  mobile:     { from: '#059669', Icon: Smartphone,  label: 'Mobile App'       },
  blockchain: { from: '#2563eb', Icon: Link2,       label: 'Blockchain / Web3' },
  ridehailing:{ from: '#0284c7', Icon: Car,         label: 'Ride Hailing'     },
  defi:       { from: '#4338ca', Icon: Zap,         label: 'DeFi'             },
  ecommerce:  { from: '#ea580c', Icon: ShoppingBag, label: 'E-commerce'       },
  enterprise: { from: '#475569', Icon: Building2,   label: 'Enterprise'       },
  logistics:  { from: '#52525b', Icon: Package,     label: 'Logistics'        },
  healthcare: { from: '#0d9488', Icon: Heart,       label: 'Healthcare'       },
  ai:         { from: '#7c3aed', Icon: Brain,       label: 'AI / ML'          },
  energy:     { from: '#b45309', Icon: Flame,       label: 'Power / Energy'   },
}

export default function ProjectCardVisual({ category = 'enterprise', size = 'card', align = 'center' }) {
  const config = categoryConfig[category] ?? categoryConfig.enterprise
  const { from, Icon, label } = config

  const isHero = size === 'hero'
  const isThumb = size === 'thumb'
  const iconSize = isHero ? 72 : isThumb ? 16 : 48

  return (
    <div
      className={`w-full h-full relative overflow-hidden flex justify-center ${align === 'top' ? 'items-start pt-8 sm:pt-10' : 'items-center'}`}
      style={{ backgroundColor: from }}
    >
      <div className="relative flex flex-col items-center gap-3 select-none">
          <Icon
            style={{ width: iconSize, height: iconSize, color: 'white', opacity: 0.95 }}
            strokeWidth={1.5}
          />
        {!isThumb && <span
          className="font-semibold"
          style={{
            color: 'rgba(255,255,255,0.75)',
            fontSize: isHero ? 14 : 11,
          }}
        >
          {label}
        </span>}
      </div>
    </div>
  )
}
