<template>
<b-container fluid="sm">
    <b-card :v-bind="Gato" tag="article" style="max-width: 100%;" class="mb-2">
        <b-card-text class="Contenido">
            <b-row id="0">
                <b-col>
                    <span>ID: {{Gato._id}}</span>
                </b-col>
            </b-row>
            <b-row class="titulo" id="1">
                <b-col>
                    <span>Fact: </span>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <span>{{Gato.text}}</span>
                </b-col>
            </b-row>
            <b-row class="fecha titulo">
                <b-col>
                    <span>Fecha de Creación:</span>
                </b-col>
            </b-row>
            <b-row class="fecha">
                <b-col>
                    <span>{{Gato.createdAt}}</span>
                </b-col>
            </b-row>
        </b-card-text>
    </b-card>
</b-container>
</template>

<script>
import data from '../services/ConsultaApi'
export default {
    name: 'Detalles',
    created() {
        this.ObtenerDetalleGatos();
    },
    data: () => ({
        Gato: {}
    }),
    methods: {
        async ObtenerDetalleGatos() {
            this.Gato = await data.ObtenerDetallesGatos(this.$route.params.id);
        }
    }
}
</script>

<style scoped>
.Contenido {
    align-items: center;
    font-size: 22px;
}
.titulo{
  color: rgb(0, 153, 3);
   font-size: 16px !important;
}
.fecha{
  font-size: 16px !important;
}
</style>
