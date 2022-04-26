package com.example.close2dinoappapi.controllers;


import lombok.AllArgsConstructor;

import java.util.List;

import com.example.close2dinoappapi.dto.GlossaryDTO;
import com.example.close2dinoappapi.entities.Glossary;
import com.example.close2dinoappapi.services.GlossaryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.cors.CorsConfiguration;


@RestController
@AllArgsConstructor
@CrossOrigin(
        origins = CorsConfiguration.ALL,
        methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE}
)
public class GlossaryController {
    
    @Autowired
    private GlossaryService glossaryService;

    @GetMapping("/glossary")
    public ResponseEntity<List<GlossaryDTO>> getAll() {
        List<GlossaryDTO> glossary = glossaryService.getAll();

        return ResponseEntity.ok().body(glossary);
    }
}
