package com.sweetshop.management.inventory;

import com.sweetshop.management.sweet.Sweet;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/sweets")
public class InventoryController {

    private final InventoryService inventoryService;

    public InventoryController(InventoryService inventoryService) {
        this.inventoryService = inventoryService;
    }

    @PostMapping("/{id}/purchase")
    public ResponseEntity<Sweet> purchaseSweet(
            @PathVariable String id,
            @RequestParam int quantity) {
        return ResponseEntity.ok(
                inventoryService.purchaseSweet(id, quantity));
    }

    @PostMapping("/{id}/restock")
    public ResponseEntity<Sweet> restockSweet(
            @PathVariable String id,
            @RequestParam int quantity) {
        return ResponseEntity.ok(
                inventoryService.restockSweet(id, quantity));
    }
}
