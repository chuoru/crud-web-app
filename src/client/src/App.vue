<template>
  <div id="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, minimum-scale=1",
      },
    ],
  },
};
</script>

<style src="./style.css"></style>
<style>
@media only screen {
  #app {
    background-color: #222222;
    max-height: -webkit-fill-available;
  }

  /* Scroll Bar Css */
  /* width */
  ::-webkit-scrollbar {
      width: 7px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
      border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb {
      background: #5c9bb7; 
  }
}
</style>