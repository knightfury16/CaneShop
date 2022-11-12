const validUpdate = (req) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = [
        "name",
        "price",
        "description",
        "category",
        "stock",
        "numOfReviews",
        "ratings",
    ];
    return updates.every((item) => allowedUpdates.includes(item));
};

module.exports = validUpdate;
