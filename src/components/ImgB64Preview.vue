<template>
    <div class="text-center">
        <img :src="fileUrl" title="Archivo Img B64" class="img-thumbnail" />
    </div>
</template>

<script>
export default {
    name: 'ImgB64Preview',
    props: {
        fileBase64: {
            type: String,
            required: true
        },
        fileType: {
            type: String,
            required: true
        }
    },
    computed: {
        fileUrl() {
            return `data:${this.fileType};base64,${this.fileBase64}`
        }
    }
}
</script>
