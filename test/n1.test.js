const test = require("node:test");
const assert = require("node:assert/strict");

const { obterIndiceN1 } = require("../src/n1");

test("N1 deve usar o tamanho exato do arquivo como índice", () => {
  const arquivo = {
    tamanho: 1024,
  };

  const indice = obterIndiceN1(arquivo);

  assert.equal(indice, 1024);
});
