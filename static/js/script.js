document.addEventListener('DOMContentLoaded', function() {
    // 각 동영상 요소들을 선택
    const videos = document.querySelectorAll('.gallery-video');

    // 각 동영상에 이벤트 리스너 추가
    videos.forEach(video => {
        video.addEventListener('mouseover', function() {
            // 마우스를 올리면 각 동영상 간격을 줄임
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.style.marginRight = '5px';
                }
            });
        });

        video.addEventListener('mouseout', function() {
            // 마우스가 떠나면 다시 간격을 늘림
            videos.forEach(otherVideo => {
                if (otherVideo !== video) {
                    otherVideo.style.marginRight = '10px';
                }
            });
        });
    });
});
