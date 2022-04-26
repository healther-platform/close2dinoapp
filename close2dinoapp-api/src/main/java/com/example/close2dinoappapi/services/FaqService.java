package com.example.close2dinoappapi.services;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import com.example.close2dinoappapi.dto.FaqDTO;
import com.example.close2dinoappapi.dto.FaqNewDTO;
import com.example.close2dinoappapi.dto.GlossaryDTO;
import com.example.close2dinoappapi.entities.Faq;
import com.example.close2dinoappapi.entities.Glossary;
import com.example.close2dinoappapi.repositories.FaqRepository;

@Service
@AllArgsConstructor
public class FaqService {
    
    @Autowired
    private FaqRepository faqRepository;

    public List<FaqDTO> getAll() {
        return faqRepository.findAll().stream().map(FaqDTO::new).collect(Collectors.toList());
    }

    public void insert(FaqNewDTO faq) {
        faqRepository.save(new Faq(null, faq.getTitle(), faq.getContent()));
    }
}
