const User = require('../models/UserModel');

module.exports = {
    async index(req, res) {
        res.send('User index');
    },
    async show(req, res) {
        res.send('User show');
    },
    async store(req, res) {
        res.send('User store');
    },
    async update(req, res) {
        res.send('User update');
    },
    async destroy(req, res) {
        res.send('User destroy');
    }
}