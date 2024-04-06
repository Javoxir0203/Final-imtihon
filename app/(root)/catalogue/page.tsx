import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

import Map from '@/components/shared/map';
import Main from '@/components/shared/main';
import Cards from '@/components/shared/cards';
import Brand from '@/components/shared/brand';
import Inputs from '@/components/shared/inputs';
import Client from '@/components/shared/client';
import Catalog from '@/components/shared/catalog';
import Accordion from '@/components/shared/accordion';
import { Separator } from '@/components/ui/separator';
import CompanyInfo from '@/components/shared/company-info';
import { catalogue } from '@/constants';

const About = () => {
	const findCategoryDetail = catalogue.find(item => item.slug === 'ophthalmology');
	const first5Products = findCategoryDetail?.products.slice(0, 4);
	const second5Products = findCategoryDetail?.products.slice(4, 8);
	const threeProducts: any = findCategoryDetail?.products.slice(8, 9)[0];
	const fourProducts: any = findCategoryDetail?.products.slice(9, 10)[0];

	return (
		<>
			<div className='container mx-auto my-12 flex gap-4'>
				<div className='flex h-max flex-col gap-3 rounded border border-gray-500/20 p-4'>
					<h2 className={'text-xl'}>Направления</h2>
					<Separator className={'my-2'} />
					{catalogue.map((item, index) => (
						<Link href={`/catalogue/${item.slug}`} key={index} className='flex items-center justify-between gap-8'>
							<p className='font-light'>{item.title}</p>
							<ChevronRight className={'text-muted-foreground'} />
						</Link>
					))}
				</div>

				<div className='grid flex-1 grid-cols-3 gap-4'>
					<div className='col-span-2 grid grid-cols-2 gap-4'>
						{first5Products?.map((item, index) => (
							<Link href={`/catalogue/${findCategoryDetail?.slug}/${item.slug}`} key={index} className='flex h-[300px] w-full flex-col justify-between rounded-md border border-gray-500/20 bg-[#F8F7F3]'>
								<div className='relative flex flex-1 items-center justify-center rounded-md bg-[#fff]'>
									<Image src={item.image} className='rounded-md rounded-b-none object-cover object-center' alt={'imge'} fill />
								</div>
								<div className={'h-[50px]'}>
									<h2 className='py-4 text-center'>{item.title}</h2>
								</div>
							</Link>
						))}
					</div>

					<Link href={`/catalogue/${findCategoryDetail?.slug}/${threeProducts?.slug}`} className='col-span-1 flex flex-col rounded-md border border-gray-500/20 bg-[#F8F7F3]'>
						<div className='relative flex h-full w-full flex-1 items-center justify-center rounded-md bg-[#fff]'>
							<Image src={threeProducts?.image} className=' rounded-md rounded-b-none object-cover  ' alt={'image'} fill />
						</div>
						<h2 className='py-4 text-center'>{threeProducts?.title}</h2>
					</Link>

					<Link href={`/catalogue/${findCategoryDetail?.slug}/${fourProducts?.slug}`} className='col-span-1 flex flex-col rounded-md border border-gray-500/20 bg-[#F8F7F3]'>
						<div className='relative flex h-full w-full flex-1 items-center justify-center rounded-md bg-[#fff]'>
							<Image src={fourProducts?.image} className=' ounded-md rounded-b-none object-cover' alt={'image'} fill />
						</div>
						<h2 className='py-4 text-center'>{fourProducts?.title}</h2>
					</Link>

					<div className='col-span-2 grid grid-cols-2 gap-4'>
						{second5Products?.map((item, index) => (
							<Link href={`/catalogue/${findCategoryDetail?.slug}/${item.slug}`} key={index} className='flex h-[300px] w-full flex-col justify-between rounded-md border border-gray-500/20 bg-[#F8F7F3]'>
								<div className='relative flex flex-1 items-center justify-center rounded-md bg-[#fff]'>
									<Image src={item.image} className='rounded-md rounded-b-none object-cover object-center' alt={'imge'} fill />
								</div>
								<div className={'h-[50px]'}>
									<h2 className='py-4 text-center'>{item.title}</h2>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>

			<Main />
			<Cards />
			<Catalog />
			<Client />
			<Brand />
			<CompanyInfo />
			<Accordion />
			<Map />
			<Inputs />
		</>
	);
};

export default About;
