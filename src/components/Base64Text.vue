<template>
    <div class="container mt-3">
        <h1>{{ componentName }}</h1>
        <p class="text-center">
            {{ componentDescription }}
        </p>
        <div class="form-group">
            <label for="input">{{ labels.inputText }}</label>
            <textarea class="form-control" id="input" rows="3" :title="labels.inputText" :placeholder="labels.inputText"
                v-model="inputForm"></textarea>
        </div>
        <div class="form-group">
            <div class="text-center">
                <div class="btn-group me-2" role="group" aria-label="Acciones principales">
                    <button type="button" class="btn btn-primary" id="encode-btn" :title="buttons.encodeBtn"
                        @click="encodeText">{{ buttons.encodeBtn }}</button>
                    <button type="button" class="btn btn-info" id="decode-btn" :title="buttons.decodeBtn"
                        @click="decodeText">{{ buttons.decodeBtn }}</button>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="text-center">
                <div class="btn-group me-2" role="group" aria-label="Acciones secundarias">
                    <button type="button" class="btn btn-secondary" @click="swapText">
                        <i class="bi bi-arrow-down-up"></i> {{ buttons.swapBtn }}
                    </button>
                    <button type="button" class="btn btn-secondary" @click="cleanAll">
                        <i class="bi bi-arrow-repeat"></i> {{ buttons.cleanBtn }}
                    </button>
                </div>
            </div>
        </div>
        <div class="form-group">
            <label for="result">{{ labels.outputText }}</label>
            <textarea class="form-control" id="result" rows="3" readonly :title="labels.outputText"
                :placeholder="labels.outputText" v-model="outputForm"></textarea>
        </div>
        <div class="form-group">
            <div class="text-center">
                <div class="btn-group me-2" role="group" aria-label="Acciones finales">
                    <button type="button" class="btn btn-success" id="copy-btn" :title="buttons.copyBtn"
                        @click="copyOutput"><i class="bi bi-clipboard-check"></i> {{ buttons.copyBtn }}</button>
                    <button type="button" class="btn btn-info" id="download" :title="buttons.downloadBtn"
                        @click="downloadOutput" v-if="isOutputFile"><i class="bi bi-cloud-download"></i> {{
                            buttons.downloadBtn
                        }}</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Base64Text',
    data() {
        return {
            componentName: `Base64 Encoder & Decoder`,
            componentDescription: `Con esta herramienta puedes codificar cualquier texto en formato Base64 y decodificar cualquier texto codificado en Base64.`,
            labels: {
                inputText: `Texto a codificar / decodificar:`,
                outputText: `Resultado:`
            },
            buttons: {
                encodeBtn: `Codificar`,
                decodeBtn: `Decodificar`,
                swapBtn: `Intercambiar resultado`,
                copyBtn: `Copiar al portapapeles`,
                downloadBtn: `Descargar`,
                cleanBtn: `Limpiar entrada`
            },
            inputForm: '',
            outputForm: ''
        }
    },
    mounted() {
        console.log('vuejs mounted');
    },
    computed: {
        isOutputFile() {
            return this.isOutputPdf || this.isOutputPng;
        },
        isOutputPdf() {
            return this.outputForm.startsWith('%PDF');
        },
        isOutputPng() {
            return this.outputForm.startsWith('PNG');
        }
    },
    methods: {
        encodeText() {
            this.outputForm = window.btoa(this.inputForm);
        },
        decodeText() {
            this.outputForm = window.atob(this.inputForm);
        },
        swapText() {
            let swap = this.inputForm;
            this.inputForm = this.outputForm;
            this.outputForm = swap;
        },
        cleanAll() {
            this.inputForm = '';
            this.outputForm = '';
        },
        copyOutput() {
            const result = document.getElementById('result');
            result.select();
            document.execCommand('copy');
        },
        downloadOutput() {
            const byteArray = new Uint8Array(this.outputForm.length);
            for (let i = 0; i < this.outputForm.length; i++) {
                byteArray[i] = this.outputForm.charCodeAt(i);
            }
            let mimeType = "application/octet-stream";
            let extension = ".bin";
            if (this.isOutputPdf) {
                mimeType = "application/pdf";
                extension = ".pdf";
            }
            if (this.isOutputPng) {
                mimeType = "image/png";
                extension = ".png";
            }
            const blob = new Blob([byteArray], { type: mimeType });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = `file${extension}`;
            link.click();
        }
    }
}
</script>
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

.form-control {
    height: 200px;
}
</style>
