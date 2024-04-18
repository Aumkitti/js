const SE6545 = new Array(
  ["BOY", "PerTh", "eak", "", "San", "Tar", "Tin", "Oat"],
  ["Guy", "Best", "K", "<b style = 'color:blue'>OHM</b>", "", "Vick", "", ""],
  [
    "<b style = 'color:blue'>Four</b>",
    "<b style = 'color:blue'>P</b>",
    "<b style = 'color:red'>Aum</b>",
    "<b style = 'color:blue'>EARTH</b>",
    "",
    "<b style = 'color:blue'>Oke</b>",
    "",
    "",
    "",
  ],
  [
    "<b style = 'color:red'>Ter</b>",
    "<b style = 'color:blue'>Bonus</b>",
    "<b style = 'color:blue'>Pin</b>",
    "<b style = 'color:blue'>Min</b>",
    "",
    "<b style = 'color:red'>Jead</b>",
    "mind",
    "<b style = 'color:red'>Bell</b>",
  ]
);

for (let i = 0; i < SE6545.length; i++) {
  for (let j = 0; j < SE6545[i].length; j++) {
    if (SE6545[i][j] === "") {
      SE6545[i][j] = "";
    }
  }
}

const numberOfRows = 4; 
const numberOfCols = SE6545[0].length; 
const tableArray = [];
for (let i = 0; i < numberOfRows; i++) {
  const row = SE6545[i];
  tableArray.push(row);
}


document.write(
  "<table style='border: 1px solid black; border-collapse: collapse;'>"
);
for (let i = 0; i < numberOfRows; i++) {
  document.write("<tr>");
  for (let j = 0; j < numberOfCols; j++) {
    document.write(
      "<td style='border: 1px solid black; padding: 5px;'>" +
        tableArray[i][j] +
        "</td>"
    );
  }
  document.write("</tr>");
}
document.write("</table>");

