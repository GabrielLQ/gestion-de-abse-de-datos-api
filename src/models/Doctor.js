import Sequelize from 'sequelize'; // modulo
import {sequelize} from '../database/database'//conexion de la bd
 
import Clinica from './Clinica';
 
const Doctor = sequelize.define('doctors',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nomdoctor:{
        type: Sequelize.STRING(100),
        allowNull:false
    },
    apelldoctor:{
        type:Sequelize.STRING(100),
        allowNull: false
    },
    dnidoctor:{
        type: Sequelize.STRING(8),
        allowNull:false
    },
    teldoctor:{
        type:Sequelize.STRING(12),
        allowNull:true
    },
    emaildoctor:{
        type: Sequelize.STRING(50),
        allowNull:true
    },
    dirdoctor:{
        type: Sequelize.STRING(100),
        allowNull:true
    },
    espdoctor:{
        type: Sequelize.STRING(100),
        allowNull:true
    },
    clinicaid:{
        type: Sequelize.INTEGER
    }
},{
    timestamps: false
});
 
Clinica.hasMany(Doctor,{foreignKey:'clinicaid', sourceKey:'id', as:"doctors"});
Doctor.belongsTo(Clinica,{foreignKey:"clinicaid", sourceKey:'id', as:"clinica"});

export default Doctor;