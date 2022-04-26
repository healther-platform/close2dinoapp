package com.example.close2dinoappapi.services;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.example.close2dinoappapi.dto.GlossaryDTO;
import com.example.close2dinoappapi.entities.Glossary;
import com.example.close2dinoappapi.repositories.GlossaryRepository;

@Service
@AllArgsConstructor
public class GlossaryService {
    
    @Autowired
    private GlossaryRepository glossaryRepository;

    public List<GlossaryDTO> getAll() {
       

        return glossaryRepository.findAll().stream().map(GlossaryDTO::new).collect(Collectors.toList());
    }
}
