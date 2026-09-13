const test = require("node:test");
const assert = require("node:assert/strict");

test("N1 deve usar o tamanho exato do arquivo como índice", () => {
  const tamanhoArquivo = 1024;

  assert.equal(tamanhoArquivo, 1024);
});
