// scripts.js

$(document).ready(function () {
  var users = 21;
  var winner = 1;

  // 클릭 이벤트 핸들러 등록
  $('.lotterybtn').on('click', function () {
    lotterybtn();
  });

  function lotterybtn() {
    // 당첨자 뽑기 로직
    if (winner <= users) {
      // 중복 당첨 방지를 위해 이미 뽑힌 당첨자는 제외
      var previousWinner = $('#winner').text();
      var newWinner;
      do {
        newWinner = Math.floor(Math.random() * users) + 1;
      } while (newWinner === previousWinner);

      // 당첨자 출력 및 스타일 변경
      $('#winner').text(newWinner);
      $('.div-lottery-winner-number').css({ "color": "#f00" });

      // 더 이상 당첨자를 추첨하면 버튼을 비활성화
      if (winner === 1) {
        $('.lotterybtn').attr('disabled', 'disabled');
      }

      winner++;
    } else {
      alert('더 이상 추첨할 당첨자가 없습니다.');
    }
  }
});