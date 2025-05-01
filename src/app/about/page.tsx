import { Code } from 'lucide-react'
import Link from 'next/link'

import { BorderBeam } from '@/components/magicui/border-beam'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { ShineBorder } from '@/components/magicui/shine-border'
import { TextAnimate } from '@/components/magicui/text-animate'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import { BackgroundLines } from '../components/background-lines'
import { DockDemo } from '../components/dock'
import { ThreeDMarqueeDemoSecond } from '../components/marquee'

export default function About() {
	return (
		<div className='min-h-screen bg-gradient-to-b from-background to-muted/30'>
			<main>
				<DockDemo />
				{/* Hero Section */}
				<div className='relative'>
					<BackgroundLines className='flex sm:h-[200px] items-center justify-center w-full flex-col px-4'>
						<section className=' py-[60px] w-[85%] m-auto  flex flex-col items-center text-center'>
							<TextAnimate
								animation='blurInUp'
								by='character'
								once
								className='tracking-[2px] text-[30px] sm:text-4xl md:text-6xl font-bold mb-4'
							>
								Hi, I am Izzatullo
							</TextAnimate>

							<TextAnimate
								animation='blurInUp'
								by='character'
								once
								className='text-xl md:text-2xl text-muted-foreground max-w-[700px] mb-8'
							>
								Frontend Developer specializing in building exceptional digital
								experiences
							</TextAnimate>

							<div className='flex flex-col sm:flex-row gap-4'>
								<Link href='/projects'>
									<InteractiveHoverButton>View my works</InteractiveHoverButton>
								</Link>
							</div>
						</section>
					</BackgroundLines>
				</div>

				{/* About Section */}
				<section id='about' className='py-[60px] w-[85%] m-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div>
							<TextAnimate
								animation='blurInUp'
								by='character'
								once
								className='text-3xl font-bold tracking-tighter mb-4'
							>
								About me
							</TextAnimate>
							<TextAnimate
								animation='blurInUp'
								by='character'
								once
								className='text-muted-foreground mb-4'
							>
								Я начинающий Frontend-разработчик с большим интересом к
								веб-технологиям и вниманием к деталям. Уверенно работаю с HTML,
								CSS, JavaScript и React, постоянно расширяю свои знания и
								практикуюсь в создании современных, адаптивных интерфейсов.
							</TextAnimate>
							<TextAnimate
								animation='blurInUp'
								by='character'
								once
								className='text-muted-foreground mb-6'
							>
								Мой подход основан на стремлении к чистому коду, понятной
								структуре и удобному пользовательскому опыту. Я открыт к
								обучению, не боюсь новых задач и готов расти как специалист в
								сильной команде.
							</TextAnimate>

							<Link href='/contact'>
								<InteractiveHoverButton>Lets connect</InteractiveHoverButton>
							</Link>
						</div>
						<div className='relative flex items-center justify-center h-[400px] rounded-lg overflow-hidden'>
							<Image
								src='/photo_2025-04-28_14-57-20.jpg'
								width={400}
								height={100}
								alt='my foto'
							/>
						</div>
					</div>
				</section>

				{/* Skills Section */}
				<section id='skills' className='w-[85%] m-auto py-[60px]'>
					<h2 className='text-3xl font-bold tracking-tighter mb-8 text-center'>
						My Skills
					</h2>
					<Tabs defaultValue='frontend' className='w-full'>
						<TabsList className='grid w-full grid-cols-2 mb-8'>
							<TabsTrigger value='frontend'>Frontend</TabsTrigger>
							<TabsTrigger value='tools'>Tools & Others</TabsTrigger>
						</TabsList>
						<TabsContent value='frontend' className='space-y-4'>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
								{[
									'React',
									'Next.js',
									'TypeScript',
									'Tailwind CSS',
									'HTML5',
									'CSS3',
									'JavaScript',
									'Redux',
								].map(skill => (
									<Card key={skill} className='relative overflow-hidden'>
										<CardHeader className='p-4'>
											<CardTitle className='text-lg flex items-center gap-2'>
												<Code className='h-4 w-4' />
												{skill}
											</CardTitle>
										</CardHeader>
										<BorderBeam duration={8} size={100} />
									</Card>
								))}
							</div>
						</TabsContent>
						<TabsContent value='tools' className='space-y-4'>
							<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
								{['Git', 'GitHub', 'VS Code', 'Canva', 'Vercel', 'Figma'].map(
									skill => (
										<Card key={skill} className='relative overflow-hidden'>
											<ShineBorder
												shineColor={['#A07CFE', '#FE8FB5', '#FFBE7B']}
											/>
											<CardHeader className='p-4'>
												<CardTitle className='text-lg flex items-center gap-2'>
													<Code className='h-4 w-4' />
													{skill}
												</CardTitle>
											</CardHeader>
										</Card>
									)
								)}
							</div>
						</TabsContent>
					</Tabs>
				</section>

				{/* Projects Section */}
				<ThreeDMarqueeDemoSecond />
			</main>
		</div>
	)
}
