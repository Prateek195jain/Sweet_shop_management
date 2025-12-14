package com.sweetshop.management.inventory;

import com.sweetshop.management.sweet.Sweet;
import com.sweetshop.management.sweet.SweetRepository;
import org.springframework.stereotype.Service;

@Service
public class InventoryService {

    private final SweetRepository sweetRepository;

    public InventoryService(SweetRepository sweetRepository) {
        this.sweetRepository = sweetRepository;
    }

    public Sweet purchaseSweet(String id, int quantity) {
        Sweet sweet = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        if (sweet.getQuantity() < quantity) {
            throw new RuntimeException("Not enough stock");
        }

        sweet.setQuantity(sweet.getQuantity() - quantity);
        return sweetRepository.save(sweet);
    }

    public Sweet restockSweet(String id, int quantity) {
        Sweet sweet = sweetRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Sweet not found"));

        sweet.setQuantity(sweet.getQuantity() + quantity);
        return sweetRepository.save(sweet);
    }
}
