let Persona1 = {
    id: 0001,
    nombre: 'Xiomara',
    apellidos: 'Tabarez',
    telefono: '3005806325',
    ubicaciones: {
        cuidad: 'Medellin',
        dirreccion: 'cra 11 # 14 - 27',
    }
}

let Persona2 = {
    id: 0002,
    nombre: 'Yamile',
    apellidos: 'Pino',
    telefono: '3151230325',
    ubicaciones: {
        cuidad: 'Medellin',
        dirreccion: 'cra 15 # 24 - 98',
    }
}

let Persona3 = {
    id: 0003,
    nombre: 'Wendy',
    apellidos: 'Hidalgo',
    telefono: '3184580336',
    ubicaciones: {
        cuidad: 'Cali',
        dirreccion: 'Calle 4 Sur # 20-12',
    }
}


let agendaContactos = [Persona1,Persona2,Persona3];

function agregarContactos(id,nombre,apellidos,telefono,cuidad,direccion){
    let contacto ={
        id,
        nombre,
        apellidos,
        telefono,
        ubicaciones: {
            cuidad,
            dirreccion,
        }
    }
    agendaContactos.push(contacto);
}

function borrarContactoID(id){
    for(let i = 0; i < agendaContactos-length;i++){
        if (agendaContactos[i].id === id) {
            agendaContactos.splice(i,1);
        }
    }
}

function borrarContactoNombre(nombre){
    for (let i = 0; i < agendaContactos.length; i++) {
        if (agendaContactos[i].nombre === nombre) {
            agendaContactos.splice(i,1);
        }
    }
}

function actualizarContactoPorId(id, nuevosNombres, nuevosApellidos, nuevoTelefono, nuevaCiudad, nuevaDireccion){
    for (let i = 0; i < listaContactos.length; i++) {
        if (listaContactos[i].id === id) {
            listaContactos[i] = {
                id,
                nombres: nuevosNombres,
                apellidos: nuevosApellidos,
                telefono: nuevoTelefono,
                ubicaciones: {
                    ciudad: nuevaCiudad,
                    direccion: nuevaDireccion
                }
            }
        }
    }
}

function verContactos(){
    for(const contacto of listaContactos){
        console.log(contacto)
    }
}