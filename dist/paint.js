const form = document.getElementById("form");

const addclient=(name,lastName, mail,  tele, ) =>{
    let person ={
        pname: name,
        plastName : lastName,
        pmail: mail,
        ptele:tele,
        
    };
    let text = ` ${person.pname} ${person.plastName} tu información ha sido enviada con éxito `;

    alert(text, "aceptar", person);
}
