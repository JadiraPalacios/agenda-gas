function doGet() {
    return HtmlService.createTemplateFromFile("web").evaluate().setTitle("agenda-googleas");
  }
  
  function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();  
  }
  