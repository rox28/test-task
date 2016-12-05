
 $(document).ready(function() {
    //Show/Hide Partners Block
    $('.companies-list li a').on('click', function(){
        $('#sortable-partners-list').toggleClass('active');    
        $('#sortable-partners-list').toggle("slow");                                
    });

    //
    //$('#news-text').load('http://codeit.pro/frontTestTask/news/getList');
});