require('../mocks/fetchSimulator');
const { fetchCharacter } = require('../src/fetchCharacter');

describe("Teste a função fetchCharacter", () => {
  it("Verifica se o nome da personagem é Wonder Woman", async () => {
    const character = await fetchCharacter("720");
    expect(character.name).toBe("Wonder Woman");
  });
  it("Verifica se retorna erro ao executar a função sem parâmetro", async () => {
    const failRequeset = await fetchCharacter();
    expect(failRequeset).toEqual(new Error("You must provide an url"));
  });
  it("Verifica se retorna 'Invalid id' ao executar a função com parâmetro que não existe ", async () => {
    const Response = await fetchCharacter("Parâmetro qualquer");
    expect(Response).toBe("Invalid id");
  });
  it('Verifica se fetch é chamada com o endpoint correto', async () => {
    const url = 'https://www.superheroapi.com/api.php/4192484924171229/720'
    await fetchCharacter('720')
    expect(fetch).toHaveBeenCalledTimes(4)
    expect(fetch).toHaveBeenCalledWith(url)
  })
});