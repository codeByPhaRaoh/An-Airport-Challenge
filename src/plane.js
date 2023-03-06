class Plane {

    constructor(id) {
        if (id === undefined) {
            throw new Error(`This is not a valid Plane ID`);
        } else {
            this.id = id;
        }
    }

    returnId() {
        return this.id;
    }
};

module.exports = Plane;