import React, { useState } from "react"
// import "../../style/headerStyle/style.scss"
import "../../style/headerStyle/style.scss"
import "../../style/main.scss"

export default function Header(){
    const [open, setOpen] = useState(false)
    const [openNumberList, setOpenNumberList] = useState(false)
    const [numberpage, setNumberPage] = useState(false)

    function handleOpenClick (){
        setOpen(!open)
        setOpenNumberList(false)
        setNumberPage(false)
    }

    function handleOpenClickNumber(){
        setOpenNumberList(!openNumberList)
        setOpen(false)
        setNumberPage(false)
    }

    function handleClickInput(){
        setOpen(false)
        setOpenNumberList(false)
        setNumberPage(false)
    }

    function handleClickNumberPage(){
        setNumberPage(!numberpage)
        setOpenNumberList(false)   
        setOpen(false)
    }
 
    return (
        <div className="header">
           <h1 className="header-title">Pokedex</h1>
           <div className="header-property">
                <div className="header-property-left">
                     <div className="search-block">
                          <input type="text" placeholder="Search by name" onClick={handleClickInput}/>
                          <button>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="SearchIcon_svg__Searchbox_container__search_icon__czJVC"><path d="m23.111 20.058-4.977-4.977a9.767 9.767 0 0 0 1.523-5.251c0-5.42-4.409-9.83-9.829-9.83C4.408 0 0 4.41 0 9.83s4.408 9.83 9.829 9.83a9.764 9.764 0 0 0 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zM3.047 9.83c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749a7.002 7.002 0 0 0-9.922-.749z"></path></svg>
                          </button>
                     </div>   
                     <div className="filter-types width1" onClick={handleOpenClick}>
                         <div className="filter-types-header">
                            <p>All types</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={"Dropdown_dropdown__head__icon__dpKBG Dropdown_dropdown__head__icon_active__uqMmI" + (open ? " rotate" : "")}><path d="m5 3 3.057-3L20 12 8.057 24 5 21l9-9z"></path></svg>
                         </div>
                         <div className={"filter-types-info" + (open ? " open" : "")}>
                            <h1>asx</h1>
                         </div>
                     </div>
                     <div className="filter-number filter-types " onClick={handleOpenClickNumber}>
                         <div className="filter-types-header">
                            <p>Lowest to highest number</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className={"Dropdown_dropdown__head__icon__dpKBG Dropdown_dropdown__head__icon_active__uqMmI" + (openNumberList ? " rotate1" : "")}><path d="m5 3 3.057-3L20 12 8.057 24 5 21l9-9z"></path></svg>
                         </div>
                         <div className={"filter-number-info" + (openNumberList ? " open1" : "")}>
                            <h1>asx</h1>
                         </div>
                     </div>
                </div>
                <div className="header-property-right">
                       <p className="page-show-text">Show per page: </p> 
                       <div className="page-show-dropdown-block">
                            <div className={"page-show-dropdown-block-text" + (numberpage ? " box-shadow-drop" : "")} onClick={handleClickNumberPage}>
                                 <p>20</p>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class={"Dropdown_dropdown__head__icon__dpKBG Dropdown_dropdown__head__icon_active__uqMmI" + (numberpage ? " rotate2" : "")}><path d="m5 3 3.057-3L20 12 8.057 24 5 21l9-9z"></path></svg>
                            </div>
                            <div className={"page-show-dropdown-block-content" + (numberpage ? " open2" : "")}>
                                  <div className="item">
                                      <p>10</p>
                                  </div>
                                  <div className="item">
                                      <p>20</p>
                                  </div>
                                  <div className="item">
                                       <p>50</p>
                                  </div>
                            </div>
                       </div>
                </div>
           </div>
        </div>

    )
}