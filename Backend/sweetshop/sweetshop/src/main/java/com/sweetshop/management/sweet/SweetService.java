package com.sweetshop.management.sweet;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SweetService {

    private final SweetRepository sweetRepository;

    public SweetService(SweetRepository sweetRepository) {
        this.sweetRepository = sweetRepository;
    }

    public Sweet addSweet(Sweet sweet) {
        return sweetRepository.save(sweet);
    }

    public List<Sweet> getAllSweets() {
        return sweetRepository.findAll();
    }

    public Sweet updateSweet(String id, Sweet updatedSweet) {
        Sweet existing = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        existing.setName(updatedSweet.getName());
        existing.setCategory(updatedSweet.getCategory());
        existing.setPrice(updatedSweet.getPrice());
        existing.setQuantity(updatedSweet.getQuantity());

        return sweetRepository.save(existing);
    }

    public void deleteSweet(String id) {
        sweetRepository.deleteById(id);
    }

    public List<Sweet> searchByName(String name) {
        return sweetRepository.findByNameContainingIgnoreCase(name);
    }

    public List<Sweet> searchByCategory(String category) {
        return sweetRepository.findByCategoryIgnoreCase(category);
    }

    public List<Sweet> searchByPriceRange(double min, double max) {
        return sweetRepository.findByPriceBetween(min, max);
    }
}
