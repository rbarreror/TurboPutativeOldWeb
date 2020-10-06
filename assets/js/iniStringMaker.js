/*
Parameters introduced by user in HTML form are converted into strings
with .ini format. These "ini strings" will be sent to the server in 
a POST request. The server will write them in a file, that will be used
by  the program.
*/

function iniTagger() {

    // Create JSON containing all Tagger parameters
    var TaggerJSON = {};

    // Get output name. Default or the given by the user
    if (document.getElementById("Tagger_OutputName").value == ""){
        var fileInput = document.getElementById('inputFile');
        var outfile = "tagged_" + fileInput.files[0].name;
    } else {
        var outfile = document.getElementById("Tagger_OutputName").value;
    }

    TaggerJSON['OutputName'] = outfile; 

    TaggerJSON['HalogenatedRegex'] = document.getElementById("HalogenatedRegex").value;
    TaggerJSON['OutputColumns'] = document.getElementById("Tagger_OutputColumns").value
    TaggerJSON['Food'] = "";
    TaggerJSON['Drug'] = "";
    TaggerJSON['MicrobialCompound'] = "";
    TaggerJSON['Halogenated'] = "";
    TaggerJSON['NaturalProduct'] = "";

    if(document.getElementById("Food").checked == true) {
        TaggerJSON['Food'] = "True";
    }

    if(document.getElementById("Drug").checked == true) {
        TaggerJSON['Drug'] = "True";
    }

    if(document.getElementById("MicrobialCompound").checked == true) {
        TaggerJSON['MicrobialCompound'] = "True";
    }

    if(document.getElementById("Halogenated").checked == true) {
        TaggerJSON['Halogenated'] = "True";
    }

    if(document.getElementById("NaturalProduct").checked == true) {
        TaggerJSON['NaturalProduct'] = "True";
    }

    // Convert JSON into an string with INI format
    iniContent = "[TagSelection]"
    iniContent += "###";
    iniContent += "Food = " + TaggerJSON['Food'];
    iniContent += "###";
    iniContent += "Drug = " + TaggerJSON['Drug'];
    iniContent += "###";
    iniContent += "MicrobialCompound = " + TaggerJSON['MicrobialCompound'];
    iniContent += "###";
    iniContent += "Halogenated = " + TaggerJSON['Halogenated'];
    iniContent += "###";
    iniContent += "NaturalProduct = " + TaggerJSON['NaturalProduct'];
    iniContent += "###";

    iniContent += "[Parameters]";
    iniContent += "###";
    iniContent += "OutputName = " + TaggerJSON['OutputName'];
    iniContent += "###";
    iniContent += "OutputColumns = " + TaggerJSON['OutputColumns'];
    iniContent += "###";
    iniContent += "HalogenatedRegex = " + TaggerJSON['HalogenatedRegex'];

    return iniContent
}

function iniMod() {

    // Create JSON containing all Mod parameters
    var ModJSON = {};

    // Get output name. Default or the given by the user
    if (document.getElementById("Mod_OutputName").value == ""){
        var fileInput = document.getElementById('inputFile');   
        var outfile = "mod_" + fileInput.files[0].name;
    } else {
        var outfile = document.getElementById("Mod_OutputName").value;
    }

    ModJSON['OutputName'] = outfile; 

    ModJSON['OutputColumns'] = document.getElementById("Mod_OutputColumns").value;
    ModJSON['RemoveRow'] = document.getElementById("RemoveRow").value;
    ModJSON['Separator'] = document.getElementById("Separator").value;
    ModJSON['AminoAcidSeparator'] = document.getElementById("AminoAcidSeparator").value;

    // Convert JSON into an string with INI format
    iniContent = "[Parameters]";
    iniContent += "###";
    iniContent += "OutputName = " + ModJSON['OutputName'];
    iniContent += "###";
    iniContent += "OutputColumns = " + ModJSON['OutputColumns'];
    iniContent += "###";
    iniContent += "Separator = " + ModJSON['Separator'];
    iniContent += "###";
    iniContent += "AminoAcidSeparator = " + ModJSON['AminoAcidSeparator'];
    iniContent += "###";
    iniContent += "RemoveRow = " + ModJSON['RemoveRow'];

    return iniContent
}

function iniTable() {

    // Create JSON containing all Table parameters
    var TableJSON = {};

    // Get output name. Default or the given by the user
    if (document.getElementById("Table_OutputName").value == ""){
        var fileInput = document.getElementById('inputFile');   
        var outfile = "table_" + fileInput.files[0].name;
    } else {
        var outfile = document.getElementById("Table_OutputName").value;
    }

    TableJSON['OutputName'] = outfile; 

    TableJSON['OutputColumns'] = document.getElementById("Table_OutputColumns").value;
    TableJSON['ComparedColumns'] = document.getElementById("ComparedColumns").value;
    TableJSON['ConservedColumns'] = document.getElementById("ConservedColumns").value;
    

    // Convert JSON into an string with INI format
    iniContent = "[Parameters]";
    iniContent += "###";
    iniContent += "OutputName = " + TableJSON['OutputName'];
    iniContent += "###";
    iniContent += "OutputColumns = " + TableJSON['OutputColumns'];
    iniContent += "###";
    iniContent += "ComparedColumns = " + TableJSON['ComparedColumns'];
    iniContent += "###";
    iniContent += "ConservedColumns = " + TableJSON['ConservedColumns'];

    return iniContent
}


function iniFeatureInfo() {

    // Create JSON containing all Table parameters
    var FeatureInfoJSON = {};

    // Get output name. Default or the given by the user
    if (document.getElementById("FeatureInfo_OutputName").value == ""){
        var fileInput = document.getElementById('inputFile');   
        var outfile = "info_" + fileInput.files[0].name;
    } else {
        var outfile = document.getElementById("FeatureInfo_OutputName").value;
    }

    FeatureInfoJSON['OutputName'] = outfile; 

    FeatureInfoJSON['OutputColumns'] = document.getElementById("FeatureInfo_OutputColumns").value;
    FeatureInfoJSON['N_Digits'] = document.getElementById("N_Digits").value;
    
    // Convert JSON into an string with INI format
    iniContent = "[Parameters]";
    iniContent += "###";
    iniContent += "OutputName = " + FeatureInfoJSON['OutputName'];
    iniContent += "###";
    iniContent += "OutputColumns = " + FeatureInfoJSON['OutputColumns'];
    iniContent += "###";
    iniContent += "N_Digits = " + FeatureInfoJSON['N_Digits'];

    return iniContent
}