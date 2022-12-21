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
    // 프로젝트 카드 = 이미지 영역 + 이름 영역
    const elImgArea = document.createElement('div');
    elImgArea.className = 'project_cardAreaImg';
    elImgArea.id = data.id;
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
const elProjectCardArea = document.querySelector('.project_slides');
// 아래 코드를 반복하게 해야 함
dataProjects.map(data => {
    const elProjectCard = renderProjectCard(data);
    elProjectCardArea.append(elProjectCard);
})



// * 슬라이드 기능 구현
const slides = document.querySelector('.project_slides'),
    slide = slides.querySelectorAll('li'),
    slideCount = slide.length,
    slideWidth = 280,
    slideMargin = 30,
    prevBtn = document.querySelector('#project_prev'), 
    nextBtn = document.querySelector('#project_next');
let currentIdx = 0;
makeClone();

function makeClone() {
    for (let i=0; i<slideCount; i++) {
        //a.cloneNode(true) a의 자식요소까지 모두 복사
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.appendChild(cloneSlide);
    }
    for (let i=slideCount-1; i>=0; i--) {
        let cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        slides.prepend(cloneSlide);
    }
    updateWidth();
    setInitPos();
    setTimeout(()=>{
        slides.classList.add('animated');
    }, 100);
    
}
//전체 갯수 구하고 하나의 슬라이드 하나와 하나의 마진을 곱한다
function updateWidth() {
    const currentSlides = slide;
    const newSlideCount = currentSlides.length;
    const newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px' //! 'p'가 뭔가용..?? px오타! 아하!
    slides.style.width = newWidth;
}

function setInitPos() {
    // let initTranslateValue = -((slideWidth + slideMargin) * slideCount);
    slides.style.transform = `translateX(0px)`;
}

nextBtn.addEventListener('click', () => {
    console.log(currentIdx);
    moveSlide(currentIdx + 2);
});
prevBtn.addEventListener('click', () => {
    console.log(currentIdx);
    moveSlide(currentIdx - 2);
});

function moveSlide(num) {
    slides.style.left = -num * (slideWidth + slideMargin) + 'px';
    currentIdx = num;
    //여기까지 하면 우리가 구현한데까지된것
    console.log(currentIdx,slideCount);
    
    if (currentIdx === slideCount || currentIdx === -slideCount) {
        setTimeout(() => {
            // 값을 초기화할 때는 처음 위치로 되돌아가는 걸 애니메이션으로 보여주지 않도록
            // 애니메이션 관련 클래스를 제거
            slides.classList.remove('animated');
            
            slides.style.left = '0px';
            currentIdx = 0;
        }, 500);
        setTimeout(() => {
            // 위치 초기화가 완료되면 다시 애니메이션 활성화
            slides.classList.add('animated');
        }, 600);
    }
}
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
        renderModalBox(dataProjects.find(data => data.id === e.target.parentNode.id));
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
//큰박스
const renderModalBox = data => { 
    const project_modalBox = document.querySelector('.project_modalBox');
    //모달 바디 컨테이너
    const project_modalBodyContainer = document.createElement('div')
    project_modalBodyContainer.className = 'project_modalBodyContainer'
    //모달 버튼박스
    const project_modalButtonBox = document.createElement('div')
    project_modalButtonBox.className = 'project_modalButtonBox'

    //모달 바디
    const project_modalBody = document.createElement('div')
    project_modalBody.className = 'project_modalBody'
    //모달 바디해더 렌더링
    const project_modalBodyHeader = renderModalHeader(data);
    // project_modalBodyHeader.className = 'project_modalBodyHeader'
    //모달 버튼박스 컨테이너
    const project_modalButtonBoxContainer = document.createElement('div')
    project_modalButtonBoxContainer.className = 'project_modalButtonBoxContainer'
    //모달 버튼,text
    const project_modalButton = document.createElement('button')
    project_modalButton.className = 'project_modalButton'
    project_modalButton.id = 'project_modalCopy'
    const project_modalButtonText = document.createElement('span')
    project_modalButtonText.textContent = '복사'

    // 모달 본문 영역 렌더링
    const content = renderModalBodyContents(data.modal.image);

    //모달박스에 넣기
    project_modalBox.append(project_modalBodyContainer,project_modalButtonBox);
    project_modalBody.append(project_modalBodyHeader, content);
    project_modalBodyContainer.append(project_modalBody)
    
    project_modalButtonBox.append(project_modalButtonBoxContainer)
    project_modalButtonBoxContainer.append(project_modalButton,project_modalButtonText);

    // history.pushState(null, null, data.id);
    // 세션히스토리, 타이틀(변경하지않으면 null), url 키값
}

const initModalBox = () => {
    const project_modalBox = document.querySelector('.project_modalBox');
    while (project_modalBox.firstChild) {
        project_modalBox.firstChild.remove();
    }
}

const renderModalHeader = data => {
    // 모달 프로젝트 헤더영역
    const project_modalBodyHeader = document.createElement('div');
    project_modalBodyHeader.className = 'project_modalBodyHeader';

    // 모달 프로젝트 헤더 제목
    const project_modalProjectName = document.createElement('div');
    project_modalProjectName.className = 'project_modalProjectName';
    project_modalProjectName.textContent = data.name;
    
    // 모달 프로젝트 헤더 링크버튼 영역
    const project_modalProjectButtonBox = document.createElement('div');
    project_modalProjectButtonBox.className = 'project_modalProjectButtonBox';    
    
    // 모달 프로젝트 헤더 링크버튼 - 깃허브
    const project_modalProjectGitHubButton = document.createElement('button');
    project_modalProjectGitHubButton.className = 'project_modalProjectButton'; 
    project_modalProjectGitHubButton.id = 'project_github';
    const project_modalProjectGitHubButton_img = document.createElement('img');
    project_modalProjectGitHubButton_img.src = './img/project_github.png';
    const project_modalProjectGitHubButton_span = document.createElement('span');
    project_modalProjectGitHubButton_span.textContent = 'View Code';

    // 모달 프로젝트 헤더 링크버튼 - 데모사이트
    const project_modalProjectDemoButton = document.createElement('button');
    project_modalProjectDemoButton.className = 'project_modalProjectButton';
    project_modalProjectDemoButton.id = 'project_demo';
    const project_modalProjectDemoHubButton_img = document.createElement('img');
    project_modalProjectDemoHubButton_img.src = './img/project_to.png';
    const project_modalProjectDemoHubButton_span = document.createElement('span');
    project_modalProjectDemoHubButton_span.textContent = 'View Site';

    // 모달 프로젝트 헤더에 제목, 버튼 뿌려주기
    project_modalBodyHeader.append(project_modalProjectName, project_modalProjectButtonBox);
    project_modalProjectButtonBox.append(project_modalProjectGitHubButton, project_modalProjectDemoButton);
    project_modalProjectGitHubButton.append(project_modalProjectGitHubButton_img, project_modalProjectGitHubButton_span);
    project_modalProjectDemoButton.append(project_modalProjectDemoHubButton_img, project_modalProjectDemoHubButton_span);
    

    return project_modalBodyHeader;
}


const renderModalBodyContents = modalImages => {
    // 본문 영역 생성
    const project_modalBodyContents = document.createElement('div');
    project_modalBodyContents.className = 'project_modalBodyContents';
    
    // 이미지들을 저장된 순서대로 렌더링
    modalImages.map(img => {
        // 이미지 영역 생성
        const project_modalContent = document.createElement('img');
        project_modalContent.className = 'project_modalContent';
        project_modalContent.src = img;

        // 본문 영역에 이미지 영역 붙이기
        project_modalBodyContents.append(project_modalContent);
    });

    // 생성된 전체 영역 반환
    return project_modalBodyContents;
}

// 난이도: 중
// ToDo 모달 클릭 시 데이터의 id로 주소가 들어가게끔 구현
// ToDo 모달 닫았을 때, id 주소가 사라져야 함
// ToDo 복사 버튼 클릭 시 위 주소를 복사
// ToDo 복사됐을 때 '복사되었습니다'라고 토스트 메시지 표시

// 난이도: 하
// ToDo 깃헙, 데모 버튼 렌더링될 때 데이터에서 주소 가져오도록 구현

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
feat: render Modal page from 'pageProjectData.js'

12.21
feat: Implement slider per project card
feat: Render modal from 'pageProjectData.js' by id
*/