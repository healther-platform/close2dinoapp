package com.example.close2dinoappapi.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;

import com.example.close2dinoappapi.entities.Faq;
import com.example.close2dinoappapi.entities.Glossary;


@Repository
public interface FaqRepository extends JpaRepository<Faq, Integer> {
    
}
