'use client';
import { useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { accordion_carousel_data } from '@/constants';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Button } from '../ui/button';
const Accordion = () => {
	const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));
	return (
		<div>
			<div className='container bg-[#F8F7F3]  overflow-x-hidden flex gap-24 py-12'>
				<div className='min-w-max'>
					<h2 className='text-2xl font-bold mb-4'>Новости компании</h2>
				</div>

				<div className='flex-1 '>
					<Carousel plugins={[plugin.current]} opts={{ align: 'start', loop: true, duration: 50 }} className='w-full'>
						<CarouselContent>
							{accordion_carousel_data.map((item, index) => (
								<CarouselItem key={index} className='basis-1/3 min-h-[30vh] border-none'>
									<div className='h-full flex flex-col rounded-md border-[1px] border-gray-500/50'>
										<div className='relative bg-white border-b-[1px] border-gray-500/50 h-full rounded-md rounded-b-none flex-3 flex items-center justify-center'>
											<Image className='object-cover !w-full !h-[220px]' src={item.image} alt={item.title} />
										</div>
										<p className='text-md max-w-[80%] font-normal px-4 p-1 flex flex-wrap flex-1'>{item.price}</p>
										<h2 className='text-md max-w-[80%] font-normal px-4 p-1 flex flex-wrap flex-1'>{item.title}</h2>
										<p className='text-md font-normal px-4 p-1 flex flex-wrap flex-1'>{item.description}</p>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<div className={'flex items-center my-8 gap-24'}>
							<div className={' relative left-0'}>
								<CarouselPrevious className={'absolute right-0 '} />
								<CarouselNext className={'absolute left-0'} />
							</div>
							<Button className={'border rounded-full bg-green-600 py-2 w-40 hover:bg-green-800 text-white'}>Bce новости</Button>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Accordion;
