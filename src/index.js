 $(document).ready(function() {
    let inputData = $(".inputData");
    // let addBtn = $(".addBtn");
    // let delBtn = $(".delBtn");
    let listItem = $(".area2 ul");
    // let inputText = $(".text");
    
    $(document).on('click', ".modifyBtn", function(e){
        console.log('수정 버튼');
        $(this).parents('li').addClass('modify');
        let thisText = $(this).parents('li').find('.text');
        let textBefore = thisText.text();
        thisText.html("<input type='text' class='modifyText' value='"+textBefore+"' />")
        $(this).parents('li').find('.modifyText').focus();
    });
    $(document).on('click', ".completbtn", function(e){
        console.log('완료 버튼');
        $(this).parents('li').removeClass('modify');
        let textAfter = $(this).parents('li').find('.modifyText').val();
        $(this).parents('li').find('span').html(textAfter);
    });
    $(document).on('click', ".delBtn", function(e){
        console.log('삭제 버튼');
        let prentLi = $(this).parents('li');
        prentLi.remove();
    });

    $(document).on('click', ".addBtn", function(e){
        let inputD = inputData.val();
        // listItem.append('<li>'+ inputD +'<div><button class="delBtn">삭제</button></div></li>');
        listItem.append(`<li>
                            <span class="text">${inputD}</span>
                            <div>
                                <button class="delBtn">삭제</button>
                                <button class="modifyBtn">수정</button>
                                <button class="completbtn">완료</button>
                            </div>
                        </li>`);
        inputData.val('');
    })
});