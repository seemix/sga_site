module.exports = class UserDto {
    id;
    email;
    name;

    constructor(id, email, name) {
        this.id = id;
        this.email = email;
        this.name = name;
    }
}