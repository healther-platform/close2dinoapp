package com.example.close2dinoappapi.dto;

import java.io.Serializable;

import com.example.close2dinoappapi.entities.Faq;
import com.example.close2dinoappapi.entities.Glossary;

public class FaqNewDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String title;
    private String content;

    public FaqNewDTO(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
