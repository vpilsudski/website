<template>

  <div class="container-home">
    <div class="logo-baseline">
      <div class="logo-gris"> <img
          src="~/assets/img/chap-log.png"
          width="100%"
        ></div>
      <br>
      <span class="baseline">Pour votre événement,<br>votre application, créez-la.</span>

    </div>

    <div class="menu-inline">
      <ul id="test">
        <li class="pink-home">
          <nuxt-link
            class="menu-main-title"
            to="/festival"
            @mouseover.native="mode = 'festival'"
          >Festival</nuxt-link>
        </li>
        <li class="blue-home">
          <nuxt-link
            class="menu-main-title"
            to="/bde"
            @mouseover.native="mode = 'bde'"
          >BDE</nuxt-link>
        </li>
        <li class="nude-home">
          <nuxt-link
            class="menu-main-title"
            to="/salon"
            @mouseover.native="mode = 'salon'"
          >Salon</nuxt-link>
        </li>
        <li class="green-home">
          <nuxt-link
            class="menu-main-title"
            to="/foire"
            @mouseover.native="mode = 'foire'"
          >Foire</nuxt-link>
        </li>
        <li class="orange-home">
          <nuxt-link
            class="menu-main-title"
            to="/autre"
            @mouseover.native="mode = 'autre'"
          >Autre</nuxt-link>
        </li>
      </ul>
    </div>

    <div
      class="img-blob pink-home"
      v-if="mode === 'festival'"
    > <img
        src="~/assets/img/pitchfork iphone.png"
        width="400px"
      ></div>

    <div
      class="img-blob blue-home"
      v-if="mode === 'bde'"
    > <img
        src="~/assets/img/ieseg iphone.png"
        width="400px"
      ></div>

    <div
      class="img-blob nude-home"
      v-if="mode === 'salon'"
    > <img
        src="~/assets/img/european lab iphone.png"
        width="400px"
      ></div>
    <div
      class="img-blob green-home"
      v-if="mode === 'foire'"
    > <img
        src="~/assets/img/FAVA Iphone.png"
        width="400px"
      ></div>
    <div
      class="img-blob orange-home"
      v-if="mode === 'autre'"
    > <img
        src="~/assets/img/Panoramas Iphone.png"
        width="400px"
      ></div>

    <div class="btn-demo-home"><a href="https://calendly.com/chapito">
        Programmer une démo</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: "festival"
    };
  }
};
</script>
