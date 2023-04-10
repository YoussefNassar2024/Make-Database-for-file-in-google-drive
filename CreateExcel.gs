function listFolderContents() {
  var foldername = 'File Name'; // provide the name of Folder from which you want to get the list of files
  var ListOfFiles = 'ListOfFiles_' + foldername;
  
  var folders = DriveApp.getFoldersByName(foldername)
  var folder = folders.next();
  var contents = folder.getFiles();
  
  var ss = SpreadsheetApp.create(ListOfFiles);
  var sheet = ss.getActiveSheet();
  sheet.appendRow( ['name','ID with Export Link','ID','URL','Date of creation','Size'] ); // Create header for each column in the excel file
  
  var var_file;
  var var_name;
  var var_ID;
  var var_URL;
  var var_Date;
  var var_Size;
  while(contents.hasNext()) {
    var_file = contents.next();
    var_name=var_file.getName();
    var_ID=var_file.getId();
    var_URL=var_file.getUrl();
    var_Date=var_file.getDateCreated();
    var_Size=var_file.getSize();
    sheet.appendRow( [var_name, // get the name of the file
    "https://drive.google.com/uc?export=view&id="+var_ID //get the ID with Export link
    ,var_ID // Get the ID  only
    ,var_URL //get URL
    ,var_Date // get the date
    ,var_Size // get the Size

    ]
     
    );     
  }  
};
