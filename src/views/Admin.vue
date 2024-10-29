<template>
  <v-container class="body mx-auto my-50 cols-9 d-flex flex-column align-center">

    <div class="my-8"><h1>Administración</h1></div>


     <v-container class="my-8 table">
      <v-row>
        <v-col>
          <v-simple-table light>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left"> Curso </th>
              <th class="text-left"> Cupos </th>
              <th class="text-left"> Inscritos </th>
              <th class="text-left"> Duración </th>
              <th class="text-left"> Costo </th>
              <th class="text-left"> Terminado </th>
              <th class="text-left"> Fecha </th>
              <th class="text-left"> Acciones </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="course in courses" :key="course.id">
              <td>{{ course.nombre }}</td>
              <td>{{ course.cupos }}</td>
              <td>{{ course.inscritos }}</td>
              <td>{{ course.duracion }}</td>
              <td>$ {{ course.costo.toLocaleString('es-CL') }}</td>
              <td >{{ course.completado }}</td>
              <td>{{ course.fecha_registro }}</td>
              <td> <ActionsButtons/> </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
        </v-col>
      </v-row>
     </v-container>


     <v-container>
      <v-row>
        <AddCoursePopup/>
      </v-row>
     </v-container>

    <v-container class="alerts mt-8">

      <v-alert outlined color="red lighten-1" text>
        <i class="fa-solid fa-user-group"></i> Cantidad total de alumnos permitidos: <b>{{ sumStudentsInTotal }}</b> alumnos.
      </v-alert>


      <v-alert outlined color="pink lighten-1" text>
        <i class="fa-solid fa-user-check"></i> Cantidad total de alumnos inscritos: <b>{{ sumStudentsEnrolled }}</b> alumnos.
      </v-alert>


      <v-alert outlined color="deep-purple lighten-1" text>
        <i class="fa-solid fa-user-plus"></i> Cantidad total de cupos restantes: <b>{{ sumAvailability }}</b> alumnos.
      </v-alert>

      <v-alert outlined color="blue lighten-1" text>
        <i class="fa-solid fa-ban"></i> Cantidad de cursos terminados: <b>{{ sumFinishedCourses }}</b> cursos.
      </v-alert>


      <v-alert outlined color="teal lighten-1" text>
        <i class="fa-solid fa-bell"></i> Cantidad total de cursos activos: <b>{{ sumActiveCourses }}</b> cursos.
      </v-alert>


      <v-alert outlined color="orange lighten-1" text>
        <i class="fa-solid fa-book-open"></i> Cantidad total de cursos: <b>{{ sumCoursesInTotal }}</b> cursos.
      </v-alert>
    </v-container>
  </v-container>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
import ActionsButtons from '@/components/ActionsButtons.vue';
import AddCoursePopup from '@/components/AddCoursePopup.vue';

export default {
  name: 'admin-view',
  // props: {},
  data: function(){
    return { }
  },
  computed: {
    ...mapState(['courses']),
    ...mapGetters([ 'sumCoursesInTotal',
                    'sumStudentsInTotal',
                    'sumStudentsEnrolled',
                    'sumAvailability',
                    'sumFinishedCourses',
                    'sumActiveCourses',
                    'courseStatus'
                  ]),
  },
  methods: {
    ...mapActions(['fetchCourses'])
  },
  // watch: {},
  components: {
    ActionsButtons,
    AddCoursePopup
  },
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created(){
    this.fetchCourses()
  }
  // -- End Lifecycle Methods
}
</script>

<style scoped>

</style>