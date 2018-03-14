<template lang="pug">
#app
    //div 路由列表：
        router-link(to='/') 首页 <br/>
        router-link(to='/button') button <br/>
        router-link(to='/form') form <br/>
        router-link(to='/menu') menu <br/>
        router-link(to='/layout') layout <br/>
        div === 以下是页面内容 ===
        router-view
    Layout.height100
        Sider(ref='side1' hide-trigger collapsible :collapsed-width='78' v-model='isCollapsed')
            <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
                <MenuItem name="1-1">
                    <Icon type="ios-navigate"></Icon>
                    <span>Option 1</span>
                </MenuItem>
                <MenuItem name="1-2">
                    <Icon type="search"></Icon>
                    <span>Option 2</span>
                </MenuItem>
                <MenuItem name="1-3">
                    <Icon type="settings"></Icon>
                    <span>Option 3</span>
                </MenuItem>
            </Menu>
        Layout
            Header(:style="{padding: 0, position: 'fixed', width: '100%'}" class="layout-header-bar")
                Icon(@click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0', float: 'left'}" type="navicon-round" size="24")
            Content(:style="{margin: '84px 20px 20px 20px', background: '#fff', minHeight: '960px'}")
                router-view
</template>

<script>
export default {
    name: 'App',
    data () {
        return {
            isCollapsed: false
        }
    },
    mounted () {

    },
    computed: {
        menuitemClasses () {
            return [
                'menu-item',
                this.isCollapsed ? 'collapsed-menu' : ''
            ]
        },
        rotateIcon () {
            return [
                'menu-icon',
                this.isCollapsed ? 'rotate-icon' : ''
            ]
        }
    },
    methods: {
        collapsedSider () {
            this.$refs.side1.toggleCollapse()
        }
    }
}
</script>

<style lang="stylus" type="text/stylus">
html
    height 100%
body
    font-size 14px
    height: 100%;

#app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-size: 14px;
    height: 100%;

    .height100
        height 100%
    .layout
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height 100%

    .layout-header-bar
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);

    .layout-logo-left
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;

    .menu-icon
        transition: all .3s;

    .rotate-icon
        transform: rotate(-90deg);
        float left

    .menu-item span
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;

    .menu-item i
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;

    .collapsed-menu span
        width: 0px;
        transition: width .2s ease;

    .collapsed-menu i
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;

</style>
