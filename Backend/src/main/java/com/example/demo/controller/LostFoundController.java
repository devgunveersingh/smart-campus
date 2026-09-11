package com.example.demo.controller;

import com.example.demo.model.LostFoundItem;
import com.example.demo.service.LostFoundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/lostfound")
public class LostFoundController {

    @Autowired
    private LostFoundService lostFoundService;

    // POST /api/lostfound  -> report a new item
    @PostMapping
    public LostFoundItem reportItem(@RequestBody LostFoundItem item) {
        return lostFoundService.reportItem(item);
    }

    // GET /api/lostfound  -> list all items
    @GetMapping
    public List<LostFoundItem> getAllItems() {
        return lostFoundService.getAllItems();
    }

    // GET /api/lostfound/status/{status}  -> list items filtered by LOST or FOUND
    @GetMapping("/status/{status}")
    public List<LostFoundItem> getItemsByStatus(@PathVariable LostFoundItem.Status status) {
        return lostFoundService.getItemsByStatus(status);
    }
}
