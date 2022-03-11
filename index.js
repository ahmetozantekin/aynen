import humanizeString from 'humanize-string';
import stringSimilarity from 'string-similarity';

function _errors(first, second, options) {
	if (typeof first !== 'string' && typeof second !== 'string') {
		throw new TypeError('Expected strings in params');
	}
	if (options && typeof options !== 'object') {
		throw new TypeError('Expected object from options');
	}
	if (options && typeof options.rating !== 'boolean') {
		throw new TypeError('Expected boolean a rating');
	}
}

export default function aynen(first, second, options) {
	_errors(first, second, options);

	options = {
		rating: false,
		...options,
	};
	
	const FIRST_STR = humanizeString(first)?.toLocaleUpperCase();
	const SECOND_STR = humanizeString(second)?.toLocaleUpperCase();
	
	if(options.rating) {
		const COMPARED  = stringSimilarity.compareTwoStrings(FIRST_STR, SECOND_STR);
		return {
			isSame: FIRST_STR === SECOND_STR,
			similarityRating: COMPARED
		}
	}
	
	return FIRST_STR === SECOND_STR;
}
