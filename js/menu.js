document.querySelectorAll('.nav-items .item').forEach(function(item,index){
    item.addEventListener('click',function(event){
      if(!document.querySelectorAll('.nav-items .item')[index].classList.contains('show')) {
       if(document.querySelectorAll('.nav-items .item.show').length > 0) {
        document.querySelectorAll('.nav-items .item.show').forEach(function(item,index){
          item.classList.remove('show');
        });
       }
       document.querySelectorAll('.nav-items .item')[index].classList.toggle('show');
      }else {
        document.querySelectorAll('.nav-items .item')[index].classList.toggle('show');
      }
    })
  })

  document.querySelector('body').addEventListener('click',function(event){
    if(!event.target.classList.contains('item')) {
        if(document.querySelectorAll('.nav-items .item.show').length > 0) {
            document.querySelector('.nav-items .item.show').classList.remove('show');
        }
    }
    
  });

  document.querySelector('.hamburger--collapse').addEventListener('click',function(){
    document.querySelector('.hamburger--collapse').classList.toggle('is-active');
    document.querySelector('.nav-items').classList.toggle('show');
  });