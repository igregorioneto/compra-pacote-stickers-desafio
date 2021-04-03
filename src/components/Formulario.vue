<template>
    <div class="formulario">
        <div class="quais-stickers">
            <p>Quais stickers?</p>
            <div class="checkbox">
                <div class="checkbox-values">
                    <label for="React">
                        <input type="checkbox" name="React" id="">
                        <span>React</span>
                    </label>
                </div>
                
                <div class="checkbox-values">
                    <label for="Vue">
                        <input type="checkbox" name="Vue" id="">
                        <span>Vue</span>
                    </label>
                </div>
                
                <div class="checkbox-values">
                    <label for="Angular">
                        <input type="checkbox" name="Angular" id="">
                        <span>Angular</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="quantos-stickers">
            <p>Quantos stickers de cada?</p>
            <div class="quantidade">
                <input class="btn" type="submit" value="-">
                <input class="text" type="text" value="0" disabled>
                <input class="btn" type="submit" value="+">
            </div>
        </div>

        <div class="observacoes">
            <p>Observações:</p>
            <div class="textarea-observacoes">
                <textarea name="" id=""></textarea>
            </div>
        </div>

        <div class="enviar">
            <div class="posicao-botao">
                <span id="resultado-envio"></span>
                <input type="submit" value="enviar">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
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

.checkbox-values input:checked{
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
    color: #FFFFFF;
    background-color: #2F3676;
    width: 120px;
    height: 40px;
    margin-top: 30px;
    margin-right: 30px;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
}
</style>