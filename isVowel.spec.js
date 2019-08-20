// Archivo `isVowel.spec.js`:

const isVowel = require('./isVowel');

describe('isVowel()', () => {

    it('debería devolver true para letra a', () => {
        it('deberia devolver true para la letra a', () => {
            if (isVowel('a') !== true) {
                console.log('fail');
            } else {
                console.log('true')
            }
        })
    });

    it('debería devolver false para letra b', () => {
        // Acá invocamos `isVowel()` y verificamos el resultado
        if (isVowel('b') !== true) {
            console.log('true')
        } else {
            console.log('false');
        }
    });

});