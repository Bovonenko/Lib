import './lib/lib';
import $ from './lib/lib';

// $('.active').setAttr('data-test', 'value-2');

$('button').on('click', function() {
    $('div').eq(2).toggleClass('active');
});

$('div').click(function() {
    console.log($(this).index());
});

console.log($('.more'));

console.log($('.more').sibling());

// console.log($('div').eq(2).find('.some'));

// console.log($('.some').closest('.findmeq'));


// console.log($('.active').getAttr('data-test'));

// console.log($('button').html('Hello'));