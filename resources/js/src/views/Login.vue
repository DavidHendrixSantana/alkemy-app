
<template>

      <div>
        <img class="mx-auto h-12 w-auto" src="alkemi.jfif" alt="Your Company" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Inicia sesión</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <router-link :to="{name: 'Register'}" class="font-medium text-indigo-600 hover:text-indigo-500">
            Registrate</router-link>
        </p>
      </div>
      <form  @submit="login" class="mt-8 space-y-6" >
        <div v-if="errorMsg" class=" flex items-center justify-between py-3 px-5 text-white rounded bg-red-500 ">
          {{errorMsg}}
          <span @click="errorMsg = ''" class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </div>
        <input type="hidden" name="remember" value="true" />
        <div class="-space-y-px rounded-md shadow-sm">
          <div>
            <label for="email-address" class="sr-only">Correo electronico</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required=""  v-model="user.email" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Correo electronico" />
          </div>
          <div>
            <label for="password" class="sr-only">Contraseña</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required=""  v-model="user.password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Contraseña" />
          </div>
        </div>

        <div class=" items-center justify-between">
        
            <label for="remember" class="ml-2 block text-md text-gray-900">Default credentials   </label>
            <label for="remember" class="ml-2 block text-sm text-blue-900">CORREO: admintest@admin.com  </label>
            <label for="remember" class="ml-2 block text-sm text-blue-900">PASSWORD : password </label>
     

        </div>

        <div>
          <button   type="submit" class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
            </span>
            Iniciar Sesión
          </button>
        </div>
      </form>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/20/solid'
import store from "../store"
import {useRouter} from "vue-router"
import {ref} from "vue"

const router =useRouter()

const user = {
  email: '',
  password: '',
  remember: false
}

let errorMsg = ref('')

function login(ev){
  ev.preventDefault()

    store.dispatch('login',user)
    .then(()=>{
        router.push({
          name: 'Dashboard'
        })
    })
    .catch(err =>{
      errorMsg.value= err.response.data.error
    })
}


</script>