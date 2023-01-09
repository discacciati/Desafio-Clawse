const desafio3Service = async ({
  array: [],
  dir: string = "asc",
  key: any,
}) => {
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

 

  const sortArray = (array, dir = "asc", key) => {
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
    
    const a = array[0];
    const b = array[1];

    if (dir == "desc") {
      if (key) {
        return array.sort(descKey(a, b, key));
      }
      return array.sort(desc(a, b));
    }

    if (key) {
      return array.sort(ascKey(a, b, key));
    }

    return array.sort(asc(a, b));
  };

  return sortArray;
};

export default desafio3Service;
