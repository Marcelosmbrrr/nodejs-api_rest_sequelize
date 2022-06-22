const Role = require('../models/RoleModel');

module.exports = {
    async index(req, res) {
        res.send('Role index');
    },
    async show(req, res) {
        res.send('Role show');
    },
    async store(req, res) {
        res.send('Role store');
    },
    async update(req, res) {
        res.send('Role update');
    },
    async destroy(req, res) {
        res.send('Role destroy');
    }
}