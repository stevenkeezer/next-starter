'use client';

import { Button, buttonVariants } from '@/components/ui/button' // Update this import to match your button variants
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

export function SeeOurWorkButton() {
    const handleScroll = (sectionId: any) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <Button onClick={() => handleScroll('portfolio')} style={{ cursor: 'pointer' }} variant="ghost" size="lg" className="z-40 bg-white/5 backdrop-blur-lg text-slate-600">
            See our work <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
    )
}
