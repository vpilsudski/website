<template>
  <div>
    <a href="index.vue"><img
        src="~/assets/img/chap-log.png"
        width="150px"
        class="top-logo"
      ></a>

    <div class="container">

      <div class="head-container">
        <div class="menu">
          <ul
            class="menu"
            id="menu1"
            onclick="afficheMenu(this)"
          >
            <li>
              <!-- <a href="#"><img
                  src="~/assets/img/menu%20blanc%20Fichier%203@4x.png"
                  width="50px"
                  alt="icone menu"
                ></a> -->
              <ul
                id="sousmenu1"
                style="display: none"
              >
                <li class="sousmenu yellow"><a href="festival.html">Festival</a></li>
                <li class="sousmenu red"><a href="#">Salon</a></li>
                <li class="sousmenu violet"><a href="#">BDE</a></li>
                <li class="sousmenu green"><a href="#">Foire</a></li>
                <li class="sousmenu orange"><a href="#">Autre</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="title">
          <h2>Autre</h2>
        </div>

        <div class="about-paragraph">
          <p>Chapitô est un outil 100% en ligne. Le but de Chapitô est de créer une application “sur-mesure” sans avoir de connaissance en développement web ni en développement d’application. Campings, Bars, Restaurants, Salle de Spectacle, Associations, Cafés, Galeries d'art, Parcs d'atraction, vous êtes certainement concernés par une application ! Le numérique devient indispensable..</p>
        </div>

        <div class="arrow-bottom"><a href="#subtitle-why"><img
              src="~/assets/img/down-orange.png"
              width="70px"
            ></a></div>
      </div>

      <div class="container-why">
        <div id="subtitle-why">
          <h1>Pourquoi ?</h1>
        </div>
        <div class="paragraph-why">
          <p>Créer une application permet à votre public ou clientèle de connaître toutes les informations relatives à votre activité :
<br><br>

            <strong>Les animations et activtés, les interventions, les invités, les horaires des concerts, les différents programmes, les événements, les soirées organisées, les infos pratiques, les principaux points d’intérêt, les partenaires, etc…</strong><br><br>MAIS ! également d'être alerté des changements et informé des nouveautés grâce aux notifications ! Elles seront immédiates ou programmables, mais aussi ciblées ou générales.<br><br> L’application est un outil de communication à part entière et est au service de l’événement qu’elle promeut !</p>
        </div>

      </div>

    </div>
    <div class="container-who who-autre">

      <div class="subtitle-who">
        <h1>Pour<br>qui ?</h1>
      </div>
      <div class="paragraph-who">
        <p><strong>Votre public ou vos clients</strong> pourront enfin avoir accès à toutes les informations dont ils ont besoin directement sur leurs smartphones grâce à votre application !</p>
      </div>
      <div class="subtitle-where">
        <h1>Où la<br>trouver ?</h1>
      </div>
      <div class="paragraph-where">
        <p>L’application sera téléchargeable gratuitement sur <strong>iPhone et Android</strong>, elle correspondra parfaitement à votre image.</p>
      </div>
    </div>
    <div class="container">

      <div class="container-img">
        <img
          src="~/assets/img/Photos-autre.jpg"
          width="100%"
        >

      </div>

      <div class="container-advantage">

        <div class="subtitle-advantage">
          <h1>Les avantages</h1>
        </div>

        <div class="advantage-event orange">
          <div
            class="bloc-event-festival"
            id="bloc-event-autre"
          ><span>Concernant votre événement</span></div>
          <div class="advantage col-1-adv hidden">
            <img
              class="img-adv"
              src="~/assets/img/alternarif.png"
              width="60px"
            >
            <h4 class="titre-adv">Programmes personnalisés</h4>
            <div
              class="toggle"
              id="titlefirst"
            >blabl ablabl abalbaabalb albalbab ablbb ablab</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-1-adv', 'orange')"
              id="arrowfirst"
            >

            </div>

          </div>
          <div class="advantage col-2-adv hidden"><img
              class="img-adv"
              src="~/assets/img/update.png"
              width="60px"
            >
            <h4 class="titre-adv">Mise à jour des contenus en instantané</h4>
            <div
              class="toggle"
              id="titlesecond"
            >blablablablabalbaabalbalbalbabablbbablab</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-2-adv','orange')"
              id="arrowsecond"
            ></div>
          </div>
          <div class="advantage col-3-adv hidden"><img
              class="img-adv"
              src="~/assets/img/filtre.png"
              width="60px"
            >
            <h4 class="titre-adv">Filtres sur programmes</h4>
            <div
              class="toggle"
              id="titlethird"
            >blablablablabalbaabalbalbalbabablbbablab</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-3-adv', 'orange')"
              id="arrowthird"
            ></div>
          </div>
        </div>

        <div class="advantage-info red">
          <div
            class="bloc-info-festival"
            id="bloc-info-autre"
          ><span>Informations pratiques</span></div>
          <div class="advantage col-1-adv-bis hidden"><img
              class="img-adv"
              src="~/assets/img/offline.png"
              width="60px"
            >
            <h4 class="titre-adv">Notification ciblées</h4>
            <div class="toggle">blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-1-adv-bis', 'red')"
            ></div>
          </div>
          <div class="advantage col-2-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/cashless.png"
              width="60px"
            >
            <h4 class="titre-adv">Utilisation annuelle ou ponctuelle</h4>
            <div class="toggle">blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-2-adv-bis', 'red')"
            ></div>
          </div>
          <div class="advantage col-3-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/billet.png"
              width="60px"
            >
            <h4 class="titre-adv">Liste des participants</h4>
            <div class="toggle">blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-3-adv-bis', 'red')"
            ></div>
          </div>
          <div class="advantage col-4-adv hidden">
            <img
              class="img-adv"
              src="~/assets/img/offline.png"
              width="60px"
            >
            <h4 class="titre-adv">Privatisation de l'application</h4>
            <div class="toggle">blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-4-adv', 'red')"
            ></div>
          </div>
        </div>

      </div>

    </div>

    <div class="container-production">
      <div class="subtitle-production">
        <h1>Nos réalisations</h1>
      </div>
      <div
        class="background-rectangle"
        id="background-rectangle-orange"
      ></div>
      <carousel
        class="carousel"
        :per-page="1"
        :autoplay="true"
        :loop="true"
        paginationPosition="bottom-overlay"
      >
        <slide>
          <img
            src="~/assets/img/black-phones.png"
            alt="exemple d'application"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/black-phones.png"
            alt="exemple d'application"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/black-phones.png"
            alt="exemple d'application"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/black-phones.png"
            alt="exemple d'application"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/black-phones.png"
            alt="exemple d'application"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/black-phones.png"
            alt="exemple d'application"
          >
        </slide>
      </carousel>
    </div>

    <div class="container">

      <div class="container-tarif">
        <div class="subtitle-tarif">
          <h1>Tarifs</h1>
        </div>
        <div
          class="rectangle first"
          id="first-orange"
        ></div>
        <div class="bloc-carre carre-col-1">

          <h3>Profitez de<br>Chapitô<br>a partir de 3300€</h3>
          <p>Accédez à l’outil Chapitô afin de générez une application pour votre événement sur iPhone et sur Android</p>
        </div>

        <div
          class="rectangle second"
          id="second-red"
        ></div>
        <div class="bloc-carre carre-col-2">

          <h3>Offre<br>parrainage<br>500€</h3>
          <p>Parrainez un autre événement, vous obtiendrez une réduction de 500€ et votre filleul 250€.</p>
        </div>

      </div>

    </div>

    <div class="contact">
      <div
        class="btn-contact"
        id="btn-color-orange"
      >
        <a href="#">Nous contacter</a>
      </div>
      <div class="btn-demo">
        <a href="#">Programmer une démo</a>
      </div>
    </div>

    <footer>
      <div class="bandeau">
        <div class="log">
          <img
            src="~/assets/img/offline-orange.png"
            width="40px"
          >
          <p>Connectez-vous à votre espace personnel sur la plateforme chapi.to</p>
        </div>
        <div class="caract">
          <img
            src="~/assets/img/info-orange.png"
            width="40px"
          >
          <p>Renseignez toutes les informations et caractéristiques de votre festival</p>
        </div>
        <div class="appli">
          <img
            src="~/assets/img/mobile-orange.png"
            width="40px"
          >
          <p>Demandez à l’équipe de Chapito de générer les applications directement via l’outil</p>
        </div>

      </div>
      <div class="about-us">
        <h5>Qui sommes nous ?</h5>
        <p>Code Toopers,</p>
        <p>rue blabla</p>
        <p>37000 Tours</p>
      </div>
      <div class="about-users">
        <h5>Qui êtes-vous ?</h5>
        <ul>
          <li><a href="festival.vue">Festival</a></li>
          <li><a href="salon.vue">Salon</a></li>
          <li><a href="bde.vue">BDE</a></li>
          <li><a href="foire.vue">Foire</a></li>
          <li><a href="autre.vue">Autre</a></li>
        </ul>
      </div>
      <div class="follow">
        <h5>Restez connecté !</h5>
        <p>Newsletter</p>
        <form
          action="/ma-page-de-traitement"
          method="post"
        >

          <div class="news-form">
            <input
              type="email"
              id="mail"
              name="user_mail"
              placeholder="Entrez votre email"
              class="email-form"
            >
            <div class="button-form">
              <button type="submit">M'inscrire</button>
            </div>
          </div>

        </form>
        <p class="social-network">Réseaux sociaux</p>
        <a href="https://twitter.com/chapi_to">
          <img
            src="~/assets/img/icons8-twitter-entoure-96.png"
            width="46px"
            class="twitter"
            alt="logo de twitter"
          ></a>

      </div>

      <div class="infos">
        <a
          href="http://chapi.to/privacy_policy.html"
          class="mention"
        >Mentions légales </a>-
        <a
          href="#"
          class="policy"
        >Politique de confidentialité </a>
        <p class="copyright">&copy; 2019 Code Troopers</p>
      </div>
    </footer>
  </div>
</template>
