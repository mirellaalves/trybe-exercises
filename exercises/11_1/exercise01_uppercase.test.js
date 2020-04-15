const uppercase = require('./exercise01_uppercase');

test('todas as letras são maiúsculas', done => {
    uppercase('mirella', callback => {
        expect(callback).toStrictEqual('MIRELLA');
    done();
    });
});
