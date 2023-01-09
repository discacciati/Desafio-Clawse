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

  const { array, dir, key } = valor;

  const sortArray = (array: Array[], dir: string = "asc", key: any) => {
    const asc = (a: any, b: any) => {
      return a - b;
    };

    const desc = (a: any, b: any) => {
      return b - a;
    };

    const ascKey = (a: any, b: any, key: string) => {
      return a.key - b.key;
    };

    const descKey = (a: any, b: any, key: string) => {
      return b.key - a.key;
    };

    if (dir == "desc") {
      if (key) {
        return array.sort(descKey(array[0], array[1], key));
      }
      return array.sort(desc(array[0], array[1]));
    }

    if (key) {
      return array.sort(ascKey(array[0], array[1], key));
    }

    return array.sort(asc(array[0], array[1]));
  };

  return sortArray;
};

export default desafio3Service;
