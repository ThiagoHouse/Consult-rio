<template>
  <div class="layout">

    <!-- Navbar -->
    <header class="header">
      <b-navbar toggleable="lg" type="white" variant="white" fixed="top">
        <!-- <strong>
          <g-link to="/">{{ $static.metadata.siteName }}</g-link>
        </strong> -->
        <b-navbar-brand href="/" style="margin-left: 1%;">
          <g-image alt="Example image" src="~/assets/logo.png" width="100%" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav style="justify-content:space-around;">
          <b-navbar-nav class="">
            <g-link class="nav__link" to="/">Home</g-link class="nav__link">
            <g-link class="nav__link" to="/sobre/">Sobre</g-link class="nav__link">
            <g-link class="nav__link" to="/">Serviços</g-link class="nav__link">
            <g-link class="nav__link" to="/">Contato</g-link class="nav__link">
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>

    <!-- Conteúdo da página -->
    <slot />

    <!-- Footer -->
    <footer>
      <div class="container-fluid pt-2 pb-4">
        <div class="row d-flex justify-content-around">
          <div class="col-lg-4">
            <!-- <Logo height="50px" /> -->
            <g-image alt="Example image" src="~/assets/logo.png" width="100%" />
          </div>
          <div class="col-lg-3 offset-lg-1 order-lg-2 mt-4">
            <h6><strong>Fale conosco</strong></h6>
            E-mail: <a style="color:#636160"
              href="mailto:dayfisioterapeuta34@gmail.com.br">dayfisioterapeuta34@gmail.com.br</a><br>
            Whatsapp: <a style="color:#636160" href="https://web.whatsapp.com/send?phone=5521989045832">(21)
              98904-5832</a><br>
          </div>
          <div class="col-lg-4 text-center order-lg-1 mb-3 mt-4" align-self="center">
            <strong>
              <h6><strong>Redes Sociais</strong></h6>
            </strong>
            <a href="" target="_blank"> <g-image class="img-fluid" style="max-width: 32px; padding: 2px"
                src="~/assets/redes_sociais/youtube.png" alt="youtube" /></a>
            <a href="" target="_blank"> <g-image class="img-fluid" style="max-width: 32px; padding: 2px"
                src="~/assets/redes_sociais/instagram.png" alt="instagram" /></a>
            <a href="" target="_blank"> <g-image class="img-fluid" style="max-width: 32px; padding: 2px"
                src="~/assets/redes_sociais/facebook.png" alt="facebook" /></a>
            <a href="" target="_blank"> <g-image class="img-fluid" style="max-width: 32px; padding: 2px"
                src="~/assets/redes_sociais/linkedin.png" alt="linkedin" /></a>
          </div>
        </div>
      </div>
    </footer>

    <!-- Whatsapp -->
    <a href="https://wa.me/5521989045832" target="_blank"
      class="btn btn-whatsapp position-fixed rounded-circle d-flex align-items-center justify-content-center shadow"
      style="width: 64px; height: 64px; bottom: 16px; right: 16px; z-index: 100;">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="" style="height: 32px; fill: currentColor;">
        <path
          d="m435.32 74.4c-47.886-48-111.66-74.4-179.43-74.4-139.89 0-253.72 113.83-253.72 253.71 0 44.686 11.657 88.343 33.83 126.86l-36.001 131.43 134.52-35.314c37.028 20.229 78.742 30.857 121.26 30.857h0.114c139.77 0 256.11-113.83 256.11-253.71 0-67.772-28.8-131.43-76.685-179.43zm-179.43 390.4c-37.943 0-75.086-10.171-107.43-29.371l-7.657-4.572-79.772 20.914 21.258-77.828-5.029-8c-21.142-33.6-32.229-72.343-32.229-112.23 0-116.23 94.629-210.86 210.97-210.86 56.343 0 109.26 21.943 149.03 61.829 39.771 39.885 64.228 92.8 64.114 149.14 0 116.34-97.029 210.97-213.26 210.97zm115.66-157.94c-6.285-3.199-37.486-18.514-43.315-20.571-5.828-2.172-10.057-3.2-14.286 3.2-4.228 6.4-16.342 20.571-20.114 24.914-3.656 4.229-7.428 4.8-13.714 1.6-37.257-18.628-61.714-33.257-86.285-75.429-6.515-11.199 6.514-10.4 18.628-34.628 2.057-4.229 1.028-7.885-0.571-11.085-1.601-3.201-14.286-34.4-19.543-47.087-5.143-12.342-10.4-10.628-14.286-10.857-3.657-0.228-7.885-0.228-12.114-0.228-4.228 0-11.086 1.599-16.914 7.885-5.829 6.401-22.172 21.715-22.172 52.915s22.743 61.371 25.829 65.6c3.2 4.228 44.686 68.228 108.34 95.771 40.228 17.372 55.999 18.857 76.114 15.886 12.228-1.829 37.486-15.314 42.743-30.171s5.257-27.544 3.657-30.172c-1.485-2.857-5.714-4.457-12-7.543z">
        </path>
      </svg>
    </a>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  /* max-width: 760px; */
  margin: 0 auto;
  color: #292b2a;
  font-family: Uncutsans, sans-serif;
}

strong {
  font-size: 18px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

a {
  text-decoration: none;
}

section {
  /* padding-left: 20px;
  padding-right: 20px; */
  background-color: rgb(96, 194, 160);
}

footer {
  background-color: #bff5e8;
}

.header {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  margin-bottom: 20px;
  height: 80px;
  color: #003E30;
  background-color: #bff5e8;
}

.nav__link {
  margin-left: 20px;
  text-decoration: none;
  color: #003E30;
}

.btn-whatsapp {
  background-color: #22c35d;
  color: white;

  &:active,
  &:hover {
    background-color: #26d968;
    color: white;
  }

  a {
    text-decoration: none;
  }
}
</style>
