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
    elName.textContent = data.name;
    
    // 이미지 영역 = 이미지 + 이미지 내부 프로젝트 설명
    const elImg = document.createElement('div');
    const elDescribe = document.createElement('span');

    // 이미지 표시
    elImg.style.backgroundImage = `url('${data.image}')`;
    elImg.style.backgroundSize = '280px 400px';
    // 설명 표시
    elDescribe.textContent = data.describe;
    // 이미지 영역 조립
    elImgArea.append(elImg, elDescribe);

    // 이미지 영역에 마우스 오버 시 검게 처리
    elImgArea.addEventListener('mouseover', () => {
        elImg.style.background = `linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.6) 100%), url('${data.image}')`;
        elImg.style.backgroundSize = '280px 400px';
    })
    elImgArea.addEventListener('mouseout', () => {
        elImg.style.backgroundImage = `url('${data.image}')`;
        elImg.style.backgroundSize = '280px 400px';
    })

    // 프로젝트 카드 조립
    elCard.append(elImgArea, elName);
    
    return elCard;
};

// 2. ul.project_cardArea 요소에 컴포넌트를 배열 데이터만큼 반복 렌더링
const elProjectCardArea = document.querySelector('.project_cardArea');
// 아래 코드를 반복하게 해야 함
dataProjects.map(data => {
    const elProjectCard = renderProjectCard(data);
    elProjectCardArea.append(elProjectCard);
})



/*
+=============+
| 모달 토글 기능 |
+=============+
*/
//모달 div 를 불러온다
const cardImg = document.querySelectorAll('.project_cardAreaImg');
const modal = document.querySelector('.project_modal'); // ; 안넣으면 뒤에[] 가 오는 문법이 있어서 마무리 해줘야 함

//카드 이미지 클릭 시 모달창 뜨는
//toggle === 있으면 빼고 없으면 넣는 메서드
//event.preventDefault() submit 같은 새로고침 발생하는 이벤트를 막기위해 쓰는 메서드
[...cardImg].map(el => {
    el.addEventListener('click',(e) => {
        modal.classList.remove('hidden');
        renderModalBox(dataProjects[0])
    });
});
//모달 밖을 클릭하면 닫는 
window.addEventListener ('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
        initModalBox();
    };
});

/*
+=================+
|  모달 렌더링 기능   |
+=================+
*/

/*
{
    id: "1",
    image: "../img/projectImg.png",
    name: "card 1",
    describe: "첫번째 프로젝트를 소개합니다. 간단한 프로젝트 설명이 들어갈 자리입니다.",
    modal: {
        github: "",
        demo: "",
        image: []
    }
}
*/
// ToDo 모달박스 자체를 그리도록 리팩토링
const renderModalBox = data => {
    const project_modalBox = document.querySelector('.project_modalBox');
    project_modalBox.id = `project_modal${data.id}`;
    
    // 이름 prepend
    const project_modalBodyHeader = document.querySelector('.project_modalBodyHeader');
    const project_modalProjectName = document.createElement('div');
    project_modalProjectName.className = 'project_modalProjectName'
    project_modalProjectName.textContent = data.name;
    project_modalBodyHeader.prepend(project_modalProjectName);
    
    
    
    // 모달 컨텐츠 이미지 ... ㅇ0ㅇ
    const project_modalBodyContents = document.querySelector('.project_modalBodyContents');
    data.modal.image.map(img =>{
        const project_modalContent = document.createElement('img');
        project_modalContent.className = 'project_modalContent'
        project_modalContent.src = img
        project_modalBodyContents.append(project_modalContent)
    })

    // GitHub 버튼 링크 연결
    const gitHubBtn = document.querySelector('#project_github');
    gitHubBtn.addEventListener('click', () => {
        window.open(data.modal.github);
    });

    // 데모 버튼 링크 연결
    const demoBtn = document.querySelector('#project_demo');
    demoBtn.addEventListener('click', () => {
        window.open(data.modal.demo)
    })
}
const initModalBox = () => {
    // id 삭제
    const project_modalBox = document.querySelector('.project_modalBox');
    project_modalBox.id = '';
    
    // 이름 영역 삭제
    const project_modalProjectName = document.querySelector('.project_modalProjectName');
    project_modalProjectName.remove()
    
    
    
    // 모달 컨텐츠 이미지 삭제
    const project_modalBodyContents = document.querySelector('.project_modalBodyContents');
    // while (project_modalBodyContents.firstChild) {
    //     project_modalBodyContents.remove()
    // }

    // GitHub 버튼 링크 연결 삭제
    function replaceCallback() {} //모달이 이벤트 리스너 익명함수를 통해 열리기 때문에 
    const gitHubBtn = document.querySelector('#project_github');
    gitHubBtn.addEventListener('click', replaceCallback);   //새로운 함수를 만들어 덮어씌우게 인자로 넣어줌
    gitHubBtn.removeEventListener('click', replaceCallback);

    // 데모 버튼 링크 연결                   uerySelector('#project_demo');
    demoBtn.addEventListener('click', replaceCallback);
    demoBtn.removeEventListener('click', replaceCallback);
} 


/*
커밋을 열심히 하자

12.12
js 파일에 넣어야 할 기능들 To Do List 만들기

12.14
변수명 짓기
데이터 더미 json 파일을 js 파일로 바꾸고 스크립트로 불러옴
모달 창 open

12.15
feat: Can open/close modal using by 'modalButton'
feat: Show project's describe when mouse over the 'projectCard'

12.20
각 projectCard 마다 modalPageContent 넣기 

*/