fis.match('/src/**/*.{js,css}', {
  isMod: true
});
fis.match('src/**/*', {
  release: './' // 所有资源发布时产出到 /static 目录下
});







fis.media('qa').match('*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://cq.01.p.p.baidu.com:8888/receiver.php',
    to: '/home/work/htdocs' // 注意这个是指的是测试机器的路径，而非本地机器
  })
});


fis.media('production').match('src/*', {
  deploy: fis.plugin('http-push', {
    receiver: 'http://deploy.woniu.com/receiver.html',
    to:'<%=root%>'
  })
});

