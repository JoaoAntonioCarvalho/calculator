class Calculadora {
  soma(num1, num2) {
    let resultado = num1 + num2;
    if ((resultado.toString()).includes('.')) {
      return parseFloat(resultado).toFixed(2);
    };
    return parseInt(resultado);
  };

  subtrai(num1, num2) {
    let resultado = num1 - num2;
    if ((resultado.toString()).includes('.')) {
      return parseFloat(resultado).toFixed(2);
    };
    return parseInt(resultado);
  };

  multiplica(num1, num2) {
    let resultado = num1 * num2;
    if ((resultado.toString()).includes('.')) {
      return parseFloat(resultado).toFixed(2);
    };
    return parseInt(resultado);
  };

  divide(num1, num2) {
    let resultado = num1 / num2;
    if ((resultado.toString()).includes('.')) {
      return parseFloat(resultado).toFixed(2);
    };
    return parseInt(resultado);
  };
};

export default Calculadora