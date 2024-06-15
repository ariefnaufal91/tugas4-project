<template>
  <div class="card">
    <h2>
      {{ bukuName }}
    </h2>
    <p>{{ bukuDesc }}</p>
    <button @click="toggleFavorite">Favorite</button>
  </div>    
</template>

<script>
export default {
  props: ['bukuName', 'bukuDesc', 'isFavorite'],
  data() {
    return {
      bukuIsFavorite: this.isFavorite
    }
  },
  methods: {
    toggleFavorite() {
      this.bukuIsFavorite = !this.bukuIsFavorite;
      this.$emit('toggle-favorite');
    }
  }
};
</script>

<style scoped>
.card {
  background: #e3f2fd;
  border-radius: 8px;
  padding: 15px;
  margin: 10px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
img {
  height: 1.5em;
}
button {
  background: #42a5f5;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #1e88e5;
}
</style>
