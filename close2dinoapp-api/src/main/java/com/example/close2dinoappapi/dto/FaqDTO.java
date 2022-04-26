package com.example.close2dinoappapi.dto;

import java.io.Serializable;

import com.example.close2dinoappapi.entities.Faq;
import com.example.close2dinoappapi.entities.Glossary;

public class FaqDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private long id;
    private String title;
    private String content;

    public FaqDTO(Faq faq) {
        id = faq.getId();
        title = faq.getTitle();
        content = faq.getContent();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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
