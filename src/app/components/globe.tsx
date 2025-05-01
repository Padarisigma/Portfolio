import { Globe } from "@/components/magicui/globe"

export function GlobeDemo() {
  return (
    <div className="relative flex  size-full  h-[700px] max-w-full justify-center rounded-lg border bg-background px-40 pb-40 pt-0 md:pb-60">
		<div>
		<span className="pointer-events-none pt-[50px] whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Doronshozoda Izatullo
      </span>
		</div>
		<div className='relative top-0'>
			<Globe className="top-28" />
		</div>
     
      
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div>
  );
}
