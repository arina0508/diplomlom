const { Attribution } = require('@mui/icons-material')
const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define(modelName, 'user', Attribution, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Material = sequelize.define(modelName, 'user', Attribution, {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})