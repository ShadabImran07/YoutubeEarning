"use client";

import ShowTable from "@/components/ShowTable";
// import { useEffect, useState } from "react";

// const ShowPage = () => {
// 	const [showData, setShowData] = useState([]);
// 	const [highScore, setHighScoreData] = useState(null);
// 	const getData = async () => {
// 		try {
// 			const response = await fetch("/api/allData");
// 			const data = await response.json();
// 			setShowData(data);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// 	const FindmaxData = () => {
// 		if (showData.length === 0) return null;
// 		let maxScore = -Infinity;
// 		let maxObject = null;
// 		for (const obj of showData) {
// 			if (obj.earningScore > maxScore) {
// 				maxScore = obj.earningScore;
// 				maxObject = obj;
// 			}
// 		}
// 		console.log("from max function", maxObject);
// 		setHighScoreData(maxObject);
// 	};
// 	useEffect(() => {
// 		getData();
// 		FindmaxData();
// 	}, []);

// 	useEffect(() => {
// 		FindmaxData();
// 		if (highScore) {
// 			const parts = highScore.title.split("|");
// 			let extractedTitle = parts[0].trim();
// 		} // Find and set max data after showData is updated
// 	}, [showData]);

// 	console.log(highScore);

// 	return (
// 		<>
// 			<div className='absolute w-full h-[359px] -left-px top-[76px]'>
// 				<div
// 					className='flex flex-row items-center gap-5 absolute w-[1079px] h-[266px] left-[calc(50%_-_1079px/2_+_1px)] top-[calc(50%_-_266px/2_-_0.5px)] px-10 py-5 rounded-2xl
//   bg-[#1e1e1e]'
// 				>
// 					<div className='flex flex-row items-center gap-10 w-[955px] h-[226px] p-0'>
// 						<div className='flex flex-row items-center gap-5 w-[529px] h-[226px] p-0'>
// 							<div className='flex flex-col items-start gap-5 w-[254px] h-[226px] p-0'>
// 								<div className='flex flex-row items-center gap-1 w-[172px] h-8 rounded px-2 py-1 bg-[#707070]'>
// 									<img
// 										src='/top.svg'
// 										alt='top'
// 									/>
// 									<p className='w-30 h-5 not-italic font-normal text-base leading-5 text-white'>
// 										Top earner video
// 									</p>
// 								</div>

// 								<img
// 									className='w-60 h-[135px] rounded-[10px]'
// 									src={highScore.thumbnailUrl}
// 									alt='image'
// 								/>

// 								<p className='w-[227px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
// 									Uploaded on - June 23, 2023
// 								</p>
// 							</div>
// 							<div className='flex flex-col items-start gap-[11px] w-[255px] h-[157px] p-0'>
// 								<div className='flex-none order-1 grow-0'>
// 									<p className=' w-[255px] h-[50px] not-italic font-medium text-xl leading-6 text-white'>
// 										{extractedTitle}
// 									</p>
// 									<div className='flex flex-row items-start gap-3 w-[93px] h-10 p-0 pt-2'>
// 										<img
// 											src='eye.svg'
// 											alt='eye'
// 										/>
// 										<div className='flex-none order-1 grow-0'>
// 											<p className='w-[60px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
// 												{highScore.viewCount}
// 											</p>
// 										</div>
// 									</div>
// 									<div className='flex flex-row items-start gap-3 w-[93px] h-10 p-0'>
// 										<img
// 											src='like.svg'
// 											alt='eye'
// 										/>
// 										<div className='flex-none order-1 grow-0'>
// 											<p className='w-[60px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
// 												{highScore.likeCount}
// 											</p>
// 										</div>
// 									</div>
// 									<div className='flex flex-row items-start gap-3 w-[93px] h-10 p-0'>
// 										<img
// 											src='commnet.svg'
// 											alt='eye'
// 										/>
// 										<div className='flex-none order-1 grow-0'>
// 											<p className='w-[60px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
// 												{highScore.commentCount}
// 											</p>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 						<div className='flex flex-col items-start gap-2.5 w-[386px] h-[200px] px-5 py-10 rounded-2xl bg-[#282828]'>
// 							<div className='flex flex-col items-center gap-6 w-[346px] h-[120px] p-0'>
// 								<div className='flex flex-row items-center w-[173px] h-12 p-0'>
// 									<img
// 										src='/ruppes.svg'
// 										alt='ruppes'
// 									/>
// 									<p className='w-[133px] h-12 not-italic font-bold text-[40px] leading-[48px] text-white'>
// 										{highScore.earningScore}
// 									</p>
// 								</div>
// 								<div className='flex-row justify-center items-center gap-2.5 w-[143px] h-12 px-6 py-[18px] rounded-[35px] bg-[#ffffff]'>
// 									<button className='text-center'>
// 										<p className="className='w-[95px] h-[19px] not-italic font-normal text-base leading-[19px] text-center text-[#121212]">
// 											check How?
// 										</p>
// 									</button>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='absolute w-[227px] h-7 left-[calc(50%_-_227px/2_-_26px)] top-[calc(50%_-_28px/2_+_85px)] not-italic font-medium text-xl leading-7 text-[rgba(255,255,255,0.7)]'>
// 				<p>Other Videos Potentils</p>
// 			</div>
// 			<div className='absolute w-[1079px] h-[81px] left-[calc(50%_-_1079px/2)] top-[503px] bg-[#1e1e1e]'>
// 				<ShowTable />
// 			</div>
// 		</>
// 	);
// };

// export default ShowPage;
import React, { useState, useEffect } from "react";

function ShowPage() {
	const [showData, setShowData] = useState([]);
	const [highScore, setHighScoreData] = useState(null);

	const getData = async () => {
		try {
			const response = await fetch("/api/allData");
			const data = await response.json();
			setShowData(data);
		} catch (error) {
			console.log(error);
		}
	};

	const findMaxData = () => {
		if (showData.length === 0) return null;
		let maxScore = -Infinity;
		let maxObject = null;
		for (const obj of showData) {
			if (obj.earningScore > maxScore) {
				maxScore = obj.earningScore;
				maxObject = obj;
			}
		}
		console.log("from max function", maxObject);
		setHighScoreData(maxObject);
	};

	useEffect(() => {
		getData();
	}, []);

	useEffect(() => {
		findMaxData();
	}, [showData]);

	console.log(highScore);

	let extractedTitle = highScore ? highScore.title.split("|")[0].trim() : "";

	return (
		<>
			{highScore && (
				<div className='absolute w-full h-[359px] -left-px top-[76px]'>
					<div className='flex flex-row items-center gap-5 absolute w-[1079px] h-[266px] left-[calc(50%_-_1079px/2_+_1px)] top-[calc(50%_-_266px/2_-_0.5px)] px-10 py-5 rounded-2xl bg-[#1e1e1e]'>
						<div className='flex flex-row items-center gap-10 w-[955px] h-[226px] p-0'>
							<div className='flex flex-row items-center gap-5 w-[529px] h-[226px] p-0'>
								<div className='flex flex-col items-start gap-5 w-[254px] h-[226px] p-0'>
									<div className='flex flex-row items-center gap-1 w-[172px] h-8 rounded px-2 py-1 bg-[#707070]'>
										<img
											src='/top.svg'
											alt='top'
										/>
										<p className='w-30 h-5 not-italic font-normal text-base leading-5 text-white'>
											Top earner video
										</p>
									</div>
									<img
										className='w-60 h-[135px] rounded-[10px]'
										src={highScore.thumbnailUrl}
										alt='image'
									/>
									<p className='w-[227px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
										Uploaded on - June 23, 2023
									</p>
								</div>
								<div className='flex flex-col items-start gap-[11px] w-[255px] h-[157px] p-0'>
									<div className='flex-none order-1 grow-0'>
										<p className=' w-[255px] h-[50px] not-italic font-medium text-xl leading-6 text-white'>
											{extractedTitle}
										</p>
										<div className='flex flex-row items-start gap-3 w-[93px] h-10 p-0 pt-2'>
											<img
												src='eye.svg'
												alt='eye'
											/>
											<div className='flex-none order-1 grow-0'>
												<p className='w-[60px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
													{highScore.viewCount}
												</p>
											</div>
										</div>
										<div className='flex flex-row items-start gap-3 w-[93px] h-10 p-0'>
											<img
												src='like.svg'
												alt='eye'
											/>
											<div className='flex-none order-1 grow-0'>
												<p className='w-[60px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
													{highScore.likeCount}
												</p>
											</div>
										</div>
										<div className='flex flex-row items-start gap-3 w-[93px] h-10 p-0'>
											<img
												src='commnet.svg'
												alt='eye'
											/>
											<div className='flex-none order-1 grow-0'>
												<p className='w-[60px] h-[19px] not-italic font-normal text-base leading-[19px] text-[rgba(255,255,255,0.5)]'>
													{highScore.commentCount}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='flex flex-col items-start gap-2.5 w-[386px] h-[200px] px-5 py-10 rounded-2xl bg-[#282828]'>
								<div className='flex flex-col items-center gap-6 w-[346px] h-[120px] p-0'>
									<div className='flex flex-row items-center w-[173px] h-12 p-0'>
										<img
											src='/ruppes.svg'
											alt='ruppes'
										/>
										<p className='w-[133px] h-12 not-italic font-bold text-[40px] leading-[48px] text-white'>
											{highScore.earningScore}
										</p>
									</div>
									<div className='flex-row justify-center items-center gap-2.5 w-[143px] h-12 px-6 py-[18px] rounded-[35px] bg-[#ffffff]'>
										<button className='text-center'>
											<p className='w-[95px] h-[19px] not-italic font-normal text-base leading-[19px] text-center text-[#121212]'>
												check How?
											</p>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className='absolute w-[227px] h-7 left-[calc(50%-_227px/2-26px)] top-[calc(50%-28px/2+85px)] not-italic font-medium text-xl leading-7 text-[rgba(255,255,255,0.7)]'>
				<p>Other Videos Potentials</p>
			</div>

			<div className='absolute w-[1079px] h-[81px] left-[calc(50%-1079px/2)] top-[503px] bg-[#1e1e1e]'>
				<ShowTable />
			</div>
		</>
	);
}

export default ShowPage;
