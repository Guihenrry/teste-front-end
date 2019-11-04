<template>
  <div v-if="active" class="alert">
    <p class="alert__mensage">{{mensage}}</p>
  </div>
</template>

<script>
export default {
  name: "BaseAlert",
  props: {
    active: Boolean,
    mensage: String
  }
};
</script>

<style scoped>
.alert {
  position: absolute;
  padding: 15px;
  bottom: 15px;
  right: 15px;
  background: #cf6679;
  border-radius: 4px;
  max-width: 300px;
}

.alert__mensage {
  color: #000;
  font-weight: 500;
}
</style>