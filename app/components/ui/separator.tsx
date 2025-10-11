'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Separator({ className, orientation = 'horizontal', ...props }: React.ComponentProps<'div'> & { orientation?: 'horizontal' | 'vertical' }) {
  return (
    <div
      role="separator"
      data-slot="separator"
      data-orientation={orientation}
      className={cn(
        orientation === 'vertical'
          ? 'bg-border w-px shrink-0'
          : 'bg-border h-px w-full',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }