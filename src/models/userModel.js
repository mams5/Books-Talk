const connection = require('./connection');

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
};

const createUser = async (user) => {

    const {name, phone_number, address} = user;
    const query = 'INSERT INTO users(name, phone_number, address) VALUES(?, ?, ?)'
    const [createdUser] = await connection.execute(query, [name, phone_number, address]);
    
    return createdUser;
};

const deleteUser = async (id) => {

    const query = 'DELETE FROM users WHERE id = ?';
    const deletedUser = await connection.execute(query, [id]);
    
    return deletedUser;
};

const updateUser = async (id, user) => {
    const { name, phone_number, address } = user;

    const query = 'UPDATE users SET name = ?, phone_number = ?, address = ? WHERE id = ?';
    const deletedUser = await connection.execute(query, [name, phone_number, address, id]);
    
    return deletedUser;
};

module.exports = {
    getAll,
    createUser,
    deleteUser,
    updateUser
};