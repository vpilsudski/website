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
                <li class="sousmenu orange"><a href="#">Autre</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="title">
          <h2>Festival</h2>
        </div>

        <div class="about-paragraph">
          <p>Chapitô est un outil 100% en ligne. Le but de Chapitô est de permettre à n’importe quel organisateur de festival de pouvoir créer une application “sur-mesure” sans avoir de connaissance en développement web ni en développement d’application.</p>
        </div>

        <div class="arrow-bottom"><a href="#subtitle-why"><img
              src="~/assets/img/down-pink.png"
              width="70px"
            ></a></div>
      </div>

      <div class="container-why">
        <div id="subtitle-why">
          <h1>Pourquoi ?</h1>
        </div>
        <div class="paragraph-why">
          <p>Créer une application pour votre festival permet à votre public de connaître toutes les informations relatives à votre événement :<br><br>

            <strong>Les artistes présents, les horaires des concerts, la programmation, des extraits musicaux et musiques, les infos pratiques, les principaux points d’intérêt, les partenaires, etc…</strong><br><br> MAIS ! également de rester informé des changements et être alerté des nouveautés grâce aux notifications ! Elles seront immédiates ou programmables.<br><br> L’application est un outil de communication à part entière et est au service de l’événement qu’elle promeut !</p>
        </div>
        <div class="info">
          <div class="pourcentage">
            <p>80%</p>
          </div>
          <div class="text-pourcentage">
            <p>des festivaliers trouvent « qu’il est utile d’avoir une application dédiée au festival » </p>
          </div>
        </div>
      </div>

    </div>
    <div class="container-who">

      <div class="subtitle-who">
        <h1>Pour<br>qui ?</h1>
      </div>
      <div class="paragraph-who">
        <p><strong>Vos festivaliers</strong> pourront enfin avoir accès à toutes les informations dont ils ont besoin directement sur leurs smartphones grâce à votre application !</p>
      </div>
      <div class="subtitle-where">
        <h1>Où la<br>trouver ?</h1>
      </div>
      <div class="paragraph-where">
        <p>L’application sera téléchargeable gratuitement sur <strong>iPhone et Android</strong>, elle correspondra parfaitement à votre festival. La classe !</p>
      </div>
    </div>
    <div class="container">

      <div class="container-img">
        <img
          src="~/assets/img/Photos-festivals-RVB.jpg"
          width="100%"
        >

      </div>

      <div class="container-advantage">

        <div class="subtitle-advantage">
          <h1>Les avantages</h1>
        </div>

        <div class="advantage-event pink">
          <div class="bloc-event-festival"><span>Concernant votre festival</span></div>
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
            >Créez un ou plusieurs programmes, regroupez-les ou séparez-les, , filtrez-les sur votre mobile. Ex : un programme gratuit et un programme payant, ou encore, programme avant festival et pendant festival.</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-1-adv', 'pink')"
              id="arrowfirst"
            >

            </div>

          </div>
          <div class="advantage col-2-adv hidden"><img
              class="img-adv"
              src="~/assets/img/icons8-gps-disconnected-80.png"
              width="60px"
            >
            <h4 class="titre-adv">Mode hors ligne</h4>
            <div
              class="toggle"
              id="titlesecond"
            >95% du contenu de l'application est disponible hors ligne ! Une fois l'application téléchargée, les festivaliers pourrons profiter pleinement de tous ses contenus même s'ils n'ont pas internet sur le festial.</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-2-adv','pink')"
              id="arrowsecond"
            ></div>
          </div>
          <div class="advantage col-3-adv hidden"><img
              class="img-adv"
              src="~/assets/img/filtre.png"
              width="60px"
            >
            <h4 class="titre-adv">Filtres sur programme</h4>
            <div
              class="toggle"
              id="titlethird"
            >Directement sur l'application, filtrer les différents concerts ou artistes en fonction de vos envies, de vos préférences, du lieux où vous vous trouvez, du programme auquel vous participez etc. Mettez en favoris vos événements, concerts, ou artistes préférés pour repérer en un clein d'oeil vos prochains RDV</div>
            <!-- LA ICI -->
            <div
              class="arrow"
              onclick="javascript:toggl('col-3-adv','pink')"
              id="arrowthird"
            ></div>
          </div>
        </div>

        <div class="advantage-info light-blue">
          <div class="bloc-info-festival"><span>Fonctionnalités adaptées</span></div>
          <div class="advantage col-1-adv-bis hidden"><img
              class="img-adv"
              src="~/assets/img/offline.png"
              width="60px"
            >
            <h4 class="titre-adv">Carte ou Plan</h4>
            <div class="toggle">Créez une carte ou un plan détaillé de votre festivals, renseignez un fond de carte créé par vos soins, indiquez les différentes zones (payantes et gratuites par ex.), renseignez les différents points d'intéret de votre festival etc. Vos festivaliers ne se perdrons plus jamais grâce à la géolocalisation</div>
            <div class="arrow"></div>
          </div>
          <div class="advantage col-2-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/cashless.png"
              width="60px"
            >
            <h4 class="titre-adv">Cashless</h4>
            <div class="toggle">Vous mettez en place un système de paiement cashless sur votre festival ? C'est un sans faute! Les festivaliers pourrons directement recharger leur compte depuis l'application dans un onglet dédié. Nous pouvons aussi échanger à ce sujet, nous avons des solutions de cashless avantageuses avec des partenaires.</div>
            <div class="arrow"></div>
          </div>
          <div class="advantage col-3-adv-bis hidden">
            <img
              class="img-adv"
              src="~/assets/img/billet.png"
              width="60px"
            >
            <h4 class="titre-adv">Billeterie</h4>
            <div class="toggle">Vous avez une billeterie pour votre festival ? Plusieurs ? Parfait, retrouvez-les directements sur l'application. Soit sur une page dédiée pour une billeterie générale soit dans chaque fiches événements si vous avez plusieurs événements et plusieurs billeteries. Nous pouvons aussi échanger à ce sujet, nous avons des solutions de billeterie avantageuses avec des partenaires.</div>
            <div class="arrow"></div>
          </div>
          <div class="advantage col-4-adv hidden">
            <img
              class="img-adv"
              src="~/assets/img/notification.png"
              width="60px"
            >
            <h4 class="titre-adv">Notifications</h4>
            <div class="toggle">Envoyez autant de notifications que vous le souhaitez grâce à Chapitô. C'est rapide, efficace, et cela vous offre de nombreuses possibilités. Alertez vos festivaliers en cas de changements, d'imprévus, etc. Envoyez aussi des notifications CIBLEES, c'est encore mieux, ciblez uniquement un certain groupe de personnes, ceux présents à un before festival par exemple. </div>
            <div class="arrow"></div>
          </div>
        </div>

      </div>

    </div>

    <div class="container-production">
      <div class="subtitle-production">
        <h1>Nos réalisations</h1>
      </div>
      <div class="background-rectangle background-rectangle-pink"></div>

      <carousel
        class="carousel"
        :per-page="1"
        :autoplay="true"
        :loop="true"
        paginationPosition="bottom-overlay"
      >
        <slide>
          <img
            src="~/assets/img/Nuits sonores iphone.png"
            alt="Mockup Nuits Sonores Festival"
          >
           </slide>
            <slide>
          <img
            src="~/assets/img/aucard iphone.png"
            alt="Mockup Aucard"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/panoramas iphone.png"
            alt="Mockup Panoramas Festival"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/pitchfork iphone.png"
            alt="Mockup Pitchfork Festival"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/rdv erdre iphone.png"
            alt="Mockup RDV erdre"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/terres du son iphone.png"
            alt="Mockup Terres du son"
          >
        </slide>
        <slide>
          <img
            src="~/assets/img/vilette iphone.png"
            alt="Mockup Vilette Sonique"
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
          id="first-pink"
        ></div>
        <div class="bloc-carre carre-col-1">

          <h3>Profitez de<br>Chapitô<br>à partir de 2500€</h3>
          <p>Accédez à l’outil Chapitô afin de générer une application pour votre festival sur iPhone et sur Android</p>
        </div>

        <div
          class="rectangle second"
          id="second-blue-lighter"
        ></div>
        <div class="bloc-carre carre-col-2">

          <h3>Offre<br>parrainage<br>500€</h3>
          <p>Parrainez un autre événement, vous obtiendrez une réduction de 500€ et votre filleul 250€.</p>
        </div>

      </div>

    </div>

    <div class="contact">
      <div class="btn-contact">
        <a href="mailto:contact@chapi.to">Nous contacter</a>
      </div>
      <div class="btn-demo">
        <a href="https://calendly.com/chapito">Programmer une démo</a>
      </div>
    </div>

    <footer>
      <div class="bandeau">
        <div class="log">
          <img
            src="~/assets/img/offline-pink.png"
            width="40px"
          >
          <p>Connectez-vous à votre espace personnel sur la plateforme chapi.to</p>
        </div>
        <div class="caract">
          <img
            src="~/assets/img/info-pink.png"
            width="40px"
          >
          <p>Renseignez toutes les informations et caractéristiques de votre festival</p>
        </div>
        <div class="appli">
          <img
            src="~/assets/img/mobile-pink.png"
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
