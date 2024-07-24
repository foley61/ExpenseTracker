// Topbar.jsx
import React from 'react';
import { FaCircleUser } from 'react-icons/fa6';
import * as S from "./styles";

const Topbar = () => {
  return (
    <S.Topbar>
      <S.UserRectangle>
        <S.Username>admin</S.Username>
        <S.ProfileIcon />
      </S.UserRectangle>
    </S.Topbar>
  );
}

export default Topbar;
