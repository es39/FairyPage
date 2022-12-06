// 1. img src 속성으로 url add
// 2. fairy role div append 
// 3. rendering 
// 4. hover js 에서 주기

console.log(fairyMembers);

const upperCard = (obj) => {
    const li = document.createElement("li");
    li.className = "member_card1";

    // 앞면 미모티콘 className
    const avatarWrapper = document.createElement("div");
    avatarWrapper.className = "member_card--avatar--wrapper";

    // 앞면 00요정 className
    const fairyRole = document.createElement("div");
    fairyRole.className = "member_fairy--role"; 

    const avatarImg = document.createElement('img');
    avatarImg.src = obj.picture;
    avatarImg.alt = 'avatar of ' + obj.membername;
    avatarWrapper.append(avatarImg);

    
    li.append(avatarWrapper, fairyRole);
  return li;
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

    // 미모티콘 붙이기
    

    li.append(avatarWrapper, fairyRole);
    return li;
}

const upperul = document.querySelector("ul.member_card--upper");
const lowerul = document.querySelector("ul.member_card--lower");

// upperul.append(upperCard(fairyMembers));
// lowerul.append(lowerCard(fairyMembers));

const upperrender = (element) => {
    for (let i = 0; i < 4; i += 1) {
      element.append(upperCard(fairyMembers[i]));
    }
    return;
};

const lowerrender = (element) => {
    for (let i = 4; i < 8; i += 1) {
      element.append(lowerCard(fairyMembers[i]));
    }
    return;
};

upperrender(upperul);
lowerrender(lowerul); 
