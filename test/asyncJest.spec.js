const answerPhone = require("../src/asyncJest");

/*
A função answerPhone recebe um parâmetro boleano.
Dependendo do parâmetro o retorno da função varia, veja a função no arquivo 'src/asyncJest.js'

Complete o código abaixo para testar as situações em que
a função recebe como parâmetro true e false, respectivamente.

ATENÇÃO!!! Edite apenas este arquivo. Não altere os arquivos da pasta 'src'.
*/

describe("o retorno do telefonema", () => {
  test("atende", async () => {
    expect.assertions(1);
    await answerPhone(true).then(msg =>
      expect(msg).toMatch('Oi!'))
  });
  test("ocupado", async () => {
    expect.assertions(1);
    await answerPhone(false).catch(msg =>
      expect(msg).toMatch('Infelizmente não podemos atender...'))
  });
});
