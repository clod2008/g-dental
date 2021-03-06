import '../css/navBar.css'

export const navBar = (siteBrand) =>{
    const navBarContainer = document.createElement('nav');
    navBarContainer.classList.add('navbar','navbar-expand-lg','navbar-dark','ftco_navbar', 'bg-dark', 'ftco-navbar-light')
    navBarContainer.innerHTML = `
        <div class="container">
        <a class="navbar-brand" href="index.html"><img src="${siteBrand}" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="oi oi-menu"></span> Menu
        </button>

        <div class="collapse navbar-collapse" id="ftco-nav">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="about.html" class="nav-link">About</a></li>
            <li class="nav-item"><a href="services.html" class="nav-link">Services</a></li>
            <li class="nav-item"><a href="doctors.html" class="nav-link">Doctors</a></li>
            <li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li>
            <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>
            <li class="nav-item cta"><a href="contact.html" class="nav-link" data-toggle="modal" data-target="#modalRequest"><span>Make an Appointment</span></a></li>
        </ul>
        </div>
    </div>
    `;
    document.body.append( navBarContainer )
}