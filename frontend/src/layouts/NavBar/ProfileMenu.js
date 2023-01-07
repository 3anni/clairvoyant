
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import Button from "../../components/Button";
import * as sessionActions from '../../store/session';

import { ReactComponent as ProfileIcon } from '../../assets/svg/profile.svg'
import MenuListItem from "./MenuItem";

function ProfileMenu({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  console.count('ProfileMenu');
  console.log(user);
  // debugger;
  return (
    <>
      <Button className="nav-btn" onClick={openMenu}>
        <ProfileIcon className="icon profile"/>
      </Button>
      {showMenu && (
        <div className="profile-dropdown">
          <MenuListItem>{user.name}</MenuListItem>
          <MenuListItem>{user.email}</MenuListItem>
          {/* <li>{user.username}</li> */}
          {/* <li>{user.email}</li> */}
          <li>
            <Button onClick={logout}>Log Out</Button>
          </li>
        </div>
    )}
    </>
  );
}

export default ProfileMenu;
