var FilmTomb = [];
var tablazat = document.getElementById('kiirasTable');
var tableBody = document.getElementById('kiirasTablebody')

class Film
{
  nev;
  rendezo;
  kiadasi_ev;
  constructor(nev, rendezo, kiadasi_ev)
  {
    this.nev = nev;
    this.rendezo = rendezo;
    this.kiadasi_ev = kiadasi_ev;
  }

  get getAdatok()
  {
    return this.Adatok();
  }

  Adatok()
  {
    return this.nev + " , " + this.rendezo + " , " + this.kiadasi_ev;
  }
}

function felveszBtnClick()
{
  let inputs = document.getElementsByClassName("filmInputs");
  let film = new Film(inputs[0].value, inputs[1].value, inputs[2].value);
  FilmTomb.push(film);
  for (let i = 0; i < 3; i++)
  {
    inputs[i].value = "";
  }
}

function kiirasBtnClick()
{
  createTable();
}

function createTable()
{
  tablazat.style.display = "";
  tableBody.innerHTML = "";
  for (let i = 0; i < FilmTomb.length; i++)
  {
    let row = tableBody.insertRow();
    let td1 = row.insertCell();
    let text1 = document.createTextNode(FilmTomb[i].nev);
    td1.appendChild(text1);
    let td2 = row.insertCell();
    let text2 = document.createTextNode(FilmTomb[i].rendezo);
    td2.appendChild(text2);
    let td3 = row.insertCell();
    let text3 = document.createTextNode(FilmTomb[i].kiadasi_ev);
    td3.appendChild(text3);
  }
  tableBody.insertRow();
}
