// 1. img src 속성으로 url add
// 2. fairy role div append 
// 3. rendering 
// 4. hover js 에서 주기

// conatiner <- inner <- front-n & back-n 추가
// id css 추가

console.log(fairyMembers);

// 은선님
const member_eunseon_f = (obj) => {
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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// const member_eunsoen_b = (obj) => {
// // 뒷면 시작
//   const backList = document.querySelector("#member_eunsoen_b");

//   const nameEnglish = document.querySelector('h5');
//   nameEnglish.textContent = obj.englishname;

//   const memberBrief = document.createElement('div');
//   memberBrief.className = "member_Brief"
//   memberBrief.textContent = obj.wanttobe

//   const memberSpecialty = document.createElement('div');
//   memberSpecialty.className = "member_Specialty"
//   memberSpecialty.textContent = obj.specialty

//   const memberRole = document.createElement('div');
//   memberRole.className = "member_Role"
//   memberRole.textContent = obj.role

//   backList.append(nameEnglish, memberBrief, memberSpecialty, memberRole)
//   return backList;
// }

// 승미님
const member_seungmi_f= (obj) => {
  const frontList = document.querySelector("#member_seungmi_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// 규리님
const member_gyuri_f= (obj) => {
  const frontList = document.querySelector("#member_gyuri_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// 송민님
const member_songmin_f= (obj) => {
  const frontList = document.querySelector("#member_songmin_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// 재훈님
const member_jaehun_f= (obj) => {
  const frontList = document.querySelector("#member_jaehun_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// 은수님
const member_eunsu_f= (obj) => {
  const frontList = document.querySelector("#member_eunsu_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// 창용님
const member_changyong_f= (obj) => {
  const frontList = document.querySelector("#member_changyong_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}

// 상교님
const member_sangkyo_f= (obj) => {
  const frontList = document.querySelector("#member_sangkyo_f");

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

 frontList.append(avatarWrapper, fairyRole);
 return frontList;

}




// ==========================

// container <- inner <- f&b
const upperul1 = document.querySelector("div.member-card-inner");
const upperul2 = document.querySelector("div.member-card-inner");

//은선님
const member_eunseon = (element) => {
  // element.append(member_eunseon_b(fairyMembers[0]));
  element.append(member_eunseon_f(fairyMembers[0]));
};

member_eunseon(upperul1);

//승미님
const member_seungmi = (element) => {
  element.append(member_seungmi_f(fairyMembers[1]));
  // element.append(member_seungmi_b(fairyMembers[1]));
};

// member_seungmi(upperul2);

//규리님
const upperrenderFront3 = (element) => {
  element.append(upperCardFront(fairyMembers[2]));
  // element.append(upperCardBack(fairyMembers[2]));
};

// upperrenderFront3(upperul1);

//송민님
const upperrenderFront4 = (element) => {
  element.append(upperCardFront(fairyMembers[3]));
  // element.append(upperCardBack(fairyMembers[3]));
};

// upperrenderFront4(upperul1);

//재훈님
const upperrenderFront5 = (element) => {
  element.append(upperCardFront(fairyMembers[4]));
  // element.append(upperCardBack(fairyMembers[4]));
};

// upperrenderFront5(upperul1);

//은수님
const upperrenderFront6 = (element) => {
  element.append(upperCardFront(fairyMembers[5]));
  // element.append(upperCardBack(fairyMembers[5]));
};

// upperrenderFront6(upperul1);

//창용님
const upperrenderFront7 = (element) => {
  element.append(upperCardFront(fairyMembers[6]));
  // element.append(upperCardBack(fairyMembers[6]));
};

// upperrenderFront7(upperul1);

//상교님
const upperrenderFront8 = (element) => {
  element.append(upperCardFront(fairyMembers[7]));
  // element.append(upperCardBack(fairyMembers[7]));
};

// upperrenderFront8(upperul1);
