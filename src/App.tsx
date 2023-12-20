// react imports
import { useState } from "react";

// components
import Form from "./components/Form";

function App() {
	const [calculatedAge, setCalculatedAge] = useState({
		years: "- -",
		months: "- -",
		days: "- -",
	});

	return (
		<main className="flex flex-col items-center justify-center h-screen bg-neutral-offWhite font-poppins">
			<section className="bg-white md:w-[600px] rounded-t-3xl rounded-bl-3xl rounded-br-[110px] w-[400px]">
				<Form onCalculateAge={setCalculatedAge} />
				<div className="flex flex-col items-start gap-2 pb-10 pl-5 md:">
					<div>
						<span className="text-6xl italic font-extrabold text-primary-purple">
							{calculatedAge.years}
						</span>
						<span className="pl-4 text-6xl italic font-extrabold">years</span>
					</div>
					<div>
						<span className="text-6xl italic font-extrabold text-primary-purple">
							{calculatedAge.months}
						</span>
						<span className="pl-4 text-6xl italic font-extrabold">months</span>
					</div>
					<div>
						<span className="text-6xl italic font-extrabold text-primary-purple">
							{calculatedAge.days}
						</span>
						<span className="pl-4 text-6xl italic font-extrabold">days</span>
					</div>
				</div>
			</section>
			<div className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href="https://github.com/replayzor" target="_blank">
					Ionut Oltean
				</a>
				.
			</div>
		</main>
	);
}

export default App;
