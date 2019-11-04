<template>
  <div class="error">
    <h1 class="error__title">😥 Algo deu errado. Sinto muito não conseguimos carregar o vídeo.</h1>
    <router-link :to="{name: 'home'}" class="error__link">Voltar para home</router-link>
  </div>
</template>

<script>
export default {
  name: "BaseError"
};
</script>

<style scoped>
.error {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.error__title {
  color: #fff;
  font-weight: 400;
  max-width: 400px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.error__link {
  display: inline-block;
}
</style>