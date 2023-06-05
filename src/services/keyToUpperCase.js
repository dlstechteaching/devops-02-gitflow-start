function keyToUpperCase (items, key) {
	return items.map(item =>  {
		item[key] = item[key].length > 0 ? item[key].toUpperCase() : item[key];
		return item;
	});
}

function sort (items, sortType ){
	console.log('hello');
	const sortedItems = items.sort((item1, item2) => item1.creationDate - item2.creationDate);
	return sortType === 'asc' ? sortedItems : sortedItems.reverse();
	
};



module.exports = {
	keyToUpperCase,
	sort
};
