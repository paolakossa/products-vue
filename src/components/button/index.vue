<template>
  <div class="btn">
    <button class="button" :class="design" @click="open">
        <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        design: {
            type: String,
            default:'primary md-1'
        }
    },
    methods: {
        open() {
            this.$emit('input')
        }
    }
}
</script>

<style lang="stylus" scoped>
    
    .button 
        border-radius: 10px
        border: none
        box-shadow: 0px 0px 2px 0px black
    .primary
        background: #2192FF
        color: #fff
    .danger
        background: #E64848
        color: #fff
    .success
        background: #00493C
        color: #fff
    .caution
        background: #F4A442
        color: #fff
    .md-1
        padding: 12px 
        
    .md-2
        padding: 14px 
    .md-3
        padding: 16px 
</style>