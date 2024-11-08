class IRepository {
  obtenerPorId(id) {
    throw new Error("Método 'obtenerPorId' no implementado");
  }

  obtenerTodos() {
    throw new Error("Método 'obtenerTodos' no implementado");
  }

  buscarPorAtributo(atributo, valor) {
    throw new Error("Método 'buscarPorAtributo' no implementado");
  }

  obtenerMayores30() {
    throw new Error("Método 'obtenerMayores30' no implementado");
  }
}

export default IRepository;
