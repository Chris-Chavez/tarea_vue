// Metodo que se encarga de retornar los errores de las peticiones API
export default async (request) => {
    try {
      return (await request).data;
    } catch (err) {
      throw err.response.data;
    }
  };
  