// Sidebar.jsx
import React from "react";
import * as S from "./styles";

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
const Sidebar = () => {
  const { logout } = useContext(AuthContext);



  return (
    <>
   

      {/* Sidebar Container */}
      <S.SidebarContainer >
        <S.SidebarHeader>
          <a href="/dashboard">Home</a>
        </S.SidebarHeader>
        <S.SidebarNav>
          <S.SidebarLink to="incomes" >
            <i className="icon"></i>Incomes
          </S.SidebarLink>
          <S.SidebarLink to="expenses" >
            <i className="icon"></i>Expenses
          </S.SidebarLink>
          <S.SidebarLink to="addincome" >
            <i className="icon"></i> Add Income
          </S.SidebarLink>
          <S.SidebarLink to="addexpense" >
            <i className="icon"></i> Add Expense
          </S.SidebarLink>
          <S.SidebarLink to="/" onClick={() => {  logout(); }}>
            <i className="icon"></i> logout
          </S.SidebarLink>
        </S.SidebarNav>
      </S.SidebarContainer>
    </>
  );
};

export default Sidebar;
