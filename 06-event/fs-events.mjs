import EventEmitter from "events";
import fs from 'fs';

const myEmitter = new EventEmitter();

// Регистрируем событие writeCoplete
//Добавление строки к файлу text.txt - второе событие
myEmitter.on('writeCoplete', () => {
    console.log('First line was written in file text.txt');
    fs.appendFile('./text.txt', 'Second line written',() => {
        myEmitter.emit('appentComplete');
    });
})

// Регистрируем событие appentComplete
//Переименование файла - третье событие
myEmitter.on('appentComplete', () => {
    console.log('Second line written');
    fs.rename('./text.txt', './renametext.txt', () => {
        myEmitter.emit('renameComplete')
    });
});

// Регистрируем событие renameComplete
myEmitter.on('renameComplete', () => {
    console.log('File text.txt wase rename');
})

// Создание файла text.txt - первое действие
fs.writeFile('./text.txt', 'First line written text', () => {
    myEmitter.emit('writeCoplete');
});
