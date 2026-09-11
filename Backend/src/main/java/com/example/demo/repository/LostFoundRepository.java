package com.example.demo.repository;

import com.example.demo.model.LostFoundItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LostFoundRepository extends JpaRepository<LostFoundItem, Integer> {

    // Custom finder: JPA generates the SQL for this automatically
    // just from the method name — no @Query needed.
    java.util.List<LostFoundItem> findByStatus(LostFoundItem.Status status);
}
