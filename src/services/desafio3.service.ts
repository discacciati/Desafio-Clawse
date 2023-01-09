const desafio3Service = async (valor: object) => {
  /**
   * A função descrita a seguir tem o objetivo ordenar um array de Objetos, Matrizes ou de valores nativos ( Number, Boolean, String).
   * @params {Array} - que será ordenado
   * @params args - Argumentos opcionais que podem vir de parâmetro :
   * {string} - com a direção da ordenação
   * {object} - Com os seguintes parâmetros:
   *   - `dir` - Direção que o array irá ordenar. Aceita os valores `"desc"` e `"asc"`. Por default considera `"asc"`.
   *   - `key` → Chave do objeto que será usado para ordenar. Aceita `String` ou `Integer`
   * @returns {Array} ordenado
   */

  const { array } = valor;

  const sortArray = (valor_parametro: any) => {
    if (typeof valor_parametro == null || typeof valor_parametro == undefined) {
      return true;
    }

    if (typeof valor_parametro == "boolean") {
      if (valor_parametro == false) {
        return true;
      }
    }

    if (typeof valor_parametro == "string") {
      if (valor_parametro == " ") {
        return true;
      }
    }

    if (typeof valor_parametro == "number") {
      if ((valor_parametro = 0)) {
        return true;
      }
    }

    if (typeof valor_parametro === "object") {
      if (valor_parametro.length == 0) {
        return true;
      }
      if (Object.keys(valor_parametro).length === 0) {
        return true;
      }
      if (valor_parametro.length == 1) {
        if (valor_parametro[0] == "") {
          return true;
        }
      }
    }

    return false;
  };

  return isBlank;
};

export default desafio3Service;
