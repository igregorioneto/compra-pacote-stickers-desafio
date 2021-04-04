<template>
    <div class="formulario">
        <div class="quais-stickers">
            <p>Quais stickers?</p>
            <div class="checkbox">
                <div class="checkbox-values">
                    <label for="React">
                        <input type="checkbox" name="React" id="react" checked>
                        <span>React</span>
                    </label>
                </div>
                
                <div class="checkbox-values">
                    <label for="Vue">
                        <input type="checkbox" name="Vue" id="vue">
                        <span>Vue</span>
                    </label>
                </div>
                
                <div class="checkbox-values">
                    <label for="Angular">
                        <input type="checkbox" name="Angular" id="angular">
                        <span>Angular</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="quantos-stickers">
            <p>Quantos stickers de cada?</p>
            <div class="quantidade">
                <input 
                @click="decrementQuantidade" 
                id="disabled"
                class="btnDecrement" type="submit" value="-">
                <input class="text" type="text" :value="count" disabled>
                <input @click="incrementQuantidade" class="btn" type="submit" value="+">
            </div>
        </div>

        <div class="observacoes">
            <p>Observações:</p>
            <div class="textarea-observacoes">
                <textarea name="" id="textarea"></textarea>
            </div>
        </div>

        <div class="enviar">
            <div class="posicao-botao">
                <span id="resultado-envio"></span>
                <input @click="envioFormulario" type="submit" value="enviar" id="button-enviar">
                <div v-if="respostaEnvio" id="respostaEnvio">Formulário enviado com sucesso!</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0,
            respostaEnvio: false,
            infoCompras: [],
            tipoStickers: []
        }
    },
    methods:{
        incrementQuantidade(){
            this.count++;
            if(this.count > 0){
                document.getElementById('disabled').disabled = false;
            }
        },
        decrementQuantidade(){
            this.count--;
            if(this.count == 0){
                document.getElementById('disabled').disabled = true;
            }
        },
        envioFormulario(){
            const react = document.getElementById('react');
            const vue = document.getElementById('vue');
            const angular = document.getElementById('angular');
            const textInfo = document.getElementById('textarea');
            
            if(react.checked){
                this.tipoStickers.push(react.name);
            }
            if(vue.checked){
                this.tipoStickers.push(vue.name);
            }
            if(angular.checked){
                this.tipoStickers.push(angular.name);
            }

            this.infoCompras.push(
                {tipos: this.tipoStickers,
                 quantidade: this.count,
                 comentario: textInfo.value});

            localStorage.setItem("informacoes_compras",JSON.stringify(this.infoCompras));
            this.limparFormulario();
        },
        limparFormulario(){
            const react = document.getElementById('react');
            const vue = document.getElementById('vue');
            const angular = document.getElementById('angular');
            const textInfo = document.getElementById('textarea');
            
            const button = document.getElementById('button-enviar');
            button.disabled = true;

            react.checked = true;
            vue.checked = false;
            angular.checked = false;
            textInfo.value = '';
            this.count = 0;
            this.respostaEnvio = true;
        }
    },mounted(){
        document.getElementById('disabled').disabled = true;
    }
}
</script>

<style scoped>
.formulario{
    padding: 40px;
    font-size: 20px;
    color: #071723;
    font-weight: bold;
}

.checkbox-values{
    overflow: hidden;
    padding: 5px;
}

.checkbox-values input{
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-bottom: 30px;
}

.checkbox-values input:after{
    background-color: #191847;
}

.checkbox-values input:hover{
    background-color: #191847;
}

.btn{
    width: 50px;
    height: 50px;
    background-color: #2F3676;
    color: #FFFFFF;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
}

.btn:hover{
    width: 50px;
    height: 50px;
    background-color: #191847;
    color: #FFFFFF;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
}

.btnDecrement{
    width: 50px;
    height: 50px;
    background-color: #2F3676;
    color: #FFFFFF;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
}

.btnDecrement:hover{
    width: 50px;
    height: 50px;
    background-color: #191847;
    color: #FFFFFF;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
}

.btnDecrement:disabled{
    width: 50px;
    height: 50px;
    background-color: #C5CFD6;
    color: #071723;
    border-radius: 5px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 16px;
}

.text{
    width: 70px;
    height: 43px;
    border-radius: 5px;
    margin-right: 10px;
    font-size: 20px;
    text-align: center;
}

.textarea-observacoes textarea{
    width: 90%;
    height: 150px;
    border-radius: 5px;
    background-color: #C5CFD6;
    color: #555555;
    border: 1px solid #555555;
    padding: 40px;
    resize: none;
    margin-bottom: 30px;
}

.enviar{
    width: 100%;
    height: 100px;
    background-color: #C5CFD6;
    border-radius: 5px;
}

.posicao-botao input{
    float: right;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #2F3676;
    width: 120px;
    height: 40px;
    margin-top: 30px;
    margin-right: 30px;
    border: 1px solid #555555;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
}

.posicao-botao input:hover{
    float: right;
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #191847;
    width: 120px;
    height: 40px;
    margin-top: 30px;
    margin-right: 30px;
    border: 1px solid #555555;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
}
.posicao-botao input:disabled{
    float: right;
    font-size: 20px;
    font-weight: bold;
    color: #555555;
    background-color: #C5CFD6;
    width: 120px;
    height: 40px;
    margin-top: 30px;
    margin-right: 30px;
    border: 1px solid #555555;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
}

#respostaEnvio{
    float: left;
    margin-top: 35px;
    margin-left: 30px;
    color: #3CB371;
    font-size: 20px;
}
</style>