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
       <div class="info">
          <div class="pourcentage">
            <p>74%</p>
          </div>
          <div class="text-pourcentage">
            <p>des participants à un salon pensent qu'il est préférable d'utiliser une application plutôt que des documents papier pour avoir accès à toutes les informations de l'événement.</p>
          </div>
        </div>
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
              src="~/assets/img/icons8-calendar-80.png"
              width="60px"
            >
            <h4 class="titre-adv">Programmes personnalisés</h4>
            <div
              class="toggle"
              id="titlefirst"
            >Créez un ou plusieurs programmes, regroupez-les ou séparez-les, , filtrez-les sur votre mobile. Ex : un programme congrès, un programme conférences, ou encore un programme pitch.</div>
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
            >Mettez instantanément les contenus de votre application à jour, une erreur dans la programmation ou la liste des particpants, un changement d'intervenant, une nouvelle photo d'intervention, des nouvelles infos pratiques, etc. Actualisez tout le contenu de votre application instantanément </div>
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
              src="~/assets/img/icons8-lock-80.png"
              width="60px"
            >
            <h4 class="titre-adv">Privatisation de l'application</h4>
            <div
              class="toggle"
              id="titlethird"
            >Vous avez la possibilité de rendre l'utilisation de l'application privée. Cela signifie que vous aurez la possibilité de n'autoriser la navigation dans l'application qu'aux utilisateurs présents sur la whitelist, sur inscription. Si vos contenus sont privés, si vous souhaitez restreindre l'accès aux contenus de l'application, vous pouvez tout à fait le faire grâce à cette fonctionnalité.</div>
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
          ><span>Fonctionnalités adaptées</span></div>
          <div class="advantage col-1-adv-bis hidden"><img
              class="img-adv"
              src="~/assets/img/notification.png"
              width="60px"
            >
            <h4 class="titre-adv">Notifications ciblées</h4>
            <div
              id="titlefourth"
              class="toggle"
            >Envoyez autant de notifications que vous le souhaitez grâce à Chapitô. C'est rapide, efficace et cela vous offre de nombreuses possibilités. Alertez vos visiteurs en cas de changements, d'imprévus, etc. Envoyez également des notifications CIBLÉES, c'est encore mieux, informez uniquement certain groupes de personnes, les principaux concernés par votre nouvelle ou alerte.</div>
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
            >Vous mettez en place un système de paiement cashless pour votre salon ? C'est un sans faute ! Vos visiteurs pourrons directement recharger leur compte depuis l'application dans un onglet dédié. Nous pouvons aussi échanger à ce sujet, nous avons des solutions de cashless avantageuses avec des partenaires.</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-2-adv-bis','light-nude')"
            ></div>
          </div>
          <div class="advantage col-3-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/icons8-gps-disconnected-80.png"
              width="60px"
            >
            <h4 class="titre-adv">Mode hors-ligne</h4>
            <div class="toggle">95% du contenu de l'application est disponible hors ligne ! Une fois l'application téléchargée, vos visiteurs et participants pourrons profiter pleinement de tous ses contenus même si le réseaux n'est pas très bon ou saturé sur le lieux de votre événement.</div>
            <div
              class="arrow"
              onclick="javascript:toggl('col-3-adv-bis', 'light-nude')"
            ></div>
          </div>
          <div class="advantage col-4-adv hidden">
            <img
              class="img-adv"
              src="~/assets/img/billet.png"
              width="60px"
            >
            <h4 class="titre-adv">Billeterie</h4>
            <div class="toggle">Vous avez une billeterie ? Plusieurs ? Parfait, retrouvez-les directements sur l'application. Soit sur une page dédiée pour une billeterie générale soit dans chaque fiches événements si vous avez plusieurs événements et plusieurs billeteries. Nous pouvons aussi échanger à ce sujet, nous avons des solutions de billeterie avantageuses avec des partenaires.</div>
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
          <p>Accédez à l’outil Chapitô afin de générer une application pour votre salon sur iPhone et sur Android</p>
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
          href=""
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
