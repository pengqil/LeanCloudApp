require("cloud/app.js");
// Use AV.Cloud.define to define as many cloud functions as you want.
// For example:
AV.initialize("21dtlt787noxsxkgjxryjlsx52m7cv0e1752y73qa22iiboe", "qems0dyruiky9qrfpjmc6cufg68kp6ech4dvsya6e41aboz4");
AV.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});