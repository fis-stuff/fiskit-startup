const util = fiskit.util,
    root = fiskit.project.getProjectPath()

var config = {
    // 静态资源版本号
    version: '0.0.1',
    // 打包开关，默认为false
    // 可以手动设置为true，也可以fk release -p设置为true
    packed: false,
    // cdn域名开关，prod环境始终为true
    cdn: false,
    // cdn域名地址
    cdnUrl: '//static.360buyimg.com/yiye',
    // MD5后缀开关
    useHash: false,
    // fis3-postprocessor-postcss 配置
    // 参考：https://github.com/jiangyuan/fis3-postprocessor-postcss
    postcss: {
        autoprefixer: {
            browsers: [
                '> 1%',
                'last 2 versions',
                'ios >= 7.0',
                'Android >= 4.0'
            ]
        }
    },
    // fis-parser-velocity 配置
    // 具体参考：https://github.com/richardchen85/fis-parser-velocity
    velocity: {
        loader: 'seajs',
        macro: '/macro.vm',
        commonMock: '/page/commonMock.mock',
        root: [root, root + '/page']
    },
    // fk release dev目标路径，默认不设置
    // 如果你用非fis自带server，可以直接将代码输出到你server的根目录
    devPath: '',
    // 自定义部署目录
    deploy: {
        // fk release vm 的输出目录
        vmTo: '',
        // fk release debug|prod 的输出目录
        staticTo: ''
    },
    // fk release vm环境下，deploy的replace选项
    // 默认为false, 可跟[Object|Array]
    // 具体配置请参考https://github.com/fex-team/fis3-deploy-replace
    // e.g.
    //   { from:'a', to:'b' }
    //   or
    //   [ { from:'a', to:'b' }, { from:'a0', to: b0' } ]
    replace: false,
    // 模块化配置，如不使用模块化框架，则为false
    modules: {
        // 模块规范[amd|cmd]
        mode: 'cmd',
        // 以下配置请参考fis3-hook-amd或者fis3-hook-cmd配置
        forwardDeclaration: true,
        baseUrl: '/'
    },
    // 打包配置，默认为null无打包配置
    // media('dev')环境只在config.packed为true时打包
    // 其它media默认打包
    // @example
    //   {
    //     '/widget/**.css': {
    //       packTo: '/widget/widget_pkg.css'
    //     }
    //   }
    package: {
        // '/static/common/lib/*.js': {
        //     packTo: '/static/common/lib_pkg.js'
        // }
    }
};

fiskit.amount(config);
