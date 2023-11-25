const fs = require('fs');

fs.writeFile('./text.txt', 'First text from fs', (err) => {
    if (err) console.log(err);
    else {
        console.log('File was written');
        fs.appendFile('./text.txt', '\nNew text line>>>>>>>>', (err) => {
            if (err) console.log(err);
            else {
                console.log('New line text>>>>>>> was written');
                fs.rename('./text.txt', './renamed-first.txt', (err) => {
                    if (err) console.log(err);
                    else console.log('File was renamed');
                })
            }
        });
    }
});

