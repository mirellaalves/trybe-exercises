const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

/* 1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/

lesson2.turno = 'manhã';
console.log(lesson2);

/* 2 Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/

console.log(Object.keys(lesson1));

/* 3 Crie uma função para mostrar o tamanho de um objeto.*/

console.log(Object.keys(lesson1).length);

/* 4 Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

console.log(Object.values(lesson1));

/* 5 Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.*/

const allLessons = {};
Object.assign(allLessons, { lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

/* 6 Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/

/* console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes);*/

/* 7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.*/

/*const getValueByNumber = Object.keys;
console.log(getValueByNumber(lesson1, 0));
console.log(Object.keys(lesson1[1]));*/

/* 8 Crie uma função que verifique se o par (chave / valor) existem na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false */

/*const verifyPair;
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));*/

/* Bônus 1 Crie uma função para contar quantos estudantes assistiram as aulas de matemática. Use o objeto criado no exercício 5.*/


/* Bônus 2 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:*/



/* A primeira linha abaixo é igual a:
function createReport(allLessons, teacherName) {*/

const createReport = (allLessons, teacherName) => {
    const lessons = Object.values(allLessons);
    const report = {
        professor: teacherName,
        aulas: [],
        estudantes: 0,
    };

    for (let i = 0; i < lessons.length; i++) {
        if (lessons[i].professor === teacherName) {
            report.aulas.push(lessons[i].materia);
            report.estudantes += lessons[i].numeroEstudantes;
        }
    }
    return report;
};
console.log(createReport(allLessons, 'Maria Clara'));
