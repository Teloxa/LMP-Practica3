<template>
<AuthLayout>
    <v-card class="text-h6">
        Crear cuenta nueva
    </v-card>
    <v-card-text>
        <v-form @submit.prevent="submit">
            <v-text-field v-model="user.nombre" required label="Nombre"/>
            <v-text-field v-model="user.apaterno" required label="A. Paterno"/>
            <v-text-field v-model="user.amaterno" required label="A. Amaterno"/>
            <v-text-field v-model="user.direccion" required label="Direccion"/>
            <v-text-field v-model="user.telefono" required label="Telefono"/>
            <v-text-field v-model="user.ciudad" required label="Ciudad"/>
            <v-text-field v-model="user.estado" required label="Estado"/>
            <v-text-field v-model="user.usuario" required label="Usuario"/>
            <v-text-field v-model="user.password" required label="Password" type="password"/>
            <v-btn color="secondary" type="submit" block class="mt-4">Registrarme</v-btn>
        </v-form>
    </v-card-text>
    <v-card-actions>
        <v-btn variant="text" block :to="'/login'">Ya tengo cuenta</v-btn>
    </v-card-actions>   

</AuthLayout>
</template>

<script>
    import AuthLayout from '@/layouts/AuthLayout.vue';
</script>