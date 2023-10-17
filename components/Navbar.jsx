import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<header className='w-full'>
			<nav className='nav'>
				<Link
					href='/'
					className='flex items-center gap-1'
				>
					<Image
						src='/logo.svg'
						alt='logo'
						width={27}
						height={27}
						className='img'
					/>
					<p className='pl-7 absolute w-[116px] h-[35px] not-italic font-semibold text-[28px] leading-[35px] text-white left-[180px] top-[20.5px]'>
						anchors
					</p>
				</Link>
				<div className='flex flex-row items-start gap-2.5 absolute w-[34px] h-4 rounded px-1.5 py-0.5 left-[306px] top-[20.5px] bg-[#cccccc] ml-2'>
					<p className='flex-none order-none grow-0 w-[22px] h-3 not-italic font-normal text-[10px] leading-3 text-[#232426]'>
						Beta
					</p>
				</div>
			</nav>
		</header>
	);
};
export default Navbar;

/* Frame 2 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// align-items: center;
// padding: 16px 144px;
// gap: 253px;

// position: absolute;
// width: 1367px;
// height: 76px;
// left: calc(50% - 1367px/2);
// top: 0px;

// background: #101010;

// /* Group 4 */

// margin: 0 auto;
// width: 196px;
// height: 35px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* image 2 */

// position: absolute;
// width: 22px;
// height: 22px;
// left: 166px;
// top: 27px;

// background: url(image.png);
// transform: matrix(-1, 0, 0, 1, 0, 0);

// /* anchors */

// position: absolute;
// width: 116px;
// height: 35px;
// left: 180px;
// top: 20.5px;

// font-family: 'Sora';
// font-style: normal;
// font-weight: 600;
// font-size: 28px;
// line-height: 35px;

// color: #FFFFFF;

// /* Frame 49 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 2px 6px;
// gap: 10px;

// position: absolute;
// width: 34px;
// height: 16px;
// left: 306px;
// top: 20.5px;

// background: #CCCCCC;
// border-radius: 4px;

// /* Beta */

// width: 22px;
// height: 12px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 10px;
// line-height: 12px;

// color: #232426;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 1000000958 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 20px;

// margin: 0 auto;
// width: 216px;
// height: 44px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 60 */

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-start;
// padding: 0px;
// gap: 20px;

// width: 216px;
// height: 44px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Frame 59 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 6px 20px;
// gap: 8px;

// display: none;
// width: 197px;
// height: 32px;

// border: 1px solid #FFFFFF;
// border-radius: 40px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Solid/Communication/Phone */

// width: 20px;
// height: 20px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Icon */

// position: absolute;
// left: 17.36%;
// right: 14.02%;
// top: 13.75%;
// bottom: 17.67%;

// background: #FFFFFF;

// /* Request a call back */

// width: 129px;
// height: 20px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 14px;
// line-height: 20px;
// /* identical to box height, or 143% */

// color: #FFFFFF;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Frame 60 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: center;
// padding: 10px 20px;
// gap: 8px;

// width: 216px;
// height: 44px;

// border-radius: 40px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;

// /* Solid/Communication/User */

// width: 20px;
// height: 20px;

// /* Inside auto layout */
// flex: none;
// order: 0;
// flex-grow: 0;

// /* Icon */

// position: absolute;
// left: 17.71%;
// right: 17.71%;
// top: 15.62%;
// bottom: 15.71%;

// /* Creator’s Login */

// width: 148px;
// height: 24px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 400;
// font-size: 20px;
// line-height: 24px;
// /* identical to box height, or 120% */

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
