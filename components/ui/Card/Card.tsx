"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
));
Card.displayName = "Card";

type direction = "up" | "down" | "left" | "right";

const FadingCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    direction: direction;
  }
>(({ className, direction, ...props }, _ref) => {
  const [animationClassName, setAnimationClassName] = React.useState("");
  const [viewRef, inView] = useInView(
    direction === "down" ? { rootMargin: "0px 0px 150px 0px" } : {},
  );

  const getDirection = (direction: direction) => {
    switch (direction) {
      case "up":
        return "opacity-0 -translate-y-full";
      case "down":
        return "opacity-0 translate-y-full";
      case "right":
        return "opacity-0 translate-x-full";
      case "left":
        return "opacity-0 -translate-x-full";
      default:
        return "opacity-0 translate-x-full";
    }
  };

  React.useEffect(() => {
    if (animationClassName !== "" && inView) {
      setAnimationClassName("");
    }
  }, [inView, animationClassName]);

  React.useEffect(() => {
    setAnimationClassName(getDirection(direction));
  }, [direction]);

  return (
    <Card
      ref={viewRef}
      className={cn(
        "transition-[transform,opacity] duration-fade",
        animationClassName !== ""
          ? animationClassName
          : "translate-x-[0%] translate-y-[0%]",
        className,
      )}
      {...props}
    />
  );
});
FadingCard.displayName = "FadingCard";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 px-6 py-3 pb-2", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute bottom-[3px] flex w-full flex-row justify-end px-4",
      className,
    )}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardDate = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-3xs", className)} {...props} />
));
CardDate.displayName = "CardDate";

export {
  Card,
  FadingCard,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardDate,
};
