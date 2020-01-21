class User {
    _id;
    _displayName;
    _avatar;

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get displayName() {
        return this._displayName;
    }

    set displayName(value) {
        this._displayName = value;
    }

    get avatar() {
        return this._avatar;
    }

    set avatar(value) {
        this._avatar = value;
    }
}
