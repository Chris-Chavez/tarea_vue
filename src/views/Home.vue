<template>
<b-container fluid="sm">
    <template v-for="Gato in Gatos">
        <b-card :key="Gato.id" tag="article" style="max-width: 100%;" class="mb-2">
            <b-card-text>
                <b-link @click="AbrirDetalle(Gato._id)" class="card-link texto"> {{Gato.text}}
                    <br>
                    {{Gato._id}}</b-link>
            </b-card-text>
        </b-card>
    </template>
</b-container>
</template>

<script>
// @ is an alias to /src
import data from '../services/ConsultaApi'

export default {
    name: 'Home',
    components: {

    },
    created() {
        this.ObtenerGatos();
    },
    data: () => ({
        Gatos: []
    }),
    methods: {
        async ObtenerGatos() {
            this.Gatos = await data.ObtenerGatos();
        },
        AbrirDetalle(id) {
            this.$router.push({
                name: 'Detalles',
                params: {
                    id: id
                }
            })
        }
    }
}
</script>

<style scoped>
.texto {
    color: rgb(0, 89, 255);
    text-decoration: none;
}

.texto:hover {
    text-decoration: underline;
}
</style>
