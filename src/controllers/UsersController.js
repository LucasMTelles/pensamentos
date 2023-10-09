const User = require("../models/User");

module.exports = {
    async createUser(request, response) {
        const {name, email, password, confirm_password} = request.body;

        const user = await User.create({
            name,
            email,
            password,
            confirm_password,
        });

        console.log(user);

        return response.json(User);
    },

    async findAllUsers(request, response) {
        const users = await User.findAll({raw: true});

        return response.json(users);
    },

    //Função para encontrar por um usuário específico no banco de dados
    async findUser(request, response) {
        const {id} = request.params

        const user = await User.findOne({where:{id:id}});
        
        return response.json(user);
    }
}