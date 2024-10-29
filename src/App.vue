<template>
  <v-app>
    <navbar></navbar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar.vue';
import { mapActions } from 'vuex';
export default {
  name: 'App',

  data: () => ({
    //
  }),
  methods: {
    ...mapActions(['fetchCourses']),
    
  },
  
  components: {
    Navbar
  },
  created() {
    this.fetchCourses();
    
  }
};
</script>
