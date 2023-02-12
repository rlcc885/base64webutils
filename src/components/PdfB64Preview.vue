<template>
    <div class="ratio ratio-16x9">
        <iframe :src="fileUrl" title="Archivo PDF B64" allowfullscreen></iframe>
    </div>
</template>

<script>
export default {
    name: 'PdfB64Preview',
    props: {
        fileBase64: {
            type: String,
            required: true
        }
    },
    computed: {
        fileUrl() {
            return `data:application/pdf;base64,${this.fileBase64}`
        }
    }
}
</script>
