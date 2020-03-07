import mongoose from 'mongoose';

export default mongoose
  .connect(
    'mongodb+srv://user:IwBusNCCGfWGN9xe@omnistack-ggyec.gcp.mongodb.net/test?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn('Sucesso'))
  .catch(err => console.warn('Erro', err));