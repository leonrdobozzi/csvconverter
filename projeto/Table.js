class Table{
    constructor(arr){
        this.header = arr[0];
        arr.shift(); //Remove o primeiro elemento do array
        this.rows = arr;
    }

    //CAMPOS VIRTUAIS
    //Transformando método em atributo
    //é obrigado retornar algo
    get RowCount(){
        return this.rows.length;
    }

    get ColumnCount(){
        return this.header.length;
    }
}

module.exports = Table;