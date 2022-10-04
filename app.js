const person=[
    {id:1,name:"Jon",age:12,job:"Front-end developer",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxkEpW54MX2_FJI1_Ivh-8HmH46fnCsaWj422sQcm&s"},
    {id:2,name:"Tom",age:25,job:"Back-end developer",img:"https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_960_720.jpg"},
    {id:3,name:"Anabella",age:18,job:"Full stack developer",img:"https://thumbs.dreamstime.com/b/closeup-photo-funny-excited-lady-raise-fists-screaming-loudly-celebrating-money-lottery-winning-wealthy-rich-person-wear-casual-172563278.jpg"},
    {id:4,name:"Peter",age:17,job:"Web designer",img:"https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"},
];
// const card=document.querySelector(".card");
// const img=document.querySelector(".card-img-top");
// const isName=document.querySelector(".card-title");
// const job=document.querySelector(".card-text");
// const age=document.querySelector(".btn");
const container=document.querySelector(".container");
person.map((item,index,array)=>{
    // img.src=item.img;
    // isName.innerHTML=item.name;s
    // job.innerHTML=item.job;
    // age.innerHTML=item.age;

    //card
    const card=document.createElement("div");
    card.classList.add("card");
    card.style.width="18rem";
    container.appendChild(card);

    //img
    const img=document.createElement("img");
    img.classList.add("card-img-top");
    img.src=item.img
    card.appendChild(img)
    
    //card body
    const cardBody=document.createElement("div");
    cardBody.classList.add("card-body");
    cardBody.classList.add("text-center");
    cardBody.innerHTML=`
    <h5 class='card-title'>${item.name}</h5>
    <p class='card-text'>${item.job}</p>
    <button class='btn btn-primary'>${item.age}</button>
    `
    card.appendChild(cardBody);
});