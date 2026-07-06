import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98] transition-all",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:scale-[0.98] transition-all",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground active:scale-[0.98] transition-all",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:scale-[0.98] transition-all",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        navCta: "text-foreground bg-nav-button hover:bg-nav-button/80 active:scale-[0.97] transition-all font-semibold rounded-lg uppercase tracking-widest text-[10px] sm:text-xs",
        hero: "bg-primary text-primary-foreground font-bold px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm hover:brightness-110 transition-all active:scale-[0.97]",
        heroOutline: "bg-white text-background font-bold px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm hover:brightness-90 transition-all active:scale-[0.97]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // If asChild is true, we could use Slot if Radix slot was installed, but since we want to avoid extra dependencies, we will just use a standard button.
    const Comp = "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
