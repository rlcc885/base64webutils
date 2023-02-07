<template>
    <div class="container mt-5">
        <h1 class="text-center">{{ componentName }}</h1>
        <p class="text-center mt-3">
            {{ componentDescription }}
        </p>
        <div class="form-group">
            <label for="input" class="form-label">{{ labels.inputFile }}</label>
            <input type="file" id="input" class="form-control form-control-lg" @change="changeFile" ref="file" />
        </div>
        <div class="form-group text-center">
            <button class="btn btn-primary" id="encode" @click="encodeFile">{{ buttons.encodeBtn }}</button>
        </div>
        <div class="form-group text-center">
            <button type="button" class="btn btn-secondary" @click="cleanAll">
                <i class="bi bi-arrow-repeat"></i> {{ buttons.cleanBtn }}
            </button>
        </div>
        <div class="form-group">
            <label for="result">{{ labels.outputText }}</label>
            <textarea class="form-control" id="result" rows="10" readonly v-model="outputForm"></textarea>
        </div>
        <div class="form-group text-center">
            <button class="btn btn-secondary" id="copy" @click="copyOutput">{{ buttons.copyBtn }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Base64File',
    data() {
        return {
            componentName: `Convertir Archivo a Base64`,
            componentDescription: `Sube un archivo para convertirlo en Base64.`,
            labels: {
                inputFile: `Seleccionar archivo`,
                outputText: `Resultado`
            },
            buttons: {
                encodeBtn: `Codificar en Base64`,
                copyBtn: `Copiar al Portapapeles`,
                cleanBtn: `Limpiar entrada`
            },
            inputForm: '',
            outputForm: ''
        }
    },
    methods: {
        changeFile(e) {
            let files = e.target.files || e.dataTransfer.files;
            if (!files.length)
                return;
            const reader = new FileReader();
            let vm = this;

            reader.onload = function (e) {
                vm.inputForm = e.target.result;
                vm.encodeFile();
            };
            reader.readAsBinaryString(files[0]);
        },
        encodeFile() {
            this.outputForm = window.btoa(this.inputForm);
        },
        cleanAll() {
            this.inputForm = '';
            this.outputForm = '';
            this.$refs.file.value = null;
        },
        copyOutput() {
            const result = document.getElementById('result');
            result.select();
            document.execCommand('copy');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    margin-top: 50px;
}

h1 {
    text-align: center;
}

.form-group {
    margin-top: 20px;
}

.form-control>textarea {
    height: 200px;
}
</style>
