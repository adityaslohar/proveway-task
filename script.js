
function selectProvewayRadio(element) {
   
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

    const radio = element.querySelector('.proveway-custom-radio');
    if (radio) {
        radio.classList.add('selected');
    }
    element.classList.add('proveway-prj-main-div-inner1-row2-FORActiveBTN');

  
    const selectedTable = element.querySelector('.proveway-prj-main-div-inner1-row2-col2-table-div');
    if (selectedTable) {
        selectedTable.style.display = 'block';
    }
}
