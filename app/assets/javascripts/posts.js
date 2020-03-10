$(function(){
  function buildPost(post){
    let html = `<div class="content">
                  ${post.text}
                </div>`
    return html
  }


  $('.new_post').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this)
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(post){
      let html = buildPost(post)
      $('.contents').append(html)
      $('#post_text').val('')
    })
    .fail(function(){
      alert('エラーです')
    })
  })
});