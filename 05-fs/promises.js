const fs = require('fs/promises');

fs.writeFile('./text.txt', 'First line text')
    .then(() => console.log('File was written'))
    .then(() => fs.appendFile('./text.txt', '\nNew text line>>>>>>>>'))
    .then(() => console.log('New line text>>>>>>> was written'))
    .then(() => fs.rename('./text.txt', './renamed-first.txt'))
    .then(() => console.log('File was renamed'))
    .catch((err) => console.log(err))



