import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('12345678', 10),
        isAdmin: true,
    },
    {
        name: 'sivan',
        email: 'sivan@gmail.com',
        password: bcrypt.hashSync('12345678', 10),
    },
    {
        name: 'muktadir',
        email: 'muktadir@gmail.com',
        password: bcrypt.hashSync('12345678', 10),
    },
];

export default users;
