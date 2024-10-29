<template>
    <v-container>
        <h1 class="text-center mb-10 black--text large-title">Lista de Cursos</h1>
        
        <v-row justify="center">

            <v-col cols="12" sm="4" md="4"  v-for="course in courses" :key="course.id">
                <v-card width="300">
                    <v-img
                    height="350px"
                    :src="course.img"
                    >
                    <v-app-bar
                        flat
                        color="rgba(0, 0, 0, 0)"
                    >
                        <v-spacer></v-spacer>

                    </v-app-bar>
                    </v-img>
                    <v-card-title>
                             {{ course.nombre}}
                         </v-card-title>
                    <v-card-text>

                    <div class="font-weight-bold ml-8 mb-2">
                        Información
                    </div>

                    <v-timeline align-top dense>
                        <v-timeline-item small color="deep-purple lighten-2">
                        <div>
                            <div class="font-weight-normal">
                              Costo: <strong> {{ course.costo }}</strong>
                            </div>
                            <div> Duración: {{ course.duracion }}</div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item small>  
                        <div>
                            <div class="font-weight-normal">
                              Cupos: <strong> {{ course.cupos }}</strong>
                            </div>
                            <div> Completado: {{ course.completado }}</div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item small color="deep-purple lighten-2">  
                        <div>
                            <div class="font-weight-normal">
                              Fecha de Registro: 
                            </div>
                            <div> {{ course.fecha_registro }}</div>
                        </div>
                        </v-timeline-item>

                        <v-timeline-item small>  
                        <div>
                            <div class="font-weight-normal">
                              Descripción:
                            </div>
                            <div> {{ course.descripcion }}</div>
                        </div>
                        </v-timeline-item>

                    </v-timeline>
                    </v-card-text>
                </v-card>               
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'home-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['courses'])
    },
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>