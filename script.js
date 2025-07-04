// function selectProvewayRadio(element) {
//     // Remove .selected from all radio buttons
//     document.querySelectorAll('.proveway-custom-radio').forEach(radio => {
//       radio.classList.remove('selected');
//       div.querySelector('.proveway-prj-main-div-inner1-row2').classList.remove('proveway-prj-main-div-inner1-row2-FORActiveBTN');
//     });

//     // Find the custom radio inside the clicked container and add .selected
//     const radio = element.querySelector('.proveway-custom-radio');
//     if (radio) {
//       radio.classList.add('selected');

//       div.querySelector('.proveway-prj-main-div-inner1-row2').classList.add('proveway-prj-main-div-inner1-row2-FORActiveBTN');
//     }
//   }


function selectProvewayRadio(element) {
    // Remove selected class from all cards and radios
    document.querySelectorAll('.proveway-prj-main-div-inner1-row2, .proveway-prj-main-div-inner1-row2-signle-txt').forEach(div => {
        div.classList.remove('proveway-prj-main-div-inner1-row2-FORActiveBTN');
        const radio = div.querySelector('.proveway-custom-radio');
        if (radio) {
            radio.classList.remove('selected');
        }

        const tableDiv = div.querySelector('.proveway-prj-main-div-inner1-row2-col2-table-div');
        if (tableDiv) {
            tableDiv.style.display = 'none';
        }
    });


    // Add selected class to the clicked one
    const radio = element.querySelector('.proveway-custom-radio');
    if (radio) {
        radio.classList.add('selected');
    }
    element.classList.add('proveway-prj-main-div-inner1-row2-FORActiveBTN');

    // Show table inside clicked div
    const selectedTable = element.querySelector('.proveway-prj-main-div-inner1-row2-col2-table-div');
    if (selectedTable) {
        selectedTable.style.display = 'block';
    }
}
