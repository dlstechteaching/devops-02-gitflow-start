const express = require("express");
const Inventions = require('../models/Invention');
const keyToUpperCase = require('../services/keyToUpperCase');
const sortPerCreationDate = require('../services/sortPerCreationDate');

const router = express.Router();

router.get('/inventions/:key?', (req, res) => {
	const inventions = keyToUpperCase(Inventions.list(), req.params.key ?? 'author');
	res.send({ 
		inventions, 
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		] 
	});
});

router.get('/inventions/sort/:orderType?', (req, res) => {

	const inventions = sortPerCreationDate(Inventions.list(), req.params.orderType);
	res.send({ 
		inventions, 
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		] 
	});
});

module.exports = router;