/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/cFB11gemRHf
 */

export function Home() {
	return (
		<div
			key="1"
			className="bg-[#FECA2B] text-black font-['Alegreya'] min-h-screen flex flex-col items-center justify-center"
		>
			<ScaleIcon className="h-24 w-24 text-black mb-4" />
			<h1 className="text-4xl font-bold mb-2">Equitable AI</h1>
			<p className="text-xl mb-4 font-['Helvetica']">
				Raising awareness for fair, impartial and inclusive use of
				Artificial Intelligence.
			</p>
			<div className="flex flex-col items-center">
				<p className="mb-2">Join our mailing list:</p>
				<div className="bg-white shadow-sm rounded-lg w-80">
					<input
						aria-label="Email"
						className="px-3 py-2 w-full rounded-lg"
						placeholder="Enter your email"
						type="email"
					/>
					<button className="bg-black text-white px-4 py-2 rounded-lg w-full mt-2 hover:bg-gray-800 transition-colors duration-200">
						Subscribe!
					</button>
				</div>
			</div>
		</div>
	);
}

function ScaleIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
			<path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
			<path d="M7 21h10" />
			<path d="M12 3v18" />
			<path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
		</svg>
	);
}
