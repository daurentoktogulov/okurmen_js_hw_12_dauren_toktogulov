$(function () {

    function createDivElementToContainer(text, className) {
        const container = $('#container');
        const newElement = $(`<div class="${className}">${text}</div>`);
        container.append(newElement);
    }
const listitems = $('.list-item');

    listitems.each(function (index) {
        $(this).text(`item ${index}`);
    });



    const input = $('input[type="text"]');

    console.log(input.val('I love JS'));
});