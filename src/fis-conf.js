// domain:'<%=absRoot%>'

fis.hook('relative');

fis.media('qa').match('**', {
  relative:true,
  deploy: fis.plugin('http-push', {
    receiver: 'http://dev.woniu.com/receiver.html', // 内网环境
    to:'<%=root%>' // 注意这个是指的是测试机器的路径，而非本地机器
  })
});


fis.media('actProd').match('**', {
  //domain:'<%=absRoot%>',
  relative:true,
  deploy: fis.plugin('http-push', {
    receiver: 'http://production.woniu.com/receiver.html', //生产环境
    to:'<%=root%>'
  })
});

fis.media('siteProd').match('**', {
  relative:true,
  deploy: fis.plugin('http-push', {
    receiver: 'http://production.woniu.com/receiver.html', //生产环境
    to:'<%=root%>'
  })
});