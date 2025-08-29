<template>
  <AuthLayout>
    <v-card width="700">
      <v-card-title class="text-h6">Crear cuenta nueva</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="submit">
          <v-text-field v-model="user.nombre"     required label="Nombre"/>
          <v-text-field v-model="user.apaterno"   required label="A. Paterno"/>
          <v-text-field v-model="user.amaterno"   required label="A. Amaterno"/>
          <v-text-field v-model="user.direccion"  required label="Direccion"/>
          <v-text-field v-model="user.telefono"   required label="Telefono"/>
          <v-text-field v-model="user.ciudad"     required label="Ciudad"/>
          <v-text-field v-model="user.estado"     required label="Estado"/>
          <v-text-field v-model="user.mail"       required label="Email"/>
          <v-text-field v-model="user.usuario"    required label="Usuario"/>
          <v-text-field v-model="user.password"   required label="Password" type="password"/>
          <v-btn color="secondary" type="submit" block class="mt-4">Registrarme</v-btn>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn variant="text" block to="'/'">Ya tengo cuenta</v-btn>
      </v-card-actions>
    </v-card>
  </AuthLayout>
</template>

<script setup>
import AuthLayout from '@/layouts/AuthLayout.vue'
import { useAuthStore } from '@/stores/auth.js'
import { ref } from 'vue'

const authStore = useAuthStore()
const user = ref({
  nombre: '',
  apaterno: '',
  amaterno: '',
  direccion: '',
  telefono: '',
  ciudad: '',
  estado: '',
  mail: '',
  usuario: '',
  password: ''
})

const submit = () => {
  console.log('@@@ user => ', user, user.value)
  authStore.register(user.value)
} 
</script>