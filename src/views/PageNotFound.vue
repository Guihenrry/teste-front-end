<template>
  <div class="not-found">
    <h1 class="not-found__title">😥 Página não encontrada</h1>
    <router-link :to="{name: 'home'}" class="not-found__link">Voltar para home</router-link>
  </div>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style scoped>
.not-found {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.not-found__title {
  color: #fff;
  font-weight: 400;
  max-width: 400px;
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.not-found__link {
  display: inline-block;
}
</style>