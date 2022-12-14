/*
슬라이드
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

/*
+====================+
| 프로젝트 카드 영역 생성 |
+====================+
*/
// 프로젝트 더미 데이터 호출
// const dataProjects = require('./pageProjectData.json')
// import dataProjects from './pageProjectData.json';

// 카드 컴포넌트 렌더링 함수
// className = '이름' 은 한개만 가능. (있던 클래스명을 변경할 때 쓰일 수 있다.)
// classList.add('이름','이름2') 은 여러개 가능
const renderProjectCard = data => {
    // 최상위 부모 요소 선언
    const elCard = document.createElement('li');
    elCard.id = `ProjectCard${data.id}`
    // 프로젝트 카드 = 이미지 영역 + 이름 영역
    const elImgArea = document.createElement('div');
    elImgArea.className = 'project_cardAreaImg';
    const elName = document.createElement('span');
    elName.textContent = data.name
    
    // 이미지 영역 = 이미지 + 이미지 내부 프로젝트 설명
    const elImg = document.createElement('div');
    const elDescribe = document.createElement('span');

    // 이미지 표시 
    // ToDo 호버했을 때 이미지 검게 처리
    elImg.style.backgroundImage = `url('${data.image}')`
    // 설명 표시
    elDescribe.textContent = data.describe
    // 이미지 영역 조립
    elImgArea.append(elImg, elDescribe);
    
    // 프로젝트 카드 조립
    elCard.append(elImgArea, elName);
    
    return elCard
};

// 2. ul.project_cardArea 요소에 컴포넌트를 배열 데이터만큼 반복 렌더링
const elProjectCardArea = document.querySelector('.project_cardArea')
// 아래 코드를 반복하게 해야 함
dataProjects.map(data => {
    const elProjectCard = renderProjectCard(data)
    elProjectCardArea.append(elProjectCard)
})



/*
+=============+
| 모달 토글 기능 |
+=============+
*/
// ToDo 모달창 이외 영역 클릭 시 모달창 close
// * 강조되고 반복되는 코드는 프로그래머를 불안하게 합니다. 으악 ㅇ0ㅇ!
// 모달 토글

//모달 div 를 불러온다
const modal = document.querySelector('.project_modal')
const cardImg = document.querySelector('.project_cardArea')

const toggleModal = () => {
    modal.classList.toggle('hidden');
}

cardImg.addEventListener ('click', (e) => {
    e.preventDefault();
    toggleModal()
})