package com.example.demo.service;

import com.example.demo.model.LostFoundItem;
import com.example.demo.repository.LostFoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LostFoundService {

    @Autowired
    private LostFoundRepository lostFoundRepository;

    // Report a new lost/found item
    public LostFoundItem reportItem(LostFoundItem item) {
        return lostFoundRepository.save(item);
    }

    // List every item, regardless of status
    public List<LostFoundItem> getAllItems() {
        return lostFoundRepository.findAll();
    }

    // List items filtered by status (LOST or FOUND)
    public List<LostFoundItem> getItemsByStatus(LostFoundItem.Status status) {
        return lostFoundRepository.findByStatus(status);
    }
}
