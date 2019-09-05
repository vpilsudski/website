<template>
  <div>

    <a href="index.html"><img
        src="~/assets/img/chap-log.png"
        width="150px"
        class="top-logo"
      ></a>
    <div class="container">

      <div class="head-container head-salon">
        <div class="menu">
          <ul
            class="menu"
            id="menu1"
            onclick="afficheMenu(this)"
          >
            <!-- <li><a href="#"><img
                  src="~/assets/img/menu%20blanc%20Fichier%203@4x.png"
                  width="50px"
                  alt="icone menu"
                ></a> -->
            <ul
              id="sousmenu1"
              style="display: none"
            >
              <li class="sousmenu yellow"><a href="festival.html">Festival</a></li>
              <li class="sousmenu red"><a href="salon.html">Salon</a></li>
              <li class="sousmenu violet"><a href="bde.html">BDE</a></li>
              <li class="sousmenu green"><a href="foire.html">Foire</a></li>
              <li class="sousmenu orange"><a href="autre.html">Autre</a></li>
            </ul>
            </li>
          </ul>
        </div>

        <div class="title title-salon">
          <h2>Salon</h2>
        </div>

        <div class="about-paragraph">
          <p>Chapitô est un outil 100% en ligne. Le but de Chapitô est de permettre à n’importe quel organisateur de salon professionel ou grand public de pouvoir créer une application « sur-mesure » sans avoir de connaissances en développement web ni en développement d’application.</p>
        </div>

        <div class="arrow-bottom"><a href="#subtitle-why"><img
              src="~/assets/img/down-nude.png"
              width="70px"
            ></a></div>
      </div>

      <div class="container-why">
        <div id="subtitle-why">
          <h1>Pourquoi ?</h1>
        </div>
        <div class="paragraph-why-left">
          <p>Créer une application pour votre salon permet à votre public de connaître toutes les informations relatives à votre événement :<br><br>

            <strong>Les exposants présents, les horaires des animations, la programmation, les infos pratiques, les principaux points d’intérêt, les partenaires, etc…</strong><br><br>MAIS ! également de rester informé des changements et être alerté des nouveautés grâce aux notifications ! Elles seront immédiates ou programmables.<br><br> L’application est un outil de communication à part entière et est au service de l’événement qu’elle promeut !</p>
        </div>
        <div class="circle"><span>Lorem ipsum</span></div>
      </div>

    </div>
    <div class="container-who who-salon">

      <div class="subtitle-who">
        <h1>Pour<br>qui ?</h1>
      </div>
      <div class="paragraph-who">
        <p><strong>Vos visiteurs</strong> pourront enfin avoir accès à toutes les informations dont ils ont besoin directement sur leurs smartphones grâce à votre application !
</p>
      </div>
      <div class="subtitle-where">
        <h1>Où la<br>trouver ?</h1>
      </div>
      <div class="paragraph-where">
        <p>L’application sera téléchargeable gratuitement sur <strong>iPhone et Android</strong>, elle correspondra parfaitement à votre salon. La classe !</p>
      </div>
    </div>
    <div class="container">

      <div class="container-img">
        <img
          src="~/assets/img/Photos-salon.jpg"
          width="100%"
        >

      </div>

      <div class="container-advantage">

        <div class="subtitle-advantage">
          <h1>Les avantages</h1>
        </div>

        <div class="advantage-event nude">
          <div
            class="bloc-event-festival"
            id="bloc-event-salon"
          ><span>Concernant votre salon</span></div>
          <div class="advantage col-1-adv hidden">
            <img
              class="img-adv"
              src="~/assets/img/alternarif.png"
              width="60px"
            >
            <h4 class="titre-adv">Programmes personnalisé</h4>
            <div
              class="toggle"
              id="titlefirst"
            >blabl ablabl abalbaabalb albalbab ablbb ablab</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-1-adv', 'nude')"
              id="arrowfirst"
            >
              <!-- la ya pu rien-->
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
              onclick="javascript:toggl('col-2-adv', 'nude')"
              id="arrowsecond"
            >
              <!-- la ya pu rien-->
            </div>
          </div>
          <div class="advantage col-3-adv hidden"><img
              class="img-adv"
              src="~/assets/img/filtre.png"
              width="60px"
            >
            <h4 class="titre-adv">Privatisation de l'application</h4>
            <div
              class="toggle"
              id="titlethird"
            >blablablablabalbaabalbalbalbabablbbablab</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-3-adv', 'nude')"
              id="arrowthird"
            ></div>
          </div>
        </div>
        <!-- Deuxieme part -->
        <div class="advantage-info light-nude">
          <div
            class="bloc-info-festival"
            id="bloc-info-salon"
          ><span>Informations pratiques</span></div>
          <div class="advantage col-1-adv-bis hidden"><img
              class="img-adv"
              src="~/assets/img/offline.png"
              width="60px"
            >
            <h4 class="titre-adv">Notifications ciblées</h4>
            <div
              id="titlefourth"
              class="toggle"
            >blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-1-adv-bis', 'light-nude')"
              id="arrowfourth"
            ></div>
          </div>
          <div class="advantage col-2-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/cashless.png"
              width="60px"
            >
            <h4 class="titre-adv">Cashless</h4>
            <div
              id="titlefifth"
              class="toggle"
            >blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-2-adv-bis','light-nude')"
            ></div>
          </div>
          <div class="advantage col-3-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/billet.png"
              width="60px"
            >
            <h4 class="titre-adv">Mode hors-ligne</h4>
            <div class="toggle">blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-3-adv-bis', 'light-nude')"
            ></div>
          </div>
          <div class="advantage col-4-adv hidden">
            <img
              class="img-adv"
              src="~/assets/img/offline.png"
              width="60px"
            >
            <h4 class="titre-adv">Billeterie</h4>
            <div class="toggle">blablablablabalbaabalbalbalbabablbbablab</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-4-adv', 'light-nude')"
            ></div>
          </div>
        </div>

      </div>

    </div>

    <div class="container-production">
      <div class="subtitle-production">
        <h1>Nos réalisations</h1>
      </div>
      <div class="background-rectangle background-rectangle-nude"></div>
      <<carousel
        class="carousel"
        :per-page="1"
        :autoplay="true"
        :loop="true"
        paginationPosition="bottom-overlay"
      >
        <slide>
          <img
            src="~/assets/img/european lab iphone.png"
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
          id="first-nude"
        ></div>
        <div class="bloc-carre carre-col-1">

          <h3>Profitez de<br>Chapitô<br> à partir de 2500€</h3>
          <p>Accédez à l’outil Chapitô afin de générez une application pour votre salon sur iPhone et sur Android</p>
        </div>

        <div
          class="rectangle second"
          id="second-light-nude"
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
        id="btn-color-nude"
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
            src="~/assets/img/offline-nude.png"
            width="40px"
          >
          <p>Connectez-vous à votre espace personnel sur la plateforme chapi.to</p>
        </div>
        <div class="caract">
          <img
            src="~/assets/img/info-nude.png"
            width="40px"
          >
          <p>Renseignez toutes les informations et caractéristiques de votre festival</p>
        </div>
        <div class="appli">
          <img
            src="~/assets/img/mobile-nude.png"
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
          <li><a href="#">Festival</a></li>
          <li><a href="#">Salon</a></li>
          <li><a href="#">BDE</a></li>
          <li><a href="#">Autre</a></li>
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
        <a href="#">
          <img
            src="~/assets/img/icons8-twitter-entoure-96.png"
            width="46px"
            class="twitter"
            alt="logo de twitter"
          ></a>

      </div>

      <div class="infos">
        <a
          href="#"
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
