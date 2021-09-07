const Reader = require('./Reader');
const Processor = require('./Processor');
const Table = require('./Table');
const HtmlParser = require('./HtmlParser');
const Writer = require('./Writer');
const PDFWriter = require('./PdfWriter');


let leitor = new Reader();
let escritor = new Writer;

async function main(){
    let dados = await leitor.Read('./data.csv');
    let dadosProcessados = await Processor.Process(dados);

    let users = new Table(dadosProcessados);

    let htmlFinal = await HtmlParser.Parse(users);

    escritor.Write(Date.now() + '.html', htmlFinal);
    PDFWriter.WritePDF(Date.now() + '.pdf', htmlFinal);

}

main();