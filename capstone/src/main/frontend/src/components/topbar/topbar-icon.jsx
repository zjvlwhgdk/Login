import React from "react";
import {Logout, Notifycation, OnClickProfile, Profile} from '@mui/icons-material';
// usefef 사용해보장
// fixed position 사용해서 top bar 고정시키기
//

const NotifycationIcon = ({sx}) => {
    return <Notifycation sx = {{marginRight : '10px', color: 'gray', ...sx}} />;
};

const OnClickProfileIcon = ({sx}) => {
    return <OnClickProfile sx = {{marginRight : '10px', color: 'gray', ...sx}} />;
}

// profileIcon을 눌러야 (프로필, 로그아웃)이 뜨도록 한다.

const ProfileIcon = ({sx}) => {
    // 프로필 아이콘
    // 근데 onClickProfileIcon을 눌렀을 때 아이콘이 뜨는게 아니라 그냥 한글로 "프로필", "로그아웃" 이렇게 뜨는거 어찌 생각하는가
    return <Profile sx = {{marginRight : '10px', color: 'gray', ...sx}} />;
}

const LogoutIcon = ({sx}) => {
    return <Logout sx = {{marginRight : '10px', color: 'gray', ...sx}} />;
}


