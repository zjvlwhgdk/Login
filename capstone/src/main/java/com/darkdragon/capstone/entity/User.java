package com.darkdragon.capstone.entity;

import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column
    private String email;
    @Column
    private String password;
    @Column
    private String userName;
    @Column
    private String birth;
    @Column
    private String nickName;

    public long getUserId() {
        return userId;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return userName;
    }

    public String getBirth() {
        return birth;
    }

    public String getNickName() {
        return nickName;
    }

    public User(){};

    public User(String email, String password, String userName, String birth, String nickName) {
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.birth = birth;
        this.nickName = nickName;
    }
}

