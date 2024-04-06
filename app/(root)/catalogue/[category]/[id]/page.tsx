'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';

import { catalogue } from '@/constants';
import Main from '@/components/shared/main';
import Inputs from '@/components/shared/inputs';
import Brand from '@/components/shared/brand';
import { Button } from '@/components/ui/button';
import Catalog from '@/components/shared/catalog';
import Famous from '@/components/shared/famous';

const Detail = () => {
	const { id, category } = useParams();

	const findCategoryDetail = catalogue.find(item => item.slug === category);
	const findProduct = findCategoryDetail?.products.find(item => item.slug === id);

	return (
		<>
			<div className={'container mt-10'}>
				<div className={'flex items-center justify-between'}>
					<div className={'w-[760px] rounded-md border-2 border-black/10 bg-white p-6'}>
						<button className={'flex items-center rounded-[21px] border-2 border-[#0b8269] bg-[#0b8269]/10 px-2.5'}>Новинка</button>
						<div className={'flex items-center justify-center'}>
							<Image src={findProduct?.image as any} width={400} height={400} alt='' />
						</div>
						<div className={'flex items-center gap-3'}>
							<Image src={findProduct?.image as any} alt='1' width={50} height={50} className={'rounded-md border-2 border-[#0b8269] p-1'} />
							<Image src={findProduct?.image as any} alt='2' width={50} height={50} className={'rounded-md border-2 border-[#0b8269] p-1'} />
							<Image src={findProduct?.image as any} alt='3' width={50} height={50} className={'rounded-md border-2 border-[#0b8269] p-1'} />
						</div>
					</div>
					<div>
						<div className={'flex flex-col gap-2'}>
							<h1 className={'text-[30px]'}>{findProduct?.title}</h1>
							<ul className={'flex flex-col gap-1.5'}>
								<li className={'text-[12px] text-[#7A7687]'}>Категория: Лабораторное оборудование</li>
								<li className={'text-[12px] text-[#7A7687]'}>Производитель: Lorem</li>
								<li className={'text-[12px] text-[#7A7687]'}>Артикул: 213134</li>
								<li className={'text-[12px] text-[#7A7687]'}>В наличии</li>
							</ul>
							<span className={'text-[18px] font-bold'}>300 000 руб.</span>
							<div className={'mt-[20px] flex items-center gap-5'}>
								<Button className={'rounded-[21px] hover:bg-[#F8F7F3] bg-white border-2 border-[#0b8269] px-6 py-2.5 text-black'}>+ 1 -</Button>
								<Button className={'rounded-[21px] hover:bg-[#F8F7F3] bg-white border-2 border-[#0b8269] px-6 py-2.5 text-black'}>Задать вопрос</Button>
								<Button className={'rounded-[21px] hover:bg-green-800 bg-[#0b8269] px-8 py-2.5 text-white'}>Добавить в корзину</Button>
							</div>
							<div className={'mt-5 flex flex-col gap-5'}>
								<h3 className={'text-[18px] font-bold'}>О товаре</h3>
								<p className={'w-[500px]'}>Но синтетическое тестирование, в своём классическом представлении, допускает внедрение поэтапного и последовательного развития общества. В рамках спецификации современных стандартов, сторонники тоталитаризма в науке будут функционально разнесены.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Catalog />
			<Main />
			<Famous />
			<Brand />
			<Inputs />
		</>
	);
};

export default Detail;
