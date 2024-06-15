<template>
  <div id="wrapper">
    <section>
      <h1>Hobi</h1>
      <Hobi
        v-for="x in hobiList"
        :key="x.name"
        :hobi-name="x.name"
        :hobi-desc="x.desc"
        :is-favorite="x.favorite" 
        @toggle-favorite="receiveEmit" />
    </section>
    <section>
      <h1>Buku</h1>
      <Buku
        v-for="x in bukuList"
        :key="x.name"
        :buku-name="x.name"
        :buku-desc="x.desc"
        :is-favorite="x.favorite" 
        @toggle-favorite="receiveEmit" />
    </section>
    <section>
      <h1>Film</h1>
      <Film
        v-for="x in filmList"
        :key="x.name"
        :film-name="x.name"
        :film-desc="x.desc"
        :is-favorite="x.favorite" 
        @toggle-favorite="receiveEmit" />
    </section>
  </div>
</template>

<script>
import Hobi from './components/Hobi.vue';
import Buku from './components/Buku.vue';
import Film from './components/Film.vue';

export default {
  components: {
    Hobi,
    Buku,
    Film
  },
  data() {
    return {
      hobiList: [
        { name: 'Fotografi', desc: 'Mengabadikan momen-momen indah dengan kamera', favorite: true },
        { name: 'Bersepeda', desc: 'Olahraga menyenangkan dengan sepeda', favorite: false },
        { name: 'Memasak', desc: 'Kegiatan memasak berbagai hidangan', favorite: true },
        { name: 'Membaca', desc: 'Menikmati buku dan cerita', favorite: true }
      ],
      bukuList: [
        { name: 'To Kill a Mockingbird', desc: 'Novel klasik karya Harper Lee', favorite: true },
        { name: '1984', desc: 'Dystopian novel oleh George Orwell', favorite: false },
        { name: 'Moby Dick', desc: 'Petualangan laut oleh Herman Melville', favorite: true },
        { name: 'The Great Gatsby', desc: 'Karya terkenal F. Scott Fitzgerald', favorite: true }
      ],
      filmList: [
        { name: 'The Shawshank Redemption', desc: 'Film drama tentang harapan dan persahabatan', favorite: true },
        { name: 'Inception', desc: 'Film tentang mimpi dalam mimpi', favorite: false },
        { name: 'The Matrix', desc: 'Petualangan dalam dunia maya', favorite: true },
        { name: 'Pulp Fiction', desc: 'Film kultus karya Quentin Tarantino', favorite: true }
      ],
    };
  },
  methods: {
    receiveEmit() {
      alert('Telah ditambahkan ke favorite!');
    }
  }
};
</script>

<style>
#wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f4f8;
}
section {
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h1 {
  color: #333;
  margin-bottom: 15px;
  font-size: 24px;
  text-align: center;
}
</style>
