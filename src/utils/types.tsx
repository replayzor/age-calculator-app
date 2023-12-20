export type FormProps = {
	day: string;
	month: string;
	year: string;
};

export type CalculateAgeProps = {
	onCalculateAge: (age: {
		years: string;
		months: string;
		days: string;
	}) => void;
};
