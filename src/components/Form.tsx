// library imports
import { SubmitHandler, useForm } from "react-hook-form";

// helpers
import { validateDay } from "../utils/helpers";
import { FormProps, CalculateAgeProps } from "../utils/types";

function Form({ onCalculateAge }: CalculateAgeProps) {
	const {
		register,
		handleSubmit,
		resetField,
		formState: { errors },
	} = useForm<FormProps>();

	const onSubmit: SubmitHandler<FormProps> = (data) => {
		const { day, month, year } = data;

		const dayNumber = parseInt(day, 10);
		const monthNumber = parseInt(month, 10);
		const yearNumber = parseInt(year, 10);

		if (isNaN(dayNumber) || isNaN(monthNumber) || isNaN(yearNumber)) {
			console.error("Invalid date input");
			return;
		}

		const enteredDate = new Date(yearNumber, monthNumber - 1, dayNumber); // Month is 0-based in JavaScript Date object

		const currentDate = new Date();
		const ageInMilliseconds = currentDate.getTime() - enteredDate.getTime();

		const millisecondsInDay = 24 * 60 * 60 * 1000;
		const millisecondsInMonth = 30.44 * millisecondsInDay;
		const millisecondsInYear = 365.25 * millisecondsInDay;

		const years = Math.floor(ageInMilliseconds / millisecondsInYear);
		const remainingMonths = Math.floor(
			(ageInMilliseconds % millisecondsInYear) / millisecondsInMonth
		);
		const remainingDays = Math.floor(
			(ageInMilliseconds % millisecondsInMonth) / millisecondsInDay
		);

		onCalculateAge({
			years: years.toString(),
			months: remainingMonths.toString(),
			days: remainingDays.toString(),
		});
		console.log(data);

		resetField("day");
		resetField("month");
		resetField("year");
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col pt-10 justify-evenly w-[375px] md:w-[500px] md:justify-start items-center"
		>
			<div className="grid grid-cols-3 gap-12 text-neutral-smokeyGrey font-bold tracking-widest px-10 text-[14px]">
				<label
					className={`flex flex-col uppercase ${
						errors.day ? "text-red-500" : ""
					}`}
				>
					Day
					<input
						{...register("day", {
							required: "This field is required",
							validate: (value) => validateDay(value),
						})}
						placeholder="DD"
						className={`w-[100px] focus:outline-primary-purple text-xl border-2 text-neutral-offBlack rounded-md py-2 px-4 ${
							errors.day ? "focus:outline-red-500" : ""
						}`}
					/>
					{errors.day && (
						<span className="text-[10px] italic font-medium text-red-500 normal-case">
							{errors.day.message}
						</span>
					)}
				</label>
				<label
					className={`flex flex-col uppercase ${
						errors.month ? "text-red-500" : ""
					}`}
				>
					Month
					<input
						{...register("month", {
							required: "This field is required",
							pattern: {
								value: /^(0?[1-9]|1[0-2])$/,
								message: "Must be a valid month (1-12)",
							},
						})}
						placeholder="MM"
						className={`w-[100px] text-neutral-offBlack focus:outline-primary-purple text-xl border-2 rounded-md py-2 px-4 ${
							errors.month ? "focus:outline-red-500" : ""
						}`}
					/>
					{errors.month && (
						<span className="text-[10px] italic font-medium text-red-500 normal-case">
							{errors.month.message}
						</span>
					)}
				</label>
				<label
					className={`flex flex-col uppercase ${
						errors.year ? "text-red-500" : ""
					}`}
				>
					Year
					<input
						{...register("year", {
							required: "This field is required",
							validate: (value) => {
								const currentYear = new Date().getFullYear();
								const enteredYear = parseInt(value, 10);

								if (isNaN(enteredYear) || enteredYear > currentYear) {
									return "Must be a valid past year";
								}

								return true;
							},
						})}
						placeholder="YYYY"
						className={`w-[100px] text-neutral-offBlack focus:outline-primary-purple text-xl border-2 rounded-md py-2 px-4 ${
							errors.year ? "focus:outline-red-500" : ""
						}`}
					/>
					{errors.year && (
						<span className="text-[10px] italic font-medium text-red-500 normal-case">
							{errors.year.message}
						</span>
					)}
				</label>
			</div>
			<div className="border-b-2 items-center md:justify-end flex justify-center md:ml-[100px] my-20 md:w-[500px] w-[350px]">
				<button className="absolute w-20 h-20 p-6 rounded-full cursor-pointer bg-primary-purple hover:bg-neutral-offBlack">
					<img src="/images/icon-arrow.svg" alt="" />
				</button>
			</div>
		</form>
	);
}
export default Form;
