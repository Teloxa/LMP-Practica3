<!-- INCOMPLETO, faltan labels en   -->
<template>
    <v-dialog v-model="dialog" max-width="600px">
        <v-card>
            <v-card-title class="text-h6">
                {{ empleado?.id? 'Editar empleado': 'Nuevo empleado'}}
            </v-card-title>
            <v-card-text>
                <v-form @submit.prevent="save">
                    <v-text-field v-model="user.nombre"     required label="Nombre"/>
                    <v-text-field v-model="user.apaterno"   required label="A. Paterno"/>
                    <v-text-field v-model="user.amaterno"   required label="A. Amaterno"/>
                    <v-text-field v-model="user.direccion"  required label="Direccion"/>
                    <v-text-field v-model="user.telefono"   required label="Telefono"/>
                    <v-text-field v-model="user.ciudad"     required label="Ciudad"/>
                    <v-text-field v-model="user.estado"     required label="Estado"/>
                    <v-text-field v-model="user.usuario"    required label="Usuario"/>
                    <v-text-field v-model="user.password"   required label="Password" type="password"/>
                    <v-btn color="secondary" type="submit" block class="mt-4">Guardar</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>

    <!-- INCOMPLETO - faltan labels -->
</template>

<script setup>
import {ref, watch} from 'vue'
import { updateEmpleadoStore } from '@/stores'

const props = defineProps({
    modelValue: Boolean,
    empleado: Object,
})

const emit = defineEmits(['update:modelValue', 'saved'])

const empleadoStore = useEmpleadoStore()

const dialog = ref(false)
const user = ref ({
    nombre: '',
    apaterno: '',
    amaterno: '',
    direccion: '',
    telefono: '',
    ciudad: '',
    estado: '',
    mail: '',
    usuario: '',
    password: '',
    // INCOMPLETO
})
watch(() => props.modelValue, (val) => {
    dialog.value = val
    if(val && props.empleado) {
        user.value = { ...props.empleado}
    } else {
        // INCOMPLETO
    }
})














const save = async () => {
    if(props.empleado?.id){
        await empleadoStore.editEmpleado(props.empleado.id, user.value)
    } else {
        await empleadoStore.addEmpleado(user.value)
    }
    emit('update:modelValue, false')
    emit('saved')
}
</script>

<style scoped>
</style>