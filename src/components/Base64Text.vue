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
                        @click="downloadOutput"><i class="bi bi-cloud-download"></i> {{ buttons.downloadBtn }}</button>
                </div>
            </div>
        </div>
        <div v-if="isPreviewFile" class="form-group">
            <PdfB64Preview v-if="isPdfFile" :fileBase64="inputForm"></PdfB64Preview>
            <ImgB64Preview v-if="isImgFile" :fileBase64="inputForm" :fileType="outputFileType"></ImgB64Preview>
            <VideoB64Preview v-if="isVideoFile" :fileBase64="inputForm" :fileType="outputFileType"></VideoB64Preview>
        </div>
    </div>
</template>
<script>
import ImgB64Preview from './ImgB64Preview.vue';
import PdfB64Preview from './PdfB64Preview.vue';
import VideoB64Preview from './VideoB64Preview.vue';
export default {
    name: "Base64Text",
    components: { PdfB64Preview, ImgB64Preview, VideoB64Preview },
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
            inputForm: "",
            outputForm: "",
            outputFileType: ""
        };
    },
    mounted() {
        console.log("vuejs mounted");
    },
    computed: {
        isPreviewFile() {
            return this.isPdfFile || this.isImgFile || this.isVideoFile;
        },
        isPdfFile() {
            return this.outputFileType == "application/pdf";
        },
        isImgFile() {
            return ['image/gif', 'image/jpeg', 'image/png'].indexOf(this.outputFileType) >= 0;
        },
        isVideoFile() {
            return ['video/mp4', 'video/webm'].indexOf(this.outputFileType) >= 0;
        }
    },
    methods: {
        encodeText() {
            this.outputForm = window.btoa(this.inputForm);
        },
        decodeText() {
            this.outputForm = window.atob(this.inputForm);
            let fileType = this.detectFileType(this.outputForm);
            this.outputFileType = "application/octet-stream" == fileType.mimeType ? "" : fileType.mimeType;
        },
        swapText() {
            let swap = this.inputForm;
            this.inputForm = this.outputForm;
            this.outputForm = swap;
        },
        cleanAll() {
            this.inputForm = "";
            this.outputForm = "";
        },
        copyOutput() {
            const result = document.getElementById("result");
            result.select();
            document.execCommand("copy");
        },
        downloadOutput() {
            const byteArray = new Uint8Array(this.outputForm.length);
            for (let i = 0; i < this.outputForm.length; i++) {
                byteArray[i] = this.outputForm.charCodeAt(i);
            }
            let fileType = this.detectFileType(this.outputForm);
            this.outputFileType = "application/octet-stream" == fileType.mimeType ? "" : fileType.mimeType;
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
                jpeg: [255, 216, 255],
                png: [137, 80, 78, 71, 13, 10, 26, 10],
                gif: [71, 73, 70, 56],
                pdf: [37, 80, 68, 70],
                mp3: [73, 68, 51],
                m4v: [0, 0, 0, 24, 102, 116, 121, 112, 109, 112, 52, 50],
                mp4: [0, 0, 0, 32, 102, 116, 121, 112],
                webm: [26, 69, 223, 163],
                doc: [208, 207, 17, 224, 161, 177, 26, 225],
                docx: [80, 75, 3, 4, 20, 0, 6, 0],
                xlsx: [80, 75, 3, 4, 20, 0, 2, 0],
                pptx: [80, 75, 3, 4, 20, 0, 6, 0],
                zip: [80, 75, 3, 4],
            };
            const fileTypesToMimeTypes = {
                jpeg: "image/jpeg",
                png: "image/png",
                gif: "image/gif",
                pdf: "application/pdf",
                mp3: "audio/mpeg",
                m4v: "video/mp4",
                mp4: "video/mp4",
                webm: "video/webm",
                doc: "application/msword",
                docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                zip: "application/zip",
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
                type: "bin",
                mimeType: "application/octet-stream",
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
