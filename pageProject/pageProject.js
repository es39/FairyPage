/*

------메인 기능------

- 프로젝트 카드 더미데이터 만들고(6개), 데이터 렌더링하는 함수 작성
- 프로젝트 카드 클릭했을 때 모달 표시
- 모달 영역 바깥쪽 클릭 시 모달 표시 해제

- 카드섹션 슬라이드(prev,next 버튼 눌렀을 때 => 무한슬라이드!!ㅇ0ㅇ) ㅇ0ㅇ!! ㅇ0ㅇ!! ㄴㅇㄱ ㅎ0ㅎ
- 모달 on/off,  



- 카드넘어가는 거
    - startIndex ~ startIndex+3번째까지 보이고,
    - next 클릭했을 때 startIndex += 2
    - prev 클릭했을 때 startIndex -= 2
    - 무한.. 슬라이..드.....
    - 넘어가는 애니매이션 스무스하게


------모달창 기능------

    - 무한 슬라이드 레퍼런스
        - 리액트 레퍼런스
        https://velog.io/@jujusnake/JULABO-React.js%EB%A1%9C-Infinite-Carousel-%EA%B5%AC%ED%98%84-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EB%AF%B8%EC%82%AC%EC%9A%A9
        - 설명이 자세해요, 바닐라 JS 사용
        https://ye-yo.github.io/react/2022/01/21/infinite-carousel.html
        - 간단하게 만드는, 바닐라 JS 사용
        https://eunhee-programming.tistory.com/166

    - 모달 창 복사 기능
        - http://127.0.0.1:5500
        - 페이지 프로젝트 팀 영역 주소: http://127.0.0.1:5500/#pageProject
        - 모달창이 열렸을 때 주소 ( 클라이언트에서 추가하기)
            - http://127.0.0.1:5500/#pageProject/#1
            - http://127.0.0.1:5500/#pageProject/#2
            - http://127.0.0.1:5500/#pageProject/#3
        - 복사버튼을 눌렀을 때는 모달창이 열렸을 때 주소를 복사
        - "복사 되었습니다!" 문구 떳다 사라지기 3s

    - 모달창이 떠있을 때 페이지의 배경 영역은 fix(고정)

    - 깃헙 링크 클릭 
        -새 페이지에서 열리게 !
        
    - 데모링크 클릭 
        - 새 페이지 
*/

