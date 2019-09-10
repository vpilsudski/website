<template>
  <div>

    <a href="index.html"><img
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
          <h2>BDE</h2>
        </div>

        <div class="about-paragraph">
          <p>Chapitô est un outil 100% en ligne. Le but de Chapitô est de permettre à n’importe quel BDE ou association étudiante organisateur d’événements de pouvoir créer une application « sur-mesure » sans avoir de connaissances en développement web ni en développement d’application.</p>
        </div>

        <div class="arrow-bottom"><a href="#subtitle-why"><img
              src="~/assets/img/down-blue.png"
              width="70px"
            ></a></div>
      </div>

      <div class="container-why">
        <div id="subtitle-why">
          <h1>Pourquoi ?</h1>
        </div>
        <div class="paragraph-why-left">
          <p>Créer une application pour votre BDE permet à tous les étudiants de connaître toutes les informations relatives aux associations et à la vie de l'école :<br><br>

            <strong>Les intervenants présents, les horaires des soirées, la programmation, les infos sur le week-end d’inté, les infos pratiques, les préventes, les partenaires, la billetterie etc..</strong><br><br> MAIS ! également de rester informé des changements et être alerté des nouveautés grâce aux notifications !<br><br> L’application est un outil de communication à part entière et est au service de l’événement qu’elle promeut !</p>
        </div>
      <div class="info">
          <div class="pourcentage">
            <p>98%</p>
          </div>
          <div class="text-pourcentage">
            <p>des étudiants se disent prêts à privilégier une application comme système de communication avec leur école ou BDE. </p>
          </div>
        </div>

    </div>
    <div class="container-who who-bde">

      <div class="subtitle-who">
        <h1>Pour<br>qui ?</h1>
      </div>
      <div class="paragraph-who">
        <p><strong>Les étudiants</strong> pourront enfin avoir accès à toutes les information dont ils ont besoin et réserver leurs préventes de soirées directement sur leurs smartphones grâce à votre application !</p>
      </div>
      <div class="subtitle-where">
        <h1>Où la<br>trouver ?</h1>
      </div>
      <div class="paragraph-where">
        <p>L’application sera téléchargeable gratuitement sur <strong>iPhone et Android</strong>, elle correspondra parfaitement à votre BDE ou association étudiante. La classe !</p>
      </div>
    </div>
    <div class="container">

      <div class="container-img">
        <img
          src="~/assets/img/Photos-BDE.jpg"
          width="100%"
        >

      </div>

     <div class="container-advantage">

            <div class="subtitle-advantage">
                <h1>Les avantages</h1>
            </div>

            <div class="advantage-event blue">
                <div class="bloc-event-festival" id="bloc-event-bde"><span>Concernant vos événements</span></div>
                <div class="advantage col-1-adv hidden">
                    <img class="img-adv" src="~/assets/img/icons8-calendar-80.png" width="60px">
                    <h4 class="titre-adv">Programmes de vos évènements</h4>
                    <div class="toggle" id="titlefirst">Créez un ou plusieurs programmes, regroupez-les ou séparez-les, filtrez-les sur votre mobile. Ex : un programme soirée, un programme week-end d'intégration et un programme semaine au ski ! </div>
                    <!-- LA ICI -->
                    <div class="arrow" onclick="javascript:toggl('col-1-adv','blue')" id="arrowfirst">
                      
                    </div>

                </div>
                <div class="advantage col-2-adv hidden"><img class="img-adv" src="~/assets/img/update.png" width="60px">
                    <h4 class="titre-adv">Mise à jour des contenus en instantané</h4>
                    <div class="toggle" id="titlesecond">Mettez instantanément les contenus de votre application à jour, une erreur dans la programmation du WEI ou des soirées, un changement de programme pour la semaine au ski, une nouvelle photo d'un intervenant, des nouvelles infos, etc. Actualisez tout le contenu de votre application instantanément. </div>
                    <!-- LA ICI -->
                    <div class="arrow" onclick="javascript:toggl('col-2-adv','blue')" id="arrowsecond"></div>
                </div>
                <div class="advantage col-3-adv hidden"><img class="img-adv" src="~/assets/img/icons8-lock-80.png" width="60px">
                    <h4 class="titre-adv">Privatisation de l'application</h4>
                    <div class="toggle" id="titlethird">Vous avez la possibilité de rendre l'utilisation de l'application privée. Cela signifie que vous aurez la possibilité de n'autoriser la navigation dans l'application qu'aux étudiants présents sur la whitelist, sur inscription. Si vos contenus sont privés, si vous souhaitez restreindre l'accès aux contenus de l'application, vous pouvez tout à fait le faire grâce à cette fonctionnalité.</div>
                    <!-- LA ICI -->
                    <div class="arrow" onclick="javascript:toggl('col-3-adv','blue')" id="arrowthird"></div>
                </div>
            </div>

            <div class="advantage-info dark-blue">
                <div class="bloc-info-festival" id="bloc-festival-bde"><span>Fonctionnalités adaptées</span></div>
                <div class="advantage col-1-adv-bis hidden"><img class="img-adv" src="~/assets/img/icons8-gps-disconnected-80.png" width="60px">
                    <h4 class="titre-adv">Mode hors-ligne</h4>
                    <div class="toggle">95% du contenu de l'application est disponible hors ligne ! Une fois l'application téléchargée, les étudiants pourrons profiter pleinement de tous ses contenus même s'ils ne captent pas bien internet là où ils se trouvent.</div>
                    <div class="arrow" onclick="javascript:toggl('col-1-adv-bis','dark-blue')"></div>
                </div>
                <div class="advantage col-2-adv-bis hidden">
                    <img class="img-adv" src="~/assets/img/cashless.png" width="60px">
                    <h4 class="titre-adv">Cashless</h4>
                    <div class="toggle">Vous mettez en place un système de paiement cashless pour certains de vos événements ? Cool ! Les étudiants pourrons directement recharger leur compte depuis l'application dans un onglet dédié. Nous pouvons aussi échanger à ce sujet, nous avons des solutions de cashless avantageuses avec des partenaires.</div>
                    <div class="arrow" onclick="javascript:toggl('col-2-adv-bis','dark-blue')"></div>
                </div>
                <div class="advantage col-3-adv-bis hidden">
                    <img class="img-adv" src="~/assets/img/billet.png" width="60px">
                    <h4 class="titre-adv">Billeterie</h4>
                    <div class="toggle">Vous avez une billeterie pour vos événement ? Plusieurs ? Lydia ? Pumkin ? Autre ? Parfait, retrouvez-les directements sur l'application. Soit sur une page dédiée pour une billeterie générale soit dans chaque fiches événements si vous avez plusieurs événements et plusieurs billeteries. Nous pouvons aussi échanger à ce sujet, nous avons des solutions de billeterie avantageuses avec des partenaires.</div>
                    <div class="arrow" onclick="javascript:toggl('col-3-adv-bis','dark-blue')"></div>
                </div>
                <div class="advantage col-4-adv hidden">
                    <img class="img-adv" src="~/assets/img/notification.png" width="60px">
                    <h4 class="titre-adv">Notifications ciblées</h4>
                    <div class="toggle">Fonctionnalité indispensable, vous allez pouvoir alerter les étudiants, les prévenir d'un changement de programme. Leur rappeler le début d'une soirée etc. etc. Des possibilités infinies. Envoyez autant de notifications que vous le souhaitez grâce à Chapitô. Envoyez également des notifications CIBLEES, c'est encore mieux, informez uniquement certain groupe de d'étudiant, les principaux concernés par votre alerte.</div>
                    <div class="arrow" onclick="javascript:toggl('col-4-adv','dark-blue')"></div>
                </div>
            </div>

        </div>

    </div>
    <div class="container-production">
      <div class="subtitle-production">
        <h1>Nos réalisations</h1>
      </div>
      <div class="background-rectangle background-rectangle-blue"></div>
      <carousel
        class="carousel"
        :per-page="1"
        :autoplay="true"
        :loop="true"
        paginationPosition="bottom-overlay"
      >
        <slide>
          <img
            src="~/assets/img/ieseg iphone.png"
            alt="Mockup ieseg"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/kedge iphone.png"
            alt="Mockup Kedge BDE"
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
          id="first-light-blue"
        ></div>
        <div class="bloc-carre carre-col-1">

          <h3>Profitez de<br>Chapitô<br>à partir de 3300€</h3>
          <p>Accédez à l’outil Chapitô afin de générer une application pour votre BDE/ASSOCIATION sur iPhone et sur Android</p>
        </div>

        <div
          class="rectangle second"
          id="second-blue"
        ></div>
        <div class="bloc-carre carre-col-2">

          <h3>Offre<br>parrainage<br>500€</h3>
          <p>Parrainez un autre événement ou BDE, vous obtiendrez une réduction de 500€ et votre filleul 250€.</p>
        </div>

      </div>

    </div>

    <div class="contact">
      <div
        class="btn-contact"
        id="btn-color-blue"
      >
        <a href="mailtocontact@chapi.to">Nous contacter</a>
      </div>
      <div class="btn-demo">
        <a href="http://calendly.com/chapito">Programmer une démo</a>
      </div>
    </div>

    <footer>
      <div class="bandeau">
        <div class="log">
          <img
            src="~/assets/img/online-blue.png"
            width="40px"
          >
          <p>Connectez-vous à votre espace personnel sur la plateforme chapi.to</p>
        </div>
        <div class="caract">
          <img
            src="~/assets/img/info-blue.png"
            width="40px"
          >
          <p>Renseignez toutes les informations et caractéristiques de votre festival</p>
        </div>
        <div class="appli">
          <img
            src="~/assets/img/mobile-blue.png"
            width="40px"
          >
          <p>Demandez à l’équipe de Chapito de générer les applications directement via l’outil</p>
        </div>

      </div>
      <div class="about-us">
         <h5>Qui sommes nous ?</h5>
        <p>Chapitô by Code-Troopers,</p>
        <p>MAME, Cité de la création et du numérique</p>
        <p>49 boulevard Preuilly</p>
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
          href="#"
          class="mention"
        >Mentions légales </a>-
        <a
          href="http://chapi.to/privacy_policy.html"
          class="policy"
        >Politique de confidentialité </a>
        <p class="copyright">&copy; 2019 Code Troopers</p>
      </div>
    </footer>
  </div>
</template>
