import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min'

import './styles.css';

import siteBrand from './assets/img/images/2x/GMS-logo@2x.png';
import { navBar } from './js/navBar';
import { homeCarousel } from './js/homeSlider';
import { formHome } from './js/cta1';

navBar(siteBrand);
homeCarousel();
formHome();

