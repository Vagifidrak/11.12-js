const btnBom=$("[data-btn='Add_to_card']")
    btnBom.click(function(){
        var cardParent= $(this).parents(".card")
        const product={
            image:cardParent.find(".card-img-top").attr("src"),
            namr:cardParent.find('card-title').text(),
            price:cardParent.find('card-price').text(),
            quantity:1
        }
        const modal=document.querySelector('.modal-body')
        modal.insertAdjacentHTML('beforeEnd',
        )
    })