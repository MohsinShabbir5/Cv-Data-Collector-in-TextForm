# Cv-Data-Collector-in-TextForm
this repository  detects all the documents in a folder and then fetch their data in text form and save data line to line in readable Text Form
Start With npm install --save and after installing node-modules give command node index.js
after starting the server you have to define the folder or use the folder which i have created name cvFolder place all the cvs in that folder
after placing all the cvs go to the link "localhost:1340/files" in the browser or in postman 
you will get your response after success and will recieve a success message. This is a kind of Rest APi in this you will get a response message and data in the text form from all cvs saved in the database.
A npm module is used in it called textract which can read almost all the formats like doc,docs,pdf etc , but ther is some things which have to be installed which is given in the documentation of textract which is given below : 

Mendatory : 
PDF extraction requires pdftotext be installed (Link : http://www.xpdfreader.com/download.html)
DOC extraction requires antiword be installed (Link : http://www.winfield.demon.nl)
Optional : 
RTF extraction requires unrtf be installed
PNG, JPG and GIF require tesseract to be available
DXF extraction requires drawingtotext be available

after these installations the restApi can read all the format and read their data
