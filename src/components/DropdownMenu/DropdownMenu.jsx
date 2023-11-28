import '../../assets/fonts.css';
import './DropwdownMenu.css';
import DropdownArrow from '../../assets/icons/keyboard_arrow_down.svg?react';
import DropwdownMenuItems from './DropwdownMenuItems';


function DropwdownMenu() {

  function displayItems() {
    
    var lisItems = document.getElementsByClassName("dropDownMenu-listItems")[0];

    
    if (window.getComputedStyle(lisItems).display === "none"){
      lisItems.style.display = "block";
    } else {
      lisItems.style.display = "none";
    }
  };

  return (
    <div>
      <div className='dropDownMenu' onClick={displayItems}>
        <span className='dropDownMenu-title'>Menu 1</span><DropdownArrow className='dropdownArrow'></DropdownArrow>
      </div>
      <DropwdownMenuItems></DropwdownMenuItems>
    </div>
  );
}

export default DropwdownMenu;