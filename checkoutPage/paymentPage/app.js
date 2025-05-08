// copy address
const copyText = document.getElementById('AddressText');
const copyBtn = document.getElementById('copyBTN');
const Body = document.getElementById('bodiD');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent)
    .then(() => {
        const copiedPopup = document.createElement('div');
        copiedPopup.textContent = 'Address Copied';
        copiedPopup.classList.add('showCopy');
        Body.appendChild(copiedPopup);
        console.log(copiedPopup);

        setTimeout(() => {
          Body.removeChild(copiedPopup);
        }, 3000);
        
        
        console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Error copying text:', error);
    });
});

// copy address 2 bank
const copyText2 = document.getElementById('AddressText2');
const copyBtn2 = document.getElementById('copyBTN2');

copyBtn2.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText2.textContent)
    .then(() => {
        const copiedPopup2 = document.createElement('div');
        copiedPopup2.textContent = 'Account no. Copied';
        copiedPopup2.classList.add('showCopy');
        Body.appendChild(copiedPopup2);
        console.log(copiedPopup2);

        setTimeout(() => {
          Body.removeChild(copiedPopup2);
        }, 3000);
        
        console.log('Text copied to clipboard');
    })
    .catch((error) => {
      console.error('Error copying text:', error);
    });
});

// Show Lists 1
const LiBoard = document.querySelectorAll('.liss:not(#showList):not(#hideList)');
const dropdown = document.getElementById('showList');
const closeDown = document.getElementById('hideList');

dropdown.addEventListener('click', showListFunct);
closeDown.addEventListener('click', hideListFunct);

function showListFunct() {
  LiBoard.forEach((li) => li.classList.add('ShowLi1'));
  closeDown.style.display = 'block';
  dropdown.style.display = 'none';
}

function hideListFunct() {
  LiBoard.forEach((li) => li.classList.remove('ShowLi1'));
  closeDown.style.display = 'none';
  dropdown.style.display = 'block';
}

// Show Lists 2
const LiBoard2 = document.querySelectorAll('.liss2:not(#showList2):not(#hideList2)');
const dropdown2 = document.getElementById('showList2');
const closeDown2 = document.getElementById('hideList2');

dropdown2.addEventListener('click', showListFunct2);
closeDown2.addEventListener('click', hideListFunct2);

function showListFunct2() {
  LiBoard2.forEach((li) => li.classList.add('ShowLi12'));
  closeDown2.style.display = 'block';
  dropdown2.style.display = 'none';
}

function hideListFunct2() {
  LiBoard2.forEach((li) => li.classList.remove('ShowLi12'));
  closeDown2.style.display = 'none';
  dropdown2.style.display = 'block';
}