export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8a2b0f0437mshb358e7f772d1139p1c504djsn0dd0bcd3586f',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
	},
};

export const fetchData = async (url, options) => {
	const response = await fetch(url, options);
	const data = await response.json();
	return data;
};
