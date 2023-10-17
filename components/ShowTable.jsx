const ShowTable = () => {
	return (
		<>
			<table className='border-collapse w-full'>
				<thead>
					<tr>
						<th className='w-10 text-white bg-[#1E1E1E] text-center p-4'>
							Rank
						</th>
						<th className='w-9 text-white bg-[#1E1E1E] text-center p-4'>
							Title
						</th>
						<th className='w-[84px] text-white bg-[#1E1E1E] text-center p-4'>
							Thumbnail
						</th>
						<th className='w-[49px] text-white bg-[#1E1E1E] text-center p-4'>
							Views
						</th>
						<th className='w-[41px] text-white bg-[#1E1E1E] text-center p-4'>
							Likes
						</th>
						<th className='w-[77px] text-white bg-[#1E1E1E] text-center p-4'>
							Comment
						</th>
						<th className='w-[99px] text-white bg-[#1E1E1E] text-center p-4'>
							Uploaded on
						</th>
						<th className='w-[152px] text-white bg-[#1E1E1E] text-center p-4'>
							*Estimated Earning
						</th>
					</tr>
				</thead>

				<tbody className='mt-4'>
					<tr>
						<td className='w-10 h-[19px] text-white bg-black-500 text-center p-4'>
							1
						</td>
						<td className='w-9 h-[19px] text-white bg-black-500 text-center p-4'>
							Example Title
						</td>
						<td className='w-[84px] text-white bg-black-500 text-center p-4'>
							[Thumbnail]
						</td>
						<td className='w-[49px] text-white bg-black-500 text-center p-4'>
							1000
						</td>
						<td className='w-[41px] text-white bg-black-500 text-center p-4'>
							500
						</td>
						<td className='w-[77px] text-white bg-black-500 text-center p-4'>
							50
						</td>
						<td className='w-[99px] text-white bg-black-500 text-center p-4'>
							2023-10-17
						</td>
						<td className='w-[152px] text-white bg-black-500 text-center p-4'>
							$1000
						</td>
					</tr>
					{/* Add more rows as needed */}
				</tbody>
			</table>
		</>
	);
};

export default ShowTable;
