package com.darkdragon.capstone.service;

import com.darkdragon.capstone.dto.UserDto;
import com.darkdragon.capstone.entity.User;
import com.darkdragon.capstone.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserJoinImpl implements UserJoin {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    @Autowired
    public UserJoinImpl(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public boolean join(UserDto userDto) {
        if(userRepository.existsByEmail(userDto.getEmail())) {
            return false;
        }
        else {
            String encryptedPassword = passwordEncoder.encode(userDto.getPassword());
            userRepository.save(toUserEntity(userDto));
            userDto.setPassword(encryptedPassword);
            return true;
        }
    }

    @Override
    public boolean checkUser(String email) {
        return !userRepository.existsByEmail(email);//이메일이 존재하면 false
    }


    private User toUserEntity(UserDto userDto) {
        return new User(
                userDto.getEmail(),
                userDto.getPassword(),
                userDto.getUserName(),
                userDto.getBirth(),
                userDto.getNickName()
        );
    }
}
