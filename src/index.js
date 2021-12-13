import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import './styles.css';

import siteBrand from './assets/img/Layer 2.png';
import { navBar } from './js/navBar';
import { homeCarousel } from './js/homeSlider';
import { formHome } from './js/components/cta1';
import { horarios, testCLG } from './js/horarios';
import { Horarios, OpenHoursTest } from './js/class/OpenHours';

testCLG()

/*
    var dobles  = numeros.map(function(num) {
        return num * 2;
    });
*/


const nuevosHorario = 

    new Horarios(horarios.horario01.dia, horarios.horario01.hora1)



nuevosHorario.crearHorario()

navBar(siteBrand);
homeCarousel();
formHome();

