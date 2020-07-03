export class Asistente {
    
    usuario: string;
    nombreOrg: string;
    requiereConst: boolean;

    Asistente(usuario?: string, nombreOrg?: string, requiereConst?: boolean){
        this.usuario = usuario;
        this.nombreOrg = nombreOrg;
        this.requiereConst = requiereConst;
    }
   
}
