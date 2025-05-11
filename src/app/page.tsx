import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-(family-name:--font-geist-sans)">
      <h1>Resumir</h1>
      <Button variant={'outline'}>Click me i am button</Button>
    </div>
  );
}
