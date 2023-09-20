// write your code here
 const ramens = "http://localhost:3000/ramens";
 const ramen_detail = document.querySelector("#ramen-detail");
 let ramenMenu_div = document.querySelector("#ramen-menu");

 fetch(ramens)
 .then(response => response.json())
 .then(ramens => {
    ramens.forEach(ramen => {
        getRamen(ramen, ramens);
    });
 });

 function getRamen(ramen, ramensArray){
    let ramens_array = ramensArray.indexOf(ramen);
    let ramen_img_ele = document.createElement("img");
    ramen_img_ele.src = ramen.image;
    ramenMenu_div.append(ramen_img_ele);

    ramen_img_ele.addEventListener('click',() => {
        // let detail_img = document.querySelector("#big-img");
        // detail_img.src = ramen.image;

        let imgName = document.querySelector(".name");
        imgName.textContent = ramen.name;
    
        let restaurant = document.querySelector(".restaurant");
        restaurant.textContent = ramen.restaurant;

        let rating = document.querySelector("#rating-display");
        rating.textContent = ramen.rating;

        let comment = document.querySelector("#comment-display");
        comment.textContent = ramen.comment;
    });

 }
 let newForm = document.querySelector("#new-ramen");
 newForm.addEventListener('submit',() => {
    let new_img = document.createElement("img");
    let new_img_submit = document.querySelector("#new-image").value;
    new_img.src = new_img_submit


    let newName = document.querySelector("#new-name").value;
    let newRestaurant = document.querySelector("#new-restaurant").value;
    let newRating = document.querySelector("#new-rating");
    let newcomment = document.querySelector("#new-comment");

    ramenMenu_div.append(new_img);
    



 });
 console.log(ramenMenu_div);

