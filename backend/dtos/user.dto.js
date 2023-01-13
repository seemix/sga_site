module.exports = class UserDto {
    id;
    email;
    isActivated;

    constructor(id, email, isActivated) {
        this.id = id;
        this.email = email;
        this.isActivated = isActivated;
    }
}