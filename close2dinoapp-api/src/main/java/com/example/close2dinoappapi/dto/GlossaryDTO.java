package com.example.close2dinoappapi.dto;

import java.io.Serializable;

import com.example.close2dinoappapi.entities.Glossary;

public class GlossaryDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private long id;
    private String name;
    private String description;
    private String type;
    private String content;

    public GlossaryDTO(Glossary glossary) {
        id = glossary.getId();
        name = glossary.getName();
        description = glossary.getDescription();
        type = glossary.getType();
        content = glossary.getContent();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
    
    
}
