// 1. img src 속성으로 url add
// 2. fairy role div append 
// 3. rendering 
// 4. hover js 에서 주기

// console.log(fairyMembers);

const upperCardFront= (obj) => {
    const frontList = document.createElement("li");
    frontList.className = "member_card1--front";

    // 앞면 미모티콘 className
    const avatarWrapper = document.createElement("div");
    avatarWrapper.className = "member_card--avatar--wrapper";

    // 앞면 00요정 className
    const fairyRole = document.createElement("div");
    fairyRole.className = "member_fairy--role"; 
    fairyRole.textContent = obj.membername;

    // 미모티콘 붙이기
    const avatarImg = document.createElement('img');
    avatarImg.src = obj.picture;
    avatarImg.alt = 'avatar of ' + obj.membername;
    avatarWrapper.append(avatarImg);
  
   frontList.append(avatarWrapper, fairyRole);
   return frontList;
  
  }

const upperCardBack = (obj) => {
  // 뒷면 시작
  const backList = document.createElement("li");
  backList.className = "member_card1--back";

  const nameEnglish = document.createElement('div');
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



const lowerCard = (obj) => {
    const li = document.createElement("li");
    li.className = "member_card2";

    // 앞면 미모티콘 className
    const avatarWrapper = document.createElement("div");
    avatarWrapper.className = "member_card--avatar--wrapper";

    // 앞면 00요정 className
    const fairyRole = document.createElement("div");
    fairyRole.className = "member_fairy--role"; 
    fairyRole.textContent = obj.membername;

    // 미모티콘 붙이기
    const avatarImg = document.createElement('img');
    avatarImg.src = obj.picture;
    avatarImg.alt = 'avatar of ' + obj.membername;
    avatarWrapper.append(avatarImg);

    const nameEnglish = document.createElement('div');
    nameEnglish.textContent = obj.englishname;

    const memberBrief = document.createElement('div');
    memberBrief.textContent = obj.wanttobe

    const memberSpecialty = document.createElement('div');
    memberSpecialty.textContent = obj.specialty

    const memberRole = document.createElement('div');
    memberRole.textContent = obj.role


    li.append(avatarWrapper, fairyRole);
    return li;
}

const upperul = document.querySelector("ul.member_card--upper");
const lowerul = document.querySelector("ul.member_card--lower");

// upperul.append(upperCard(fairyMembers));
// lowerul.append(lowerCard(fairyMembers));

const upperrenderFront = (element) => {
    for (let i = 0; i < 4; i += 1) {
      element.append(upperCardFront(fairyMembers[i]));
    }
};

const upperrenderBack = (element) => {
  for (let i = 0; i < 4; i += 1) {
    element.append(upperCardBack(fairyMembers[i]));
  }
};

const lowerrender = (element) => {
    for (let i = 4; i < 8; i += 1) {
      element.append(lowerCard(fairyMembers[i]));
    }
};

upperrenderFront(upperul);
upperrenderBack(upperul);
lowerrender(lowerul); 
