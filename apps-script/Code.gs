// Google Apps Script - ku dheji Google Sheet gudihiisa (Extensions > Apps Script)
var HEADERS = ['Waqtiga','Magaca','Taleefan','Email','Jinsiga','Da\'da','Heerka waxbarasho','Su\'aal 1','Su\'aal 2','Su\'aal 3','Su\'aal 4','Su\'aal 5'];

function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  sh.appendRow([new Date(), d.name, "'" + d.phone, d.email, d.gender, d.age, d.education, d.q1, d.q2, d.q3, d.q4, d.q5]);
  return ContentService.createTextOutput('ok');
}
