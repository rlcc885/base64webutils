<template>
    <div class="ratio ratio-16x9">
        <video controls="">
            <source :type="fileType" :src="fileUrl">
        </video>
    </div>
</template>

<script>
export default {
    name: 'VideoB64Preview',
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
