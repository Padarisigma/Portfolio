/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { Particles } from '@/components/magicui/particles'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { ShoppingBag } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { OrbitingCirclesDemo } from './components/circles'
import { Cover } from './components/cover'
import { DockDemo } from './components/dock'
import { ThreeDMarqueeDemoSecond } from './components/marquee'

export default function Home() {
	const { resolvedTheme } = useTheme()
	const [color, setColor] = useState('#ffffff')
	const features = [
		{
			Icon: ShoppingBag,
			name: 'Fast Cart',
			description: 'Web Shop with Next JS',
			href: '/projects',
			cta: 'Learn more',
			background: (
				<img
					src={'/81ad6a2f1135f5586ac2c0ffd114c53f.jpg'}
					className='w-[100%] absolute  -top-20 opacity-40'
				/>
			),
			className: '',
		},
		{
			Icon: InstagramLogoIcon,
			name: 'Instagram Clone',
			description: 'This project we did with team',
			href: '/projects',
			cta: 'Learn more',
			background: (
				<img
					src={'/8f86b261ed9a58e521ecafe640ea9bcc.jpg'}
					className='w-[100%] absolute  -top-20 opacity-40'
				/>
			),
			className: '',
		},
	]

	useEffect(() => {
		setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000')
	}, [resolvedTheme])
	return (
		<>
			<DockDemo />
			<main>
				<div className='relative flex sm:h-[500px] w-full flex-col items-center justify-center sm:overflow-hidden rounded-lg bg-background'>
					<section className='relative mt-[100px] overflow-hidden flex flex-col sm:flex-row w-[95%] sm:w-[85%] m-auto justify-between items-center'>
						<aside className='flex flex-col text-center sm:text-left gap-[20px] items-center sm:items-start'>
							<SparklesText className='text-[30px] sm:text-[50px]'>
								Doronshozoda Izzatullo
							</SparklesText>
							<p className='text-[18px]  sm:w-[500px]'>
								Я — программист, ориентированный на качество, производительность
								и чистый код. Работаю с современным стеком технологий и всегда
								стремлюсь к эффективным решениям.
							</p>
							<Link href={'/projects'}>
								<InteractiveHoverButton>
									Go to my projects
								</InteractiveHoverButton>
							</Link>
						</aside>
						<aside className='sm:w-[50%]'>
							<OrbitingCirclesDemo />
						</aside>
					</section>
					<Particles
						className='absolute inset-0 z-0'
						quantity={100}
						ease={80}
						color={color}
						refresh
					/>
				</div>

				<section className='w-[85%] m-auto pb-[40px] pt-[80px] flex flex-col gap-[40px]'>
					<div className='flex flex-col items-start gap-[20px]'>
						<Cover>
							{' '}
							<p className='text-[50px] px-[20px] tracking-[2px] font-semibold'>
								My projects
							</p>
						</Cover>
						<p className='sm:w-[600px] text-[18px]'>
							Here are some of the projects I have worked on. Each project has
							helped me develop different skills and overcome unique challenges.
						</p>
					</div>
					<BentoGrid className='grid grid-cols-2'>
						{features.map(feature => (
							<BentoCard key={feature.name} {...feature} />
						))}
					</BentoGrid>
				</section>
				<ThreeDMarqueeDemoSecond />
			</main>
		</>
	)
}
