const express = require("express");
const Inventions = require('../models/Invention');
const keyToUpperCase = require('../services/keyToUpperCase');
const sortByCreationDate = require('../services/sortByCreationDate');

const router = express.Router();

const sources = [
	'https://www.thoughtco.com/20th-century-timeline-1992486',
	'https://en.wikipedia.org/wiki',
];


router.get('/inventions/:key?', (req, res) => {
	const inventions = keyToUpperCase(Inventions.list(), req.params.key ?? 'author');
	res.send({ 
		inventions, 
		sources
	});
});

router.get('/inventions/sort/:orderType', (req, res) => {
	const inventionsOrderBy = sortByCreationDate(Inventions.list(), req.params.orderType);
	res.send({ 
		inventions : inventionsOrderBy, 
		sources
	});
});



module.exports = router;