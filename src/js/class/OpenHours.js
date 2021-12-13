/*
                    <p class="openinghours d-flex">
                        <span>Monday - Friday</span>
                        <span>8:00 - 19:00</span>
                    </p>
*/

import { horarios } from "../horarios";

    
export   class Horarios{
        dia     = '';
        hora    = '';
    
        constructor(dia = 'Sin día', hora1 = 'Sin hora', hora2 = 'Sin hora'){
            
            this.dia = dia;
            this.hora1 = hora1;
            this.hora2 = hora2;
    
        }
        
        crearHorario(){
            console.log(this.dia)
            console.log(this.hora1)
            console.log(this.hora2)
        }
    }
    



