import form from '../models/form';
import isValid from '../app/util/isValid';
class FormController{
    async getAll(req,res){
        try{
            const data = await form.find();
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async getById(req,res){
        try{
            const data = await form.find(req.params.id);
            return res.status(200).json(data);
        }catch(error) {
            return res.status(404).json(error);
        }
    }

    async create(req,res){
        let data = req.body;
        let errors = isValid(data);
        console.log(errors);
        if(Object.keys(errors).length){
            return res.status(400).json(errors);
        }
        try{
            const data = await form.create(req.body);
            return res.status(200).json(data);
        }catch(error) {
            return res.status(500).json({error:'erro'});
        }
    }

    async update(req,res){
        return await form.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
            },
            (err,result)=>{
                if (err){
                    return res.status(404).json(err);
                } else {
                    return res.status(200).json(result);
                }
            }
        )
    }

    async delete(req,res){
        return await form.findByIdAndDelete(req.params.id, (err,result) =>{
            if (err){
                return res.status(404).json(err);
            } else {
                return res.status(200).json({message: 'Usuário deletado'});
            }
        });
    }
}

export default new FormController();