import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Anchor",
	description: "Empowering creators to earn money from their content",
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`inter.className bg-[#101010]`}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
