const fs = require('fs');

fs.readFile("./user.json", {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.log('Um erro aconteceu');
    }else{
        var conteudo = JSON.parse(data);
        console.log(conteudo);

        conteudo.nome = 'Leo';

        fs.writeFile('./user.json', JSON.stringify(conteudo), (err) => {
            if(err){
                console.log(`um erro aconteceu durante a escrita ${err}`)
            }
        })
    }
})

