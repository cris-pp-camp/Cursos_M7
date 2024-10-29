<template>
    <div justify="center">
        <v-row class="d-flex justify-center">
        <v-dialog
            v-model="dialog"
            persistent
            max-width="800"
            height="fit-content"
        >

            <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="teal"
                dark
                v-bind="attrs"
                v-on="on"
            >
                Agregar curso
            </v-btn>
            </template>


            <v-card>

            <v-card-title class="text-h5 text-center">
                Agregar curso
            </v-card-title>

            <!-- FORM -->
            <v-form
                ref="form"
                v-model="valid"
            >
                <v-text-field
                v-model="form.name"
                :counter="20"
                :rules="requiredRule"
                label="Nombre del curso"
                outlined
                required
                ></v-text-field>

                <v-text-field
                v-model="form.image"
                :rules="requiredRule"
                label="URL de la imagen"
                outlined
                required
                ></v-text-field>

                <v-text-field
                v-model="form.quota"
                :rules="requiredRule"
                label="Cupos"
                outlined
                required
                ></v-text-field>

                <v-text-field
                v-model="form.enrolled"
                :rules="requiredRule"
                label="Estudiantes inscritos"
                outlined
                required
                ></v-text-field>

                <v-text-field
                v-model="form.duration"
                :rules="requiredRule"
                label="Duración del curso"
                outlined
                required
                ></v-text-field>

                <v-text-field
                v-model="form.date"
                :rules="requiredRule"
                label="Fecha de inicio (DD/MM/AAAA)"
                outlined
                required
                ></v-text-field>

                <v-text-field
                v-model="form.cost"
                :rules="requiredRule"
                outlined
                label="Costo"
                required
                ></v-text-field>

                <v-textarea
                v-model="form.description"
                :rules="requiredRule"
                outlined
                label="Descripción"
                required
                ></v-textarea>

                <v-card-actions>
                    <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="addCourse"
                >
                Agregar
                </v-btn>

                <v-btn
                color="warning"
                class="mr-4"
                @click="reset"
                >
                Limpiar formulario
                </v-btn>

                <v-btn
                color="error"
                @click="resetValidation"
                >
                Cancelar
                </v-btn>
                </v-card-actions>
            </v-form>

            </v-card>
        </v-dialog>
        </v-row>
    </div>
  </template>

<script>


export default {
    name: 'popup-comp',
    // props: {},
    data: function(){
        return {
            dialog: false,
            valid: true,
            requiredRule:[
                v => !!v || 'Campo requerido.',
            ],
            form:{
                name:"",
                image:"",
                quota:0,
                enrolled:0,
                duration:"",
                date:"",
                cost:0,
                description:""
            },
        }
    },
    // computed: {},
    methods: {
        async addCourse(){
            this.validate();
            if (!this.valid){
                return;
            }
         
            try {
                //Send form to Backend
                let response = await this.$store.dispatch('addCourse', this.form)
                console.log(response)
                //Redirect
                this.$router.push('/')
            } catch (error) {
                console.error(`Ups.`)
            }
        },
        validate () {
        this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        }, 
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
.v-form{
    padding: 1.5rem;
}

</style>