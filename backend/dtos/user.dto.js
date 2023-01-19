module.exports = class UserDto {
    id;
    email;
    userName;

    constructor(id, email, userName) {
        this.id = id;
        this.email = email;
        this.userName = userName;
    }
}