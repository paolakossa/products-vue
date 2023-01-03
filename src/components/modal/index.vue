<template>
<div v-if="modalClose" class="container">
        <div  class="modal">
            <div class="box">
                <div class="content">
                    <section class="header">
                        <div class="header-title">
                            <div class="icon" v-if="iconModalInfo"><i :class="iconModalInfo"></i></div>
                            <div class="title">{{titleModal}}</div>
                        </div>
                        <div class="close" v-if="iconModalClose" @click="close"><i :class="iconModalClose"></i></div>
                    </section>
                    <slot name="body"></slot>
                    <slot name="footer"></slot>
                </div>
            </div>  
        </div>
</div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        nameModal: {
            type: String,
            required: true
        },
        titleModal: {
            type:String
        
        },
        iconModalInfo: {
            type:String,
            default: null
        },
        iconModalClose: {
            type:String,
            default: null 
        }
    },
    data () {
        return {
            modalClose: false,
        }   
    },
    mounted () {
         
    this.$root.$on('open-modal-' + this.nameModal, ()=> {
        this.modalClose = true 
    })

    this.$root.$on('close-modal' + this.nameModal, () => {
        this.close()
    })    
    },
    methods: {
        close () {
            this.modalClose = false
        }
    }
    }

</script>

<style lang="stylus" scoped>
.container
    position: absolute
    width: 100%
    height: 100%
    left 0
    top 0
    .modal
        position fixed
        background rgba(0 0 0 0.7)
        top 0
        left 0
        display flex
        align-items center
        justify-content center
        width inherit
        height 100%
        overflow hidden

        .box
            position relative
            width: 400px
            height: auto
            background: #C0DEFF
            display flex
            border-radius: 10px
            box-shadow: 1px 1px 8px #DFD3C3
            overflow hidden
            .content
                width: 100%
                .header 
                    display: flex
                    padding: 10px
                    background: #0078AA
                    color: #fff
                    width: 95%
                    justify-content: space-between
                    &-title
                        display: flex
                        width: auto
                        .icon
                            margin-right: 10px
                    .close
                        cursor pointer        
</style> 