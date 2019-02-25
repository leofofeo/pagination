/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
 * Establishing global variables:
 * // Student array
 * // number of students we should see per page
 * // HTML element where content should be replaced/updated
 * // the total number of pages we should see based on number of students per page and the size of the student array
 * ***/
const students = document.querySelectorAll('.student-item');
const studentsPerPage = 10;
const ulToUpdate = document.querySelector('.student-list');
const numberOfPages = Math.ceil(students.length / studentsPerPage);



/*** 
 * showPage creates a pageRange array to mark the lower and upper bound of the student indeces that should be displayed using the number of students per page and the selected page based on the currently selected page (e.g., page 4 should only show students whose indeces are 30-39).
 * 
 * The ul element is then reset, and we iterate through the students array, appending only the students whose indeces fall within the pageRange boundaries established
 * */ 
const showPage = (selectedPage) => {
   markCurrentPageAsActive(selectedPage);
   selectedPage = parseInt(selectedPage);
   const pageRange = [(studentsPerPage * selectedPage) - 10 , (studentsPerPage * selectedPage) - 1];

   ulToUpdate.innerHTML = '';

   students.forEach((student, index) => {
      if (index >= pageRange[0] && index <= pageRange[1]) {
         ulToUpdate.append(student);
      }
   })
}

/*** 
  appendPageLinks creates a ul of the number of li's necessary for the number of pages (based on the global variable calculation above) and then appends the required li's with the right ids and classes for use later with styling and for other functions
***/
const appendPageLinks = () => {
   const buttons = document.createElement('ul');
   buttons.className = 'btns-pagination';
   buttons.id = 'pagination-btns';
   for (let i = 1; i <= numberOfPages; i ++) {
      const listItem = document.createElement('li');
      listItem.innerHTML = i;
      listItem.id = 'button_' + i;
      listItem.className = 'pag-btn';
      buttons.append(listItem);

   }
   document.querySelector('.page').append(buttons);
}

 /*** 
  * On load, add pagination buttons to the page with appendPageLinks, and load the first batch of students by calling showPage with argument 1. Each li element crated in appendPageLinks also receives an eventListener for clicking, which in turn calls showPage and passes in the li's id so that showPage knows which student range to display
  * */
window.onload = () => {
   appendPageLinks();
   const listItems = document.getElementsByClassName('pag-btn');
   console.log(listItems);
   for (var i = 0; i < listItems.length; i++) {
      listItems[i].addEventListener('click', function(e) {
         const selectedPage = e.target.id.slice(e.target.id.length - 1);
         showPage(selectedPage);
      });
   }
   showPage(1);
}

const markCurrentPageAsActive = (currentPage) => {
   console.log(currentPage);
}
