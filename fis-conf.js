
//修改雪碧图放大缩小倍数，默认是1，iphone是0.5
fis.config.set('css-scale',1);
fis.config.set('pack', {
    'pkg/lib.js': [
        'src/js/lib/**.js'
    ],
    'pkg/app.js':'src/js/app/**.js'
});


fis.config.merge({
    
    
    settings : {

        postpackager : {
            simple : {
                autoCombine : true
            }
        },
        spriter:  {
            csssprites : {
                margin: 0,
                //图片缩放比例，iphone为0.5，默认1
                scale: fis.config.get('css-scale'),
                layout: 'matrix'
            }
        }
    },
	modules:{
		parser:{
			// less后缀的文件使用fis-parser-less插件编译
            // 处理器支持数组，或者逗号分隔的字符串配置
			less:['less'],
			sass : 'sass',
			scss : 'sass'

		},
        spriter : 'csssprites',
		optimizer : {
            //js后缀文件会经过fis-optimizer-uglify-js插件的压缩优化
            js  : 'uglify-js',
            css : 'clean-css',
    		png : 'png-compressor'
        }
	},
	roadmap:{
		ext:{
			// less后缀的文件将输出为css后缀
            // 并且在parser之后的其他处理流程中被当做css文件处理
			less:'css',
			sass:'css',
			scss:'css'
		}
	}
});

fis.config.set('deploy',{
    dist : {
            to : './dist',
            exclude : /\/js\/|\/include\//i,
    },
    develop:{
        
    },
	online:{
		receiver:'http://deploy.woniu.com/receiver.html', // 如果配置了receiver，fis会把文件逐个post到接收端上
		from:'/dist/css',  //从产出的结果的dis目录下找文件
		subOnly:false, // true上传目录从dis下一级开始不包括dis目录
		to:'<%=root%>', 
		//保存到远端机器的/opt/htdocs/www-imuch-com/目录下
        //这个参数会跟随post请求一起发送
		exclude:/.*\.(?:svn|cvs|tar|rar|psd).*/  //某些后缀的文件不进行上传
	}
});