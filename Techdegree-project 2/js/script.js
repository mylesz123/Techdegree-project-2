/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
const list = document.querySelectorAll('.student-item'); //not getElementsByClassName('className')

function showPage(list, page){//dont need to have var for page
      for(var i = 0; i < list.length; i += 1){
        console.log(list.length);
        if(i >= (page * 10) - 10 && i < (page * 10)) {
          list[i].style.display = 'block';
        } else {
          list[i].style.display = 'none';

        }
      }
    };
/* based on the number if recods in the index you can change that number 1-6 therefore you will need to find a way to
 * increase and decrease based on the page you want (maybe controlled by a global variable that can be changed based on a click event)
*/
    showPage(list, 1);

function appendPageLinks(list) {
  // Add functionality to the pagination buttons so that they show and hide the correct items
  // Tip: If you created a function above to show/hide list items, it could be helpful here

const pageNumber = Math.max(list.length / 10);  //the total number of students divided by the max number of students on each page and rounded up.
let ul = document.createElement( "ul" );//new UL to display buttons, might have to add css class...

let li = document.createElement('li');
//const a = document.createElement('a')

const pageDiv = document.createElement('div');//making div for page links <a></a>
  pageDiv.className = 'pagination';
  $(pageDiv).appendTo('.page');//appending div dynaically to page
  $(pageDiv).append(ul);//apnd to div

for(var i = 0; i < pageNumber; i += 1) {// trying to loop through all list items
  const li = document.createElement('li');
    ul.appendChild(li);
  const a = document.createElement('a');//  a.className = 'numberLinks';
    a.textContent = i + 1;
    li.appendChild(a);

a.addEventListener('click', (e)=>{
  const currentPage = document.getElementsByClassName('active');
  currentPage.className = 'active';
    console.log(e.target);
    console.log(currentPage);
  if(e.target.className = 'active'){
    showPage(list, e.target.textContent);
    e.target.classList.remove('active');
  }
  else {
    showPage(list, currentPage);
    }
  });
};

};
/*
function searchBar(){ //Search feature
const searchDiv = document.createElement('div');
searchDiv.className = 'student-search';
  $(searchDiv).appendTo('.page');
let input = document.createElement('input');
  input.type = 'text';
  $(input).appendTo(searchDiv);
let searchButton = document.createElement('button');
  $(searchButton).appendTo(searchDiv);

};
*/



appendPageLinks(list);
