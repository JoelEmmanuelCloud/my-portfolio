import { Smartphone, Link2, Car, Zap, ShoppingBag, Building2, Package, Heart, Brain, Flame } from 'lucide-react'

const categoryConfig = {
  mobile: { color: '#059669', Icon: Smartphone, label: 'Mobile App' },
  blockchain: { color: '#2563eb', Icon: Link2, label: 'Blockchain / Web3' },
  ridehailing: { color: '#0284c7', Icon: Car, label: 'Ride Hailing' },
  defi: { color: '#4338ca', Icon: Zap, label: 'DeFi' },
  ecommerce: { color: '#ea580c', Icon: ShoppingBag, label: 'E-commerce' },
  enterprise: { color: '#475569', Icon: Building2, label: 'Enterprise' },
  logistics: { color: '#52525b', Icon: Package, label: 'Logistics' },
  healthcare: { color: '#0d9488', Icon: Heart, label: 'Healthcare' },
  ai: { color: '#7c3aed', Icon: Brain, label: 'AI / ML' },
  energy: { color: '#b45309', Icon: Flame, label: 'Power / Energy' },
}

const iconSizes = {
  hero: 72,
  card: 48,
  thumb: 16,
}

export default function ProjectCardVisual({ category = 'enterprise', size = 'card', align = 'center' }) {
  const { color, Icon, label } = categoryConfig[category] ?? categoryConfig.enterprise
  const iconSize = iconSizes[size] ?? iconSizes.card

  return (
    <div
      className={`relative flex h-full w-full justify-center overflow-hidden ${align === 'top' ? 'items-start pt-8 sm:pt-10' : 'items-center'}`}
      style={{ backgroundColor: color }}
    >
      <div className="flex select-none flex-col items-center gap-3 text-white">
        <Icon style={{ width: iconSize, height: iconSize }} strokeWidth={1.5} aria-hidden="true" />
        {size !== 'thumb' && (
          <span className={`font-medium text-white/80 ${size === 'hero' ? 'text-base' : 'text-sm'}`}>{label}</span>
        )}
      </div>
    </div>
  )
}
