package com.darkdragon.capstone.service;

import com.darkdragon.capstone.dto.UserDto;

public interface UserLogIn {
    boolean logIn(UserDto userDto);
}