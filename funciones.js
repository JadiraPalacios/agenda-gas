
const HOJA = SpreadsheetApp.openById('1rMEv3L33ycZV2uf5_6MaDiMtrf2d5fVhPxYXCW8LYBk').getActiveSheet();

function doGet(datos)
{
  insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function doPost(datos)
{
    insertarContacto(datos.parameter.nombre, datos.parameter.correo);
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda Google Apps Script');
}

function obtenerDatosHTML(nombre)
{
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() 
{
    return HOJA.getDataRange().getValues();
}

function insertarContacto(nombre, correo)
{
    HOJA.appendRow([nombre,correo]);
}