let articleNum = 6;
showArticle();
document.querySelector('.load-more').addEventListener('click',function(){
    articleNum = articleNum + 3;
    if(document.querySelectorAll('.article').length <= articleNum) {
        //debugger;
        document.querySelector('.load-more').classList.add('hide');
    }
    showArticle();
});


function showArticle() {
    document.querySelectorAll('.article').forEach(function(item,index) {
        if(index <  articleNum){
            if(!item.classList.contains('show')) {
                item.classList.add('show');
            }
        }
    });

}