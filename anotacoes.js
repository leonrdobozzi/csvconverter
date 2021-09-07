const fs = require('fs');

fs.writeFile('./leonardo.bozzi', 'Novo conteúdo do arquivo', (err) => {
    if(err){
        console.log('Erro durante o salvamento...')
    }
})

fs.readFile('./leonardo.bozzi',{encoding: 'utf-8'},(err, data) => {
    if(err){
        console.log('Ocorreu uma falha durante a leitura do arquivo!!')
    }else{
        console.log(data);
    }
});