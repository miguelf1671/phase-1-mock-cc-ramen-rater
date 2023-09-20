// write your code here
 const ramens = "http://localhost:3000/ramens";
 const ramen_detail = document.querySelector("#ramen-detail");
 let ramenMenu_div = document.querySelector("#ramen-menu");
 let detail_img = document.querySelector(".detail-image");
 
 let imgName = document.querySelector(".name");
 let restaurant = document.querySelector(".restaurant");
 let rating = document.querySelector("#rating-display");
 let comment = document.querySelector("#comment-display");
 
 function handleImageClick(ramen){
    detail_img.src = ramen.image;
    imgName.textContent = ramen.name;
    restaurant.textContent = ramen.restaurant;
    rating.textContent = ramen.rating;
    comment.textContent = ramen.comment;
};

 fetch(ramens)
 .then(response => response.json())
 .then(ramens => {
    detail_img.src = ramens[0].image;
    imgName.textContent=ramens[0].name;
    restaurant.textContent = ramens[0].restaurant;
    rating.textContent = ramens[0].rating;
    comment.textContent = ramens[0].comment;

    ramens.forEach(ramen => {
        getRamen(ramen, ramens);
    });
 });

 function getRamen(ramen, ramensArray){
    let ramens_array = ramensArray.indexOf(ramen);
    let ramen_img_ele = document.createElement("img");
    ramen_img_ele.src = ramen.image;
    ramenMenu_div.append(ramen_img_ele);

    ramen_img_ele.addEventListener('click',()=>{
        handleImageClick(ramen);
        
    });
}


 
 let newForm = document.querySelector("#new-ramen");
 newForm.addEventListener('submit',(event) => {
    event.preventDefault();
    let new_img = document.createElement("img");
    let new_img_submit = document.querySelector("#new-image").value;
    new_img.src = new_img_submit


    let newName = document.querySelector("#new-name").value;
    let newRestaurant = document.querySelector("#new-restaurant").value;
    let newRating = document.querySelector("#new-rating").value;
    let newcomment = document.querySelector("#new-comment").value;

    ramenMenu_div.append(new_img);

    new_img.addEventListener('click', ()=>{
        handleImageClick({
            image:new_img_submit,
            name: newName,
            restaurant: newRestaurant,
            rating: newRating,
            comment: newcomment


        });
    });
    



 });
 console.log(ramenMenu_div);
 console.log(ramens[-1]);

