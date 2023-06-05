const express = require("express");
const Inventions = require('../models/Invention');
const { keyToUpperCase, sort } = require('../services/keyToUpperCase');

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

router.get('/inventions/sort/:orderType', (req,res) => {
	const inventions = sort(Inventions.list(), req.params.orderType);
	res.send({
		inventions,
		sources: [
			'https://www.thoughtco.com/20th-century-timeline-1992486',
			'https://en.wikipedia.org/wiki',
		]
	});
});


module.exports = router;