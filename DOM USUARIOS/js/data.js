import {user_objeto} from'./data.js';
    [100,	'anna0',	    'white00',	    'Anna Addison',	    '1325 Candy Rd, San Francisco, CA 96123',	'anna.addison@yahoo.com',	3841019535],
    [101,	'carol1',	    'orange01',	    'Carol Campbell',	'1931 Brown St, Gainesville, FL 85321',	    'carol.campbell@aol.com', 	2548952651],
    [102,	'julia2',	    'yellow02',	    'Julia Jones',	    '1622 Seaside St, Seattle, WA 32569',	    'jolie.jones@msn.com',	    3651469235],
    [103,	'irene3',	    'blue03',	    'Irene Everly',	    '1756 East Dr, Houston, TX 28562',	        'irene.everly@gmail.com',	9859423698],
    [104,	'rachel4',	    'red04',	    'Rachel Rose',	    '1465 River Dr, Boston, MA 43625',	        'rachel.rose@hotmail.com',	2945632543],
    [105,	'sophie5',	    'green05',	    'Sophie Sutton',	'1896 West Dr, Portland, OR 65842',	        'sophie.sutton@yahoo.com',	5169525614],
    [106,	'wendy6',	    'purple06',	    'Wendy West',	    '1252 Vine St, Chicago, IL 73215',	        'wendy.west@gmail.com', 	6645936156],
    [106,	'jefuentes',    'gatitos123',   'Jossue Fuentes',   'Colegio Santa Catalina SCL',	            'jefuentes@scl.edu.gt', 	4568443548]



let caja_texto = document.querySelector("#caja_texto");
let caja_usuario = document.querySelector('#root')

let caja_texto = document.getElementById("bt_siguiente");

let caja_texto = document.getElementById("bt_anterior");

let caja_texto = document.getElementById("bt_user");


let nameUser =0;
caja_texto.innerHTML = [0][1]


function boton_anterior(){
    if(nameUser <=6){
        nameUser++;
        caja_texto.innerHTML =user[nameUser][1];
    }
}

function boton_anterior(){
    if(nameUser>=1)
    nameUser--;
    caja_texto.innerHTML = user[nameUser][1];
}