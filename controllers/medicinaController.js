const Medicina = require("../models/medicina")

exports.registrarMedicina = async (req, res) => {
    try {
        let medicina;

        medicina = new Medicina(req.body);
        await medicina.save();
        res.send(medicina);
    } catch(error) {
        console.log(error);
        res.status(500).send('Existe un error')
    }
}

exports.obtenerMedicinas = async (req, res) => {
    try {
        const filtro = {};
        if (req.query.nombre) {
            filtro.nombreMedicina = { $regex: new RegExp(req.query.nombre, 'i') };
        }
        if (req.query.categoria) {
            filtro.categoria = req.query.categoria;
        }

        const medicinas = await Medicina.find(filtro);
        res.json(medicinas);
    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error find');
    }
}

exports.filtrarMedicinas = async (req, res) => {
    try {
      const filtro = {};
  
      if (req.query.nombre) {
        filtro.nombreMedicina = { $regex: new RegExp(req.query.nombre, 'i') };
      }
      if (req.query.categoria) {
        filtro.categoria = req.query.categoria;
      }
  
      const medicinas = await Medicina.find(filtro);
      res.json(medicinas);
    } catch (error) {
      console.log(error);
      res.status(500).send('Existe un error find');
    }
}  

exports.actualizarMedicina = async (req, res) => {
    try {
        const { nombreMedicina, cantidad } = req.body;
        let medicina = await Medicina.findById(req.params.id);

        if (!medicina) {
            res.status(404).json({ msg: 'No existe esa Medicina' });
            return;
        }

        medicina.nombreMedicina = nombreMedicina;
        medicina.cantidad = cantidad;

        // Configura la actualización solo para los campos deseados
        const actualizacion = {
            $set: {
                nombreMedicina: medicina.nombreMedicina,
                cantidad: medicina.cantidad,
            },
        };

        medicina = await Medicina.findOneAndUpdate({ _id: req.params.id }, actualizacion, { new: true });
        res.json(medicina);
    } catch (error) {
        console.log(error);
        res.status(500).send('Existe un error al actualizar');
    }
};

exports.obtenerMedicina = async (req, res) => {
    try {
        let medicina = await Medicina.findById(req.params.id);
        if(!medicina){
            res.status(404).json({msg:'No existe esa Medicina'})
        }
        res.json(medicina);
    } catch(error) {
        console.log(error);
        res.status(500).send('Existe un error find')
    }
}

exports.eliminarMedicina = async (req, res) => {
    try {
        let medicina = await Medicina.findById(req.params.id);

        if(!medicina){
            res.status(404).json({msg:'No existe esa Medicina'})
        }

        await Medicina.findOneAndRemove({ _id:req.params.id })
        res.json({msg:'Medicina Eliminada'});

    } catch(error) {
        console.log(error);
        res.status(500).send('Existe un error find')
    }
}

