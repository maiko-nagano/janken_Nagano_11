
    
$(function(){
    // ボタンのクリックイベント
$('.form-control').on('click', function() {
        const userHand = parseInt($(this).data('hand'));
        const randomNumber = Math.ceil(Math.random() * 3);
        if(randomNumber === 1) {
            $('#com').html('<img src="images/cjanken_gu.png" alt="">');
        }else if(randomNumber === 2) {
            $('#com').html('<img src="images/cjanken_choki.png" alt="">');
        }else{
            $('#com').html('<img src="images/cjanken_pa.png" alt="">');
        }
        if(userHand === randomNumber) {
            $('#result').html('あいこ');
        }else if(userHand === 1 && randomNumber === 2) {
            $('#result').html('あなたの勝ち');
        }else if(userHand === 2 && randomNumber === 3) {
            $('#result').html('あなたの勝ち');
        }else if(userHand === 3 && randomNumber === 1) {
            $('#result').html('あなたの勝ち');
        }else{
            $('#result').html('あなたの負け');
        }
        $(this).css('border', '3px solid #333');
        $(this).prop('disabled', true);
        $('.form-control').not(this).prop('disabled', true);
    });
    $('#resetButton').click(function() {
        // 再読み込み
        location.reload(); 
    });
});
