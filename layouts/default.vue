<template>
  <div class="background"></div>
  <div class="container">
    <header class="mt-3 is-flex is-justify-content-center is-align-content-center is-align-items-center">
      <img class="mr-2" src="/image/logo.png" alt="WOIPS LOGO" >
      <h1 class="has-text-weight-bold">WOIPS</h1>
    </header>
    <main class="is-flex is-justify-content-center columns mt-6">
      <article class="column is-7-desktop is-10-tablet is-12-mobile p-5">
        <slot/>
      </article>
    </main>
  </div>
</template>