import { cn } from '@/lib/utils'

export default function Skeleton({ className }) {
  return <div aria-hidden="true" className={cn('skeleton', className)} />
}
