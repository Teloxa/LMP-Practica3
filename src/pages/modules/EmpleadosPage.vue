<template>
<DefaultLayout>
<h1>CRUD empleados</h1>
<v-card class="mt-2">
    <v-card-title>
    <v-spacer/>
    <v-btn color="primary" @click="openAddModal">Nuevo empleado</v-btn>
    </v-card-title>
    <v-card-text>
    <v-data-table :headers="headers" loading-text="Cargando empleados...">
        <!-- <template #item.actions="{ item }">
        <v-btn color="green" icon @click="edit(item)">
            <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn color="red" icon @click="remove(item.id)">
            <v-icon>mdi-delete</v-icon>
        </v-btn>
        </template> -->
    </v-data-table>
    </v-card-text>  
</v-card>
<EmpleadoForm v-model="showForm" :empleado="selected" @saved="onsSaved" />
</DefaultLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';    
import { useEmpleadoStore } from '@/stores/empleado.js';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const empleadoStore = useEmpleadoStore()
// const {empleados, loading} storeToRefs(empleadoStore)

const headers = [
    {text: 'Nombre',      value: 'nombre'},
    {text: 'A. Paterno',  value: 'apaterno'},
    {text: 'A. Materno',  value: 'amaterno'},
    {text: 'Email',       value: 'mail'},
    {text: 'Usuario',     value: 'Usuario'},
    {text: 'Acciones',    value: 'actions', sortable: false},
]
const showForm = ref(false)
const selected = ref(null)

// Cargar empleados al montar
onMounted(() => {
    empleadoStore.fetchEmpleados()
})

// Metodos de acciones (placeholder)
const edit = (item) => {
    console.log('Editar', item)
    selected.value = { ...item }
    showForm.value = true
}

const remove = (id) => {
    empleadoStore.removeEmpleado(id)
}

const openAddModal = () => {
    console.log('Abrir modal para agregar empleado')
    selected.value = null 
    showForm.value = true
}

const onSaved = () => {
  showForm.value = false // empleadoStore.fetchEmpleados() - en algun punto de la grabacion lo quito
}
</script>
// import EmpleadoForm from '@/components/EmpleadoForm.vue';
// import { storeToRefs } from 'pinia';
