<template lang='pug'>
#menuDemo
    Menu(active-name='1-2' :open-names="['1']")
        Submenu(name='1')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航一
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='1-1') option 1
                MenuItem(name='1-2')
                    router-link(to='/form') to='/form'
        Submenu(name='2')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航二
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='2-1') option 3
                MenuItem(name='2-2') option 4
        Submenu(name='2')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航二
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='2-1') option 3
                MenuItem(name='2-2') option 4
        Submenu(name='2')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航二
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='2-1') option 3
                MenuItem(name='2-2') option 4
        Submenu(name='2')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航二
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='2-1') option 3
                MenuItem(name='2-2') option 4
        Submenu(name='2')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航二
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='2-1') option 3
                MenuItem(name='2-2') option 4
        Submenu(name='2')
            <template slot='title'>
                <Icon type="ios-analytics"></Icon>导航二
            </template>
            MenuGroup(title='item 1')
                MenuItem(name='2-1') option 3
                MenuItem(name='2-2') option 4

</template>

<script>
export default {
    name: '',
    data () {
        return {}
    },
    mounted () {

    },
    computed: {},
    methods: {}
}
</script>

<style lang='stylus' type="text/stylus">
#menuDemo
    display block
</style>
