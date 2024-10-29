import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    courses:[]
  },
  getters: {
    sumCoursesInTotal(state){
      return state.courses.length 
    },
    sumStudentsInTotal(state){
      let totalQuota = 0
      for(let i =0; i< state.courses.length; i++){
        totalQuota += state.courses[i].quota;
      }
      return totalQuota
    },
    sumStudentsEnrolled(state){
      let totalEnrolled = 0
      for(let i =0; i< state.courses.length; i++){
        totalEnrolled += state.courses[i].enrolled;
      }
      return totalEnrolled
    },
    sumAvailability(state){
      let availability = 0
      for(let i = 0; i < state.courses.length; i++){
        availability += state.courses[i].quota - state.courses[i].enrolled
      }
      return availability
    },
    sumFinishedCourses(state){
      let finished = 0
      for (let i = 0; i < state.courses.length; i++){
        if (state.courses[i].completed===true){
          finished++
        }
      }
      return finished
    },
    sumActiveCourses(state){
      let active = 0
      for (let i = 0; i < state.courses.length; i++){
        if (!state.courses[i].completed){
          active++
        }
      }
      return active
    },
    courseStatus(state){
      const finished = `Terminado`
      const active = `En curso`

      for (let i = 0; i< state.courses.length; i++){
        if (state.courses[i].completed===true){
          return finished
        } else if (state.courses[i].completed===false){
          return active
        }
      }
    }
  },
  mutations: {
    ADD_COURSE(state, course){
      state.courses.push({
        id:course.id,
        img:course.data().img,
        name:course.data().name,
        cost:course.data().cost,
        duration:course.data().duration,
        quota:course.data().quota,
        enrolled:course.data().enrolled,
        completed:course.data().completed,
        date:course.data().date,
        description:course.data().description
      })
    },
      RESET_COURSES(state){
        state.courses = []
      
    },
    
    SET_COURSES(state, courses) {
      state.courses = courses
    }
  },
  actions: {
      async fetchCourses( { commit } ) {
        try {
          let response = await fetch('/cursos.json');
          let courses = await response.json()
          commit('SET_COURSES', courses)
        } catch (error) {
          console.log(error)
      }
    } 
  },
  modules: {
  }
})
