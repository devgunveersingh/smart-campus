package com.example.demo.controller;

import com.example.demo.model.Announcement;
import com.example.demo.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {

    @Autowired
    private AnnouncementService announcementService;

    @PostMapping
    public Announcement create(@RequestBody Announcement announcement) {
        return announcementService.create(announcement);
    }

    @GetMapping
    public List<Announcement> getAll() {
        return announcementService.getAll();
    }
}