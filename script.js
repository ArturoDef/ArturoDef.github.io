let btnOnOff = true;

function createTafelSqueleton(tafel){
    tablemain = document.createElement("table");
    tablemain.id = "tafels";
    main = document.querySelector("#tafelsContent");
    main.innerHTML = "";
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
    table.cellSpacing = "0";
    thead = createTheadEl();
    tbody = createTbodyEl();
    table.appendChild(thead);
    table.appendChild(tbody);


    divTafel.appendChild(table);

    divButton = createDivEl();

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
        spaneqr.id = "spaneqr"+i;
        tdeqr.appendChild(spaneqr);

        tdbtn = document.createElement("td");
        btn = document.createElement("button");
        btn.type = "button";
        btn.id = "btn_"+i+"_"+tafel;
        btn.idx = i;
        btn.tafel = tafel;
        tdbtn.className =  "tdButtonDisplay";
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

        tdList = tr.querySelectorAll("td");
        tdList.forEach(td=>{
            if(i==1)
                td.className = td.className+" top";
            if(i==10)
                td.className = td.className+" bottom";        
        });

        tdImage = document.createElement("td");
        tdImage.id = "tdImage"+i;
        tdImage.className = "tdImage";
        tr.appendChild(tdImage);

        tbody.appendChild(tr);
    }
}


function hideResult(tafel){
    btnOnOff = !btnOnOff;
    tds = document.querySelectorAll("#tafelvan"+tafel+" .tdeqr span");
    tds.forEach(span =>{
        span.style.display = btnOnOff?"block":"none";
    });
}

function displayImage(fact0,tafel){
    if(!btnOnOff){
        btnOnOff = true;        
        hideResult(tafel);
    }
    tdImageList = document.querySelectorAll(".tafel td.tdImage");    
    tdImageList.forEach(td=>{
        td.innerHTML = "";
    });
    spaneqr = document.querySelector("#spaneqr"+fact0);
    spaneqr.innerHTML = fact0*tafel;
    spaneqr.style.display ="inline";    
    product = fact0*tafel;
    for(bag = 0 ; bag < fact0; bag++ ){
        divBag = document.createElement("div");
        divBag.className = "bag";
        
        for(i = 0; i<tafel; i++){
            div = document.createElement("div");
            div.className = "box";
            div.innerHTML = "&nbsp; &nbsp; &nbsp;"
            divBag.appendChild(div);
        }
        td = document.querySelector("#tdImage"+(bag+1));        
        td.innerHTML = "";
        td.appendChild(divBag);
        //divVanTafelImg.appendChild(divBag);
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

 function createTables(){
   // createTable(2);
   // createTable(3);    
   //createTable(4);       
}