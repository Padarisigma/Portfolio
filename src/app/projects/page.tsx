/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
'use client'
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid'
import { Particles } from '@/components/magicui/particles'
import { InstagramLogoIcon } from '@radix-ui/react-icons'
import { ShoppingBasket, ShoppingCart } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Cover } from '../components/cover'

const Projects = () => {
	const { resolvedTheme } = useTheme()
	const [color, setColor] = useState('#ffffff')
	useEffect(() => {
		setColor(resolvedTheme === 'dark' ? '#ffffff' : '#000000')
	}, [resolvedTheme])
	const features = [
		{
			Icon: ShoppingBasket,
			name: 'Admin of Fast Cart',
			description:
				'Что могу сказать об этом проекте только то что это админная часть Fast Cart, тут я тоже работал с базой данных в некотором не было всего, делал исходя из того какие запросы были',
			href: '#',
			cta: 'Learn more',
			background: (
				<img
					src={'/b7f731f5c2724435a994833a6bd00657 (1).jpg'}
					className='w-[100%] absolute top-[30px] opacity-80'
				/>
			),
			className: 'lg:row-start-1 lg:row-end-4 lg:col-start-3 lg:col-end-4',
		},
		{
			Icon: InstagramLogoIcon,
			name: 'Instagram Clone',
			description:
				'Этот проект мы делали вместе с командой, так что мне попалось часть поиска, мы делали все исходя из базы данных, но в этой базе данных не было всего, так что возможны некоторые нюансы или недоделки',
			href: 'https://github.com/Kholmurod02/instagram',
			cta: 'Learn more',
			background: (
				<img
					src={'/80ae320edae5589026034e04b51cb830.jpg'}
					className='w-[100%]  absolute  top-[30px] opacity-80'
				/>
			),
			className: ' lg:col-start-1 lg:col-end-3 lg:row-start-1 lg:row-end-3',
		},
		{
			Icon: ShoppingCart,
			name: 'Fast Cart',
			description:
				'Так, это мой первый большой проект, который на курсе JS мы делали командой мне тогда выпала часть основной страницы, но на данный момент все сделал сам, есть нюансы, к примеру самый основной - это база данных в которой не было много чего и пришлось делать из того что было.',
			href: 'https://fast-cart-solo-izatullo-doronshozodas-projects.vercel.app/ru',
			cta: 'Learn more',
			background: (
				<img
					src={'/65d294a4d96e5a6001f41aeffddfd91c.jpg'}
					className='w-[100%] absolute  -top-20 opacity-80'
				/>
			),
			className: 'lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4',
		},
	]
	return (
		<main>
			<section className='w-[85%] relative m-auto py-[60px] flex flex-col gap-[50px] '>
				<div className='flex  flex-col py-[40px]  items-center text-center gap-[20px]'>
					<Cover className='w-full'>
						{' '}
						<p className='text-[50px]  px-[20px] tracking-[3px] font-semibold'>
							My projects
						</p>
					</Cover>
					<p className='sm:w-[600px] text-[18px]'>
						Here are some of the projects I have worked on. Each project has
						helped me develop different skills and overcome unique challenges.
					</p>
				</div>

				<BentoGrid className='lg:grid-rows-3'>
					{features.map(feature => (
						<BentoCard key={feature.name} {...feature} />
					))}
				</BentoGrid>
				<Particles
					className='absolute inset-0 z-0'
					quantity={100}
					ease={80}
					color={color}
					refresh
				/>
			</section>
		</main>
	)
}

export default Projects
