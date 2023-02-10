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
                        @click="downloadOutput"><i class="bi bi-cloud-download"></i> {{
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
            return true;
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
            let fileType = this.detectFileType(this.outputForm);
            let mimeType = fileType.mimeType;
            let extension = "." + fileType.type;
            const blob = new Blob([byteArray], { type: mimeType });
            const link = document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = `file${extension}`;
            link.click();
        },
        detectFileType(binaryString) {
            const fileSignatures = {
                jpeg: [0xff, 0xd8, 0xff],
                png: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
                gif: [0x47, 0x49, 0x46, 0x38],
                pdf: [0x25, 0x50, 0x44, 0x46],
                mp3: [0x49, 0x44, 0x33],
                mp4: [0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70, 0x6d, 0x70, 0x34, 0x32],
                doc: [0xd0, 0xcf, 0x11, 0xe0, 0xa1, 0xb1, 0x1a, 0xe1],
                docx: [0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x06, 0x00],
                xlsx: [0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x02, 0x00],
                pptx: [0x50, 0x4b, 0x03, 0x04, 0x14, 0x00, 0x06, 0x00],
                zip: [0x50, 0x4b, 0x03, 0x04],
            };

            const fileTypesToMimeTypes = {
                jpeg: 'image/jpeg',
                png: 'image/png',
                gif: 'image/gif',
                pdf: 'application/pdf',
                mp3: 'audio/mpeg',
                mp4: 'video/mp4',
                doc: 'application/msword',
                docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
                zip: 'application/zip',
            };

            for (const [fileType, signature] of Object.entries(fileSignatures)) {
                if (binaryString.startsWith(String.fromCharCode(...signature))) {
                    return {
                        type: fileType,
                        mimeType: fileTypesToMimeTypes[fileType],
                    };
                }
            }

            return {
                type: 'bin',
                mimeType: 'application/octet-stream',
            };
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
