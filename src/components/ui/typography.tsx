import { cn } from "@/lib/utils";

export function H1({ className, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "scroll-m-20 mb-8 text-4xl font-extrabold tracking-tight text-balance",
        className,
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-4 text-3xl font-semibold tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
      {...props}
    />
  );
}

export function P({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("leading-7 mb-4", className)} {...props} />;
}
