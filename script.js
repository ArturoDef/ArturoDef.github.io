
function createTafelSqueleton(tafel){
    tablemain = document.createElement("table");
    tablemain.id = "tafels";
    main = document.querySelector("#tafelsContent");
    main.appendChild(tablemain);


    // Add first row with header
    tr1 = tablemain.insertRow();
    tdh = tr1.insertCell();
    div = createDivEl();
    div.className = "headerTafel";
    span = createSpanEl();
    span.innerHTML = "Tafel van "+tafel;

    div.appendChild(span);
    tdh.appendChild(div);


    // Add Second Row

    // LeftSide Calculatinons
    tr2 = tablemain.insertRow();
    td1 = tr2.insertCell();
    divTafel = createDivEl();
    divTafel.className = "tafel";
    table = createTableEl();
    table.id="tafelvan"+tafel; 
    table.className = "tafel";
    thead = createTheadEl();
    tbody = createTbodyEl();
    table.appendChild(thead);
    table.appendChild(tbody);


    divTafel.appendChild(table);

    divButton = createDivEl();
    divButton.style.textAlign = "center";

    btn = createButtonEl();
    btn.tafel = tafel;
    btn.addEventListener("click", function btnClick(event) { 
        btn = event.srcElement;            
        hideResult(btn.tafel);
    });
    btn.className = "btnEraseResult";
    btn.innerHTML = "On / Off";
    divButton.appendChild(btn);

    divTafel.appendChild(divButton);
    td1.appendChild(divTafel);

    //Right side Image

    td2 = tr2.insertCell();    
    td2.style.verticalAlign = "top";
    divImage = createDivEl();
    divImage.className = "tafelImage";
    divImage.id = "divVan"+tafel+"Image";
    td2.appendChild(divImage);

}


function createTable(tafel){
    createTafelSqueleton(tafel);
    tbody = document.querySelector("#tafelvan"+tafel+" tbody");
    for(i=1;i<11;i++){
//        tr = document.createElement("tr");

        tdi = document.createElement("td");
        tdi.innerHTML = i;

        tdx = document.createElement("td");
        tdx.innerHTML= "x" ;

        tdtafel = document.createElement("td");
        tdtafel.innerHTML = tafel ;

        tdeq = document.createElement("td");
        tdeq.innerHTML = "=" ;

        tdeqr = document.createElement("td");
        tdeqr.className = "tdeqr";        

        spaneqr = document.createElement("span");
        spaneqr.innerHTML = tafel*i ;

        tdeqr.appendChild(spaneqr);

        tdbtn = document.createElement("td");
        btn = document.createElement("button");
        btn.type = "button";
        btn.id = "btn_"+i+"_"+tafel;
        btn.idx = i;
        btn.tafel = tafel;
        btn.addEventListener("click", function btnClick(event) { 
            btn = event.srcElement;            
            displayImage(btn.idx,btn.tafel);
        });
        btn.innerHTML = "=>";
        tdbtn.appendChild(btn);

        tr =  tbody.insertRow();
        tr.appendChild(tdi);
        tr.appendChild(tdx);        
        tr.appendChild(tdtafel);                
        tr.appendChild(tdeq);               
        tr.appendChild(tdeqr);                
        tr.appendChild(tdbtn);                

        tbody.appendChild(tr);
    }
}

function createTables(){
   // createTable(2);
   // createTable(3);    
}

function hideResult(tafel){
    tds = document.querySelectorAll("#tafelvan"+tafel+" .tdeqr span");
    tds.forEach(span =>{
        span.style.display == "non"
        span.style.display = span.style.display == "none"?"block":"none";
    });
}

function displayImage(fact0,tafel){
    divVanTafelImg = document.querySelector("#divVan"+tafel+"Image");
    divVanTafelImg.innerHTML = "";
    product = fact0*tafel;
    for(bag = 0 ; bag < fact0; bag++ ){
        divBag = document.createElement("div");
        divBag.className = "bag";
        for(i = 0; i<tafel; i++){
            div = document.createElement("div");
            div.className = "box";
            divBag.appendChild(div);
        }
        divVanTafelImg.appendChild(divBag);
    }

}

/*function createTafelSqueleton(){
    table = createTable();
    table.id = "tafels";
    table.cellspacing="0";
    table.cellpadding="0";
}*/

function createDivEl(){
   return document.createElement("div");
}

function createTableEl(){
    return document.createElement("table");
}

function createSpanEl(){
    return document.createElement("span");
}

function createButtonEl(){
    return document.createElement("button");
 }

 function createTbodyEl(){
    return document.createElement("tbody");
 }
 
 function createTheadEl(){
    return document.createElement("thead");
 }