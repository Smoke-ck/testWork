const geAll = s => document.querySelectorAll(s);
// for (let i = 0; i < tabNavs.length; i++) {

//   tabNavs[i].addEventListener("click", (e) =>{
//     e.preventDefault();
//     const activeTabAttr = e.target.getAttribute("data-tab");

//     for (let j = 0; j < tabNavs.length; j++) {
//       const contentAttr = tabPanes[j].getAttribute("data-tab-content");

//       if (activeTabAttr === contentAttr) {
//         tabNavs[j].classList.add("is-active"); 
//         tabPanes[j].classList.add("is-active"); 
//       } else {
//         tabNavs[j].classList.remove("is-active"); 
//         tabPanes[j].classList.remove("is-active");
//       }
//     }
//   });
// }
function tabs (nav,con,navAt,contentAt) {

  const navigation = nav;
  const content = con;
  const activeNavAttr = navAt;
  const activeContentAttr = contentAt;
  
    for (let i = 0; i < navigation.length; i ++) {
  
      navigation[i].addEventListener('click', (e) => {
        e.preventDefault();
            
        const activeTabAttr= e.target.getAttribute(activeNavAttr);
        console.log(activeTabAttr)
          for (let j = 0; j < navigation.length; j++) {
            const contentAttr = content[j].getAttribute(activeContentAttr);

            if(activeTabAttr === contentAttr) {
              navigation[j].classList.add("is-active") 
              content[j].classList.add("is-active"); 
            } else {
              navigation[j].classList.remove("is-active"); 
              content[j].classList.remove("is-active");
            }
          }
        });
      }
  }

const tabNavs = geAll(".benefits__link");
const tabPanes = geAll(".benefits__content")
const clickBenefits = tabs(tabNavs,tabPanes,"data-tab","data-tab-content");

const proffedLink = geAll(".profeed-wrapper-open__tittle");
const proffedText = geAll(".profeed-wrapper-open__description");
const clickProfeed = tabs(proffedLink,proffedText,"data-profeed-link","data-profeed-text");