const desafio1Service = async (valor: any) => {
  /**
   * A função toNumber tem o objetivo de converter uma String em Number
   * @returns {Number}
   * if :
   * @param valor  se o tipo for diferente de String ou Number
   * @returns 0
   * if:
   * @param valor se o tipo for Number
   * executa método Math.floor, para arredondar o valor para um número inteiro
   * armazena resultado na variável  {val}
   * @returns val
   * if:
   * @param valor se o tipo for String
   * executa método parseFloat para converter a String em Number
   * armazena resultado na variável  {val}
   * se valor da variável {val} for igual a NaN, retorna valor {0} diretamente
   * @returns val
   */

  const toNumber = (valor: any) => {
    let val;

    if (typeof valor == "string") {
      val = parseFloat(valor);
      if (val == NaN) {
        return 0;
      }
      return val;
    }

    if (typeof valor == "number") {
      val = Math.floor(valor);
      return val;
    }

    return 0;
  };

  return toNumber;
};

export default desafio1Service;
