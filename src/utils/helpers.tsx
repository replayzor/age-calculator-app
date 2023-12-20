export const validateDay = (value: string): boolean | string => {
	const dayNumber = parseInt(value, 10);

	if (isNaN(dayNumber) || dayNumber < 1 || dayNumber > 31) {
		return "Must be a valid day (1-31)";
	}

	return true;
};
