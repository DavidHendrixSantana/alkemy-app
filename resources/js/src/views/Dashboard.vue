<template>
<page-component title="Dashboard">
  <template v-slot:header>
    <h1 class="text-3xl pb-10">Ultimos 6 proyectos:</h1>

  <div class="py-5 px-8">
    <div v-if="loading" class="flex justify-center" >
            Loading...
    </div>
          <div v-if="projects.data == ''">
              Sin registros
          </div>

        <div v-for="project in projects.data" :key="project.id" class="grid grid-cols-6 items-center py-10 px-6 shadow-md border border-separate  bg-white hover:bg-gray-50">
            <div class="mr-4">
                <img :src="project.image_url != null ? project.image_url : 'image-not-found.png'"  class="w-50 ">
            </div>
            <div class="col-span-5">
                <h1 class="text-3xl mb-3">
                {{project.title}}
                </h1>
                <p class="text-gray-500 text-sm" v-html="project.description"></p>

            </div>
        </div>

 
    

  </div>
  </template>

</page-component>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue"
import store from "../store"
import { computed } from "vue";  
store.dispatch("getProjects")

const loading = computed(()=> store.state.projects.loading)
const projects = computed(()=>store.state.projects)


</script>

<style>

</style>