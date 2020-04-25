const conn = require('../../configuration/serverdb');
module.exports = (app) =>{

    app.get('/nota',(req,resp,next)=>{
       let query = "Select nombre , nota_parcial1, nota_parcial2 , nota_final FROM nota ";
        conn.query(query,(error, notas , cols)=>{
            if(error) resp.status(500).json({status: 0, message: "Error en conexion a la tabla"});
            else resp.json({status: 1, message: "Se obtuvo informacion satisfactoriamente", notas});
        });
    });

    app.post('/nota',(req , resp , next)=>{
        let query = "INSERT INTO nota (nombre,nota_parcial1,nota_parcial2,nota_final) VALUES" + `('${req.body.nombre}',${req.body.nota_parcial1},${req.body.nota_parcial2},${req.body.nota_final})`;
        conn.query(query,(error, notas , cols)=>{
        if(error) resp.status(500).json({status: 0 , message:"No se pudo insertar la nota"});
        else resp.json({status: 1 , message: "Se inserto satisfactoriamente"});
        });
    });


}