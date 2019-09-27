<template>
    <div>
        <h1>Dogs for Adoption</h1>
    <b-table striped hover :items="dogs"></b-table>
    </div>
</template>

<script>
import dogs from '@/data/dogs' // the @ symbol is a shortcut from the Vue CLI that is a reference to the source directory, so you dont have to do '../../../data/cats'
export default {
    data() {
        return {
            dogs
        }
    }
}
</script>