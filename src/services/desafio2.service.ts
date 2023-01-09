const desafio2Service = async (valor: any) => {
  /**
   * A função descrita a seguir tem o objetivo de dizer se um determinado valor está ou não “em branco”.
   * Os valores considerados em branco são os seguintes:
   * '  ' (string em branco) / null / undefined / {} (objeto vazio) /  [] (array vazio) /  [''] (array com string vazia) /  0 (número zero)  /  false
   * @returns {boolean}
   * if :
   * @param valor_parametro  se o tipo ou valor do parâmetro estiver dentro dos valores considerados em branco
   * @returns true
   * if:
   * @param valor_parametro se o valor recebido na variável for diferente dos considerados em branco
   * @returns false
   */

  const isBlank = (valor_parametro: any) => {
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

export default desafio2Service;
