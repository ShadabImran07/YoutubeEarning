"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
	const [searchVal, setSearchVal] = useState("");
	const router = useRouter();
	const submitHandler = async (e) => {
		console.log(searchVal);
		const url = new URL(searchVal);
		const videoId = url.searchParams.get("v");
		console.log(videoId);
		try {
			const response = await fetch(`/api/score/${videoId}`);
		} catch (error) {
			console.log(error);
		}
		router.push("/show-page");
	};
	return (
		<>
			<main className='flex flex-col items-start gap-[60px] absolute w-[713px] h-[348px] left-[calc(50%_-_713px/2)] top-[calc(50%_-_348px/2_-_76px)] p-0;'>
				<section className='flex flex-col items-center gap-6 w-[713px] h-60 p-0'>
					<p className='flex-none order-none grow-0 w-[741px] h-36 not-italic font-bold text-[50px] leading-[72px] text-center text-white'>
						Discover your earning potential
					</p>
					<div className='flex-none order-1 grow-0'>
						<p className='w-[583px] h-[72px] not-italic font-normal text-2xl leading-9 text-center text-[rgba(255,255,255,0.8)]'>
							Turn your Youtube expertise into a lucrative income through
							resource sharing
						</p>
					</div>
				</section>
				<section className='flex flex-row items-center gap-5 w-[713px] h-12 p-0'>
					<div className='flex-none order-0 grow-1'>
						<div className='flex flex-row items-center gap-2.5 w-[535px] h-12 border px-[39px] py-3 rounded-[10000px] border-solid border-[rgba(255,255,255,0.5)]'>
							<div className='flex-none order-0 grow-0 w-6 h-6'>
								<img
									className='object-contain w-full h-full'
									src='/youtube.svg'
									alt='youtube'
								/>
							</div>
							<div className='flex-none order-1 grow-1 w-[423px] h-6'>
								<input
									className='w-full h-full bg-transparent border-none outline-none text-white'
									type='text'
									placeholder='enter youtube video link'
									onChange={(e) => setSearchVal(e.target.value)}
								/>
							</div>
						</div>
					</div>
					<div className='flex flex-row justify-center items-center gap-2.5 w-[158px] h-12 px-6 py-[18px] rounded-[35px] bg-[#ff2020]'>
						<div className='flex-none order-1 grow-0'>
							<button
								className=' w-[110px] h-[19px] not-italic font-normal text-base leading-[19px] text-white'
								onClick={submitHandler}
							>
								check Earning
							</button>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;

// /* Frame 3 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 12px 39px;
// gap: 10px;

// width: 535px;
// height: 48px;

// border: 1px solid rgba(255, 255, 255, 0.5);
// border-radius: 10000px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 1;

// /* mdi:youtube */

// width: 24px;
// height: 24px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Vector */

// position: absolute;
// left: 8.33%;
// right: 8.33%;
// top: 20.83%;
// bottom: 20.83%;

// background: rgba(180, 180, 180, 0.8);

// /* enter youtube video link */

// width: 423px;
// height: 24px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;

// color: #373737;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 1;

// /* Btn red Red */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 18px 24px;
// gap: 10px;

// width: 158px;
// height: 48px;

// background: #FF2020;
// border-radius: 35px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Button Title */

// width: 110px;
// height: 19px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 16px;
// line-height: 19px;

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;
