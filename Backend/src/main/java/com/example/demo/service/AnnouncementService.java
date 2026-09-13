package com.example.demo.service;

import com.example.demo.model.Announcement;
import com.example.demo.repository.AnnouncementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnouncementService {

    @Autowired
    private AnnouncementRepository announcementRepository;

    public Announcement create(Announcement announcement) {
        return announcementRepository.save(announcement);
    }

    public List<Announcement> getAll() {
        return announcementRepository.findAll();
    }
}