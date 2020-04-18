// 6 Crie uma função que faça requisição para a api dog pictures (https://dog.ceo/dog-api/). Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”. O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. Crie todos os testes que achar necessário.

const api = require("./exercise06_fetchDogPic");

describe("testando a requisição", () => {
    const apiURL = jest.spyOn( api, "fetchURL");
    afterEach(apiURL.mockReset);
  
    test("testando requisição caso a promise resolva", async () => {
      apiURL.mockResolvedValue('request sucess');
  
      apiURL();
      expect(apiURL).toHaveBeenCalled();
      expect(apiURL).toHaveBeenCalledTimes(1);
      expect(apiURL()).resolves.toBe('request sucess');
      expect(apiURL).toHaveBeenCalledTimes(2);
    });
  
    test("testando requisição caso a promise seja rejeitada", async () => {
      apiURL.mockRejectedValue('request failed');
  
      expect(apiURL).toHaveBeenCalledTimes(0);
      expect(apiURL()).rejects.toMatch('request failed');
      expect(apiURL).toHaveBeenCalledTimes(1);
    });
  });
