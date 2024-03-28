function doGet() {
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("agenda-googleas");
  }
  
  function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();  
  }
  
function obtenerContactos()
{
    let hoja=SpreadsheetApp.openById('1rMEv3L33ycZV2uf5_6MaDiMtrf2d5fVhPxYXCW8LYBk').getActiveSheet();
    let datos=hoja.getDataRange().getValues();
    return datos;
}