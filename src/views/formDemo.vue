<template lang='pug'>
#formDemo
    Form(ref='formRef' :model='formModel' :rules='formRules' :label-width='80')
        FormItem(label='name:' prop='name')
            Input(v-model='formModel.name' placeholder='请输入姓名')
</template>

<script>
export default {
    name: '',
    data () {
        return {
            formModel: {
                name: ''
            },
            formRules: {
                name: [
                    {required: true, message: 'name不能为空', trigger: 'blur'}
                ]
            }
        }
    },
    mounted () {

    },
    computed: {},
    methods: {}
}
</script>

<style lang='stylus' type="text/stylus">
#formDemo
    display block
</style>
