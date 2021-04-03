<template>
    <div class="cabecalho">
        <div class="cabecalho-font">
            <h1>Formulário<br> para a compra de <br><span>Pacote de Stickers</span></h1>
        </div>
        <div class="cabecalho-img">
            <img src="../../public/img/pacote.png" alt="">
        </div>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style scoped>

/*Configuração padrão*/
.cabecalho{
    display: flex;
    background-color: #2F3676;
    color: #FFFFFF;
    height: 250px;
    border-bottom-right-radius: 160%;
    border-bottom-left-radius: 80%;

}

.cabecalho-font h1{
    padding: 40px;
    font-weight: normal;
    font-size: 30px;
}

.cabecalho-font h1 span {
    font-weight: bold;
    font-size: 35px;
    padding-top: 60px;
}

.cabecalho-font{
    flex: 1 1 0;
}

.cabecalho-img{
    flex: 1 1 0;
    padding: 20px;
}

.cabecalho-img img{
    width: 250px;
    height: 200px;
    margin-left: 90px;
}
</style>