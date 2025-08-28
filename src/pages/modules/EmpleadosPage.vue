<template>
    <v-btn color="green" icon @click="edit(item)">
        <v-icon>mdi-pencil</v-icon>
    </v-btn>

    <v-btn color="red" icon @click="remove(item.id)">
        <v-icon>mdi-delete</v-icon>
    </v-btn>
    
</template>

<script setup>

import { onMounted } from 'vue';    
import {useEmpleadoStore} from '@/stores/empleados'
import { storeToRefs } from 'pinia';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const empleadoStore = useEmpleadoStore()
const {empleados, loading} storeToRefs(empleadoStore)

const headers = [
    {text: 'Nombre', value: 'nombre'},
    {text: 'A. Paterno', value: 'apaterno'},
    {text: 'A. Materno', value: 'amaterno'},
    {text: 'Email', value: 'mail'},
    {text: 'Usuario', value: 'Usuario'},
    {text: 'Acciones', value: 'actions', sortable: false},
]
// cargar empleados al montar
onMounted(() => {
    empleadoStore.fetchEmpleados()
})

// Metodos de acciones (placeholder)
const edit = (item) => {
    console.log('Editar', item)
}

const remove = (id) => {
    empleadoStore.removeEmpleado(id)
}

const openAddModal = () => {
    console.log('Abrir modal para agregar empleado')
}

</script>
