<template>
    <li>
        <a 
        class="nav-link" 
        :class="activeClasses"
        aria-current="page" 
        :href="page.link.url"
        :title="`This link goes to the ${page.link.text} page`"
        @click.prevent="$emit('activated')"
        >{{ page.link.text }}</a>
    </li>
</template>

<script>
    export default {
        props: ['page', 'isActive'],
        computed: {
            activeClasses() {
                return {
                    active: this.isActive,
                    emphasize: this.isActive
                };
            }
        }
    }
</script>
<style scoped>
.emphasize {
    text-decoration: underline !important;
}
</style>