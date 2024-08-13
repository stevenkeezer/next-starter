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
    <Button onClick={handleClick} className={cn(buttonVariants({ size: "lg" }), "shadow hover:bg-slate-100 active:bg-slate-100 bg-slate-100 text-slate-700 z-40")}>
      <span className="font-medium">Get in touch</span> <ArrowRight className="ml-2 h-4 w-4 text-blue-400" />
    </Button>
  )
}
