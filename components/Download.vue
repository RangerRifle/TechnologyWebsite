<template>
    <button @click="downloadFile">Download Spaider</button>
</template>

<script>
export default {
    name: 'DownloadHome',
    methods: {
        downloadFile() {
            const link = document.createElement('a');
            link.href = 'https://github.com/RangerRifle/Spaider/blob/master/spaider.exe';
            link.download = 'Spaider.exe';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}
</script>

<style>

</style>