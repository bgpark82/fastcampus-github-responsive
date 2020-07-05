(function(window, document){
    'use strict';

    const $toggles = document.querySelectorAll('.toggle'); /// 요소들을 $로 표현
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function() {
        toggleElements();
    });

    function toggleElements() {
        [].forEach.call($toggles, function(toggle) {
            toggle.classList.toggle('on');
        })
    };

})(window, document)