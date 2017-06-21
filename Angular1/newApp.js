angular.module('newApp',['ngAnimate'])
  .controller('appController', function()
  {
    var appList = this;
    appList.toggle = false;
    appList.list = [
      {name: 'Karan', age: 20, img:'./images/1.jpg'},
      {name: 'Rahul', age: 25, img:'./images/2.jpg'},
      {name: 'Bhaskar', age: 22, img:'./images/3.jpg'},
      {name: 'Manish', age: 35, img:'./images/4.jpg'}
    ];

    appList.addPerson = function() {
      appList.list.push({name: appList.name, age: appList.age, img: './images/'+appList.img+'.jpg'});
      appList.name = '';
      appList.img = '';
      appList.age = null;
    };
  });
