  //画像フェイドいんーアウト
   function fadeOutImage() {
      document.getElementById('fadeImage').classList.add('fade-out');
      document.getElementById('fadeImage').classList.remove('fade-in');
    }
  
    function fadeInImage() {
      document.getElementById('fadeImage').classList.add('fade-in');
      document.getElementById('fadeImage').classList.remove('fade-out');
    }