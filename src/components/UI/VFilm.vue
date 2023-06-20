<template>
    <div class="grid grid-rows-5 w-full">
        <img class="row-span-4 w-full object-fill" :src="link" alt="film">
        <p class="row-start-5">{{ title }}</p>
    </div>
</template>

<script>
    export default {
        props: {
            link: {
                type: String,
                validator: function (value) {
                const f = function() {
                    try {new URL(value)
                        return true
                    }
                    catch {
                        return false
                    }
                }
                if(f)
                    return value 
            },
                required: true,
            },
            title: {
                type: String,
                required: true
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>