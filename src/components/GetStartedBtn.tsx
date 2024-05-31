'use client';

import { Button, buttonVariants } from '@/components/ui/button' // Update this import to match your button variants
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export function GetStartedButton() {
  const handleClick = () => {
    const params = new URLSearchParams(window.location.search)
    params.set('open', 'dialog')
    window.history.pushState(null, '', `?${params.toString()}`)
  }

  return (
    <Button onClick={handleClick} className={cn(buttonVariants({ size: "lg" }), "shadow z-40")}>
      <span className="font-medium">Get started</span> <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}
