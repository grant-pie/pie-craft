<template>
  <div class="app-container">

    <!-- Content -->
    <div class="content-wrapper">
      <nav class="navbar d-xl-none fixed-top bg-white ">
    
      <button class="navbar-toggler ms-5  d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span class="navbar-toggler-icon "></span>
        </button>

        <div class="d-flex d-xl-none justify-content-center z-minus-1 w-100 position-absolute">
          <img src="/images/logo.png" alt="" class="align-self-center" height="50px" width="50px">
        </div>

    </nav>
      <SideNav />
      <main class="main-content-wrapper mx-5">

            <!-- Background image and overlay -->
        <div class="background-image"></div>
        <div class="background-overlay"></div>
        
        <NuxtPage />
      </main>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto!important;
}

.app-container {
  min-height: 100vh;
  width: 100%;
  padding: 0;
  position: relative;
}

/* Background image */
.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/images/background.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
}

/* Overlay */
.background-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.85); /* White with 85% opacity */
  z-index: -1;
}

.content-wrapper {
  display: flex;
  min-height: 100vh;
  position: relative;
  z-index: 1;
}

.main-content-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;

}

.mt-10{
  margin-top: 7rem;;
}
  
.z-minus-1{
  z-index: -1;
}

.row{
    --bs-gutter-x: 0;
}

</style>