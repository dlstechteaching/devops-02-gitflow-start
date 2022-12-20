module.exports = function (items, orderType) {
    const resutlt = items.sort((item1, item2) => item1.creationDate - item2.creationDate);
    return orderType === ":asc" ? resutlt : resutlt.reverse();
}
