package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "lost_found_items")
public class LostFoundItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String itemName;

    @Column(length = 1000)
    private String description;

    @Column(nullable = false)
    private String location;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Status status;

    @ManyToOne
    @JoinColumn(name = "reported_by_user_id", nullable = false)
    private User reportedBy;

    public enum Status {
        LOST,
        FOUND
    }

    // --- Constructors ---

    public LostFoundItem() {
        // JPA requires a no-args constructor
    }

    public LostFoundItem(String itemName, String description, String location, Status status, User reportedBy) {
        this.itemName = itemName;
        this.description = description;
        this.location = location;
        this.status = status;
        this.reportedBy = reportedBy;
    }

    // --- Getters and Setters ---

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public User getReportedBy() {
        return reportedBy;
    }

    public void setReportedBy(User reportedBy) {
        this.reportedBy = reportedBy;
    }
}