<template>
<b-container fluid="sm">
    <b-row class="inicio">
        <b-col>
            <h1>Mi dato random</h1>
            <b-button variant="primary" @click="ObtenerDatoRandom">Obtener info</b-button>
        </b-col>
    </b-row>
    <b-row v-if="Mostrar">
        <b-card v-bind="Gato" style="margin: 5px 0px 5px 0px">
            <b-card-text>
                <span class="title"> {{Gato.type}} </span><br>
                <span class="text"> {{Gato.text}} </span><br>
                <span v-if="Gato.status.verified" class="verified"> Verificado </span>
                <span v-else class="no-info"> Sin información sobre su verificación. </span>
            </b-card-text>
        </b-card>
    </b-row>
</b-container>
</template>

<script>
import data from '../services/ConsultaApi'
export default {
    name: 'DatoRandom',
    created() {},
    data: () => ({
        Mostrar: false,
        Gato: {},
    }),
    methods: {
        async ObtenerDatoRandom() {
            this.Gato = await data.ObtenerGatoRandom();
            this.Mostrar = true;
        }
    }
}
</script>

<style scoped>
.inicio {
    align-items: center;
    padding: 10px;
    border-bottom: 2px gray solid;
}

.title {
    font-weight: bold;
    font-size: 25px;
}

.text {
    font-weight: 700;
    font-size: 20px;
}

.verified {
    color: green;
    font-size: 18px;
}

.no-info {
    color: red;
    font-size: 18px;
}
</style>
