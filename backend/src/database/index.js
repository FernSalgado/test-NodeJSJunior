import mongoose from 'mongoose';

export default mongoose
  .connect(
    '',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.warn('Sucesso'))
  .catch(err => console.warn('Erro', err));