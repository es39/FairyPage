// 1. img src 속성으로 url add
// 2. fairy role div append 
// 3. rendering 
// 4. hover js 에서 주기

// conatiner <- inner <- front-n & back-n 추가
// id css 추가

console.log(fairyMembers);

// eunseon

const upperCardFront= (obj) => {
  const frontList = document.querySelector("#member_eunseon_f");

  // 앞면 미모티콘 className
  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "member_card--avatar--wrapper";

  // 앞면 00요정 className
  const fairyRole = document.createElement("div");
  fairyRole.className = "member-card-name"; 
  fairyRole.textContent = obj.membername;

  // 미모티콘 붙이기
  const avatarImg = document.createElement('img');
  avatarImg.src = obj.picture;
  avatarImg.alt = 'avatar of ' + obj.membername;
  avatarWrapper.append(avatarImg);

  //const 

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

const upperCardBack = (obj) => {
// 뒷면 시작
  const backList = document.querySelector("div#member-card-back");

  const nameEnglish = document.createElement('h5');
  nameEnglish.className = 'member_Englishname'
  nameEnglish.textContent = obj.englishname;

  const memberBrief = document.createElement('div');
  memberBrief.className = "member_Brief"
  memberBrief.textContent = obj.wanttobe

  const memberSpecialty = document.createElement('div');
  memberSpecialty.className = "member_Specialty"
  memberSpecialty.textContent = obj.specialty

  const memberRole = document.createElement('div');
  memberRole.className = "member_Role"
  memberRole.textContent = obj.role

  backList.append(nameEnglish, memberBrief, memberSpecialty, memberRole)
  return backList;
}



// // const upperCardInner = (frontList, backList) => {
// //   const upperInner = document.createElement("div");
// //   upperInner.className = "upper--inner";
  
// //   upperInner.append(frontList, backList)
// //   return upperInner;
// // }

// const lowerCard = (obj) => {
//     const div = document.createElement("div");
//     div.className = "member_card2";

//     // 앞면 미모티콘 className
//     const avatarWrapper = document.createElement("div");
//     avatarWrapper.className = "member_card--avatar--wrapper";

//     // 앞면 00요정 className
//     const fairyRole = document.createElement("div");
//     fairyRole.className = "member_fairy--role"; 
//     fairyRole.textContent = obj.membername;

//     // 미모티콘 붙이기
//     const avatarImg = document.createElement('img');
//     avatarImg.src = obj.picture;
//     avatarImg.alt = 'avatar of ' + obj.membername;
//     avatarWrapper.append(avatarImg);

//     const nameEnglish = document.createElement('div');
//     nameEnglish.textContent = obj.englishname;

//     const memberBrief = document.createElement('div');
//     memberBrief.textContent = obj.wanttobe

//     const memberSpecialty = document.createElement('div');
//     memberSpecialty.textContent = obj.specialty

//     const memberRole = document.createElement('div');
//     memberRole.textContent = obj.role


//     div.append(avatarWrapper, fairyRole);
//     return div;
// }

// container <- inner <- f&b
const upperul1 = document.querySelector("div.member-card-inner");
const upperul2 = document.querySelector("div.member-card-inner");

// upperul1.append(frontList);

// const upperul = document.querySelector("div.member-card-container");
// upperul.append(upperul1)


const upperrenderFront1 = (element) => {
    element.append(upperCardFront(fairyMembers[0]));
    element.append(upperCardBack(fairyMembers[0]));
};

// const upperrenderBack1 = (element) => {
//   element.append(upperCardBack(fairyMembers[1]));
// };

upperrenderFront1(upperul1);
// upperrenderBack1(upperul2);
// upperrenderBack(upperul);
// lowerrender(lowerul); 

