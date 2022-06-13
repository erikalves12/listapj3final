const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.set("view engine", "ejs");
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

const instrumentos = [
  {
    Id: 1,
    nome: "Microfone",
    imagem:
      "https://images-americanas.b2w.io/produtos/4460606572/imagens/microfone-condensador-bm800-dourado-profissional-usb-cabo-de-audio-3-5mm-microfone-de-esponja/4460606572_1_large.jpg",
    cor: "Preto",
    DataDeFabricacao: "05/12/2000",
    caracteristica: "Marca:AKG, Modelo:P120, Cor:Preto",
    valor: "R$ 4.500,00",
    FormaDePagamento: "3x sem juros ou até 12x com juros",
  },

  {
    Id: 2,
    nome: "Bateria",
    imagem:
      "https://th.bing.com/th/id/OIP.lGzUAigeMeiudkGAr1dSxwHaHa?pid=ImgDet&rs=1",
    cor: "Preto",
    DataDeFabricacao: "09/10/2021",
    caracteristica: "Marca:Pearl, Linha:Export, Modelo:Export",
    valor: "R$ 10.500,00",
    FormaDePagamento: "3x sem juros ou até 12x com juros",
  },

  {
    Id: 3,
    nome: "Teclado",
    imagem:
      "https://d1z9meo96z0rqn.cloudfront.net/Custom/Content/Products/12/16/12160_sintetizador-korg-workstation-kross-2-88-253_m1_637685231078101199.png",
    cor: "Preto",
    DataDeFabricacao: "23/08/2016",
    caracteristica: "Marca:Roland, Linha Go:Keys, Modelo GO-61K",
    valor: "R$ 3.500,00",
    FormaDePagamento: "3x sem juros ou até 12x com juros",
  },
];

app.get("/", (req, res) => {
  res.render("index", { instrumentos });
});

app.post("/add", (req, res) => {
  const instru = req.body;
  instru.Id = instrumentos.length + 1;
  instrumentos.push(instru);

  res.redirect("/");
});

app.get("/descricao/:Id", (req, res) => {
  const id = req.params.Id - 1;
  instru = instrumentos[id];

  res.render("descricao", { instru });
});

app.get("/voltar", (req, res) => {
  res.redirect("/");
});

app.get("/atualizar/:Id", (req, res) => {
  const id = +req.params.Id;
  const instru = instrumentos.find((instru) => instru.Id === id);

  res.render("atualizar", { instru, instrumentos });
});

app.post("/atualizacao/:Id", (req, res) => {
  const Id = +req.params.Id - 1;
  instru = instrumentos.find((instru) => instru.Id === Id);
  const novoinstru = req.body;
  novoinstru.Id = Id + 1;
  instrumentos[Id] = novoinstru;

  res.redirect("/");
});

app.get("/cadastrar", (req, res) => {
  

  res.render("cadastrar");
});

app.get("/remover/:Id", (req, res) => {
  const id = req.params.Id - 1;
  delete instrumentos[id];

  res.redirect("/");
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);
