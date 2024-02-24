import { Text } from "rizzui";
import cn from "@/hooks/class-names";

export default function FormBlockWrapper({
  title,
  description,
  children,
  className
}: React.PropsWithChildren<{
  title: string;
  description?: string;
  className?: string;
}>) {
  return (
    <section className={cn("@5xl:grid @5xl:grid-cols-6", className)}>
      <header className='col-span-2 mb-4 @5xl:mb-0'>
        <h3 className='text-lg font-semibold'>{title}</h3>
        {description ? <Text className='mt-1 text-sm text-gray-500'>{description}</Text> : null}
      </header>
      <div className='col-span-4 space-y-4'>{children}</div>
    </section>
  );
}
