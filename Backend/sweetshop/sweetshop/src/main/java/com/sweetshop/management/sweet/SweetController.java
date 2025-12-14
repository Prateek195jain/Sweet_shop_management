package com.sweetshop.management.sweet;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sweets")
public class SweetController {

    private final SweetService sweetService;

    public SweetController(SweetService sweetService) {
        this.sweetService = sweetService;
    }

    // Add Sweet
    @PostMapping
    public ResponseEntity<Sweet> addSweet(@RequestBody Sweet sweet) {
        return ResponseEntity.ok(sweetService.addSweet(sweet));
    }

    // Get All Sweets
    @GetMapping
    public ResponseEntity<List<Sweet>> getAllSweets() {
        return ResponseEntity.ok(sweetService.getAllSweets());
    }

    // Update Sweet
    @PutMapping("/{id}")
    public ResponseEntity<Sweet> updateSweet(
            @PathVariable String id,
            @RequestBody Sweet sweet) {
        return ResponseEntity.ok(sweetService.updateSweet(id, sweet));
    }

    // Delete Sweet
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteSweet(@PathVariable String id) {
        sweetService.deleteSweet(id);
        return ResponseEntity.ok("Sweet deleted successfully");
    }

    // Search Sweets
    @GetMapping("/search")
    public ResponseEntity<List<Sweet>> searchSweets(
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String category,
            @RequestParam(required = false) Double minPrice,
            @RequestParam(required = false) Double maxPrice
    ) {
        if (name != null) {
            return ResponseEntity.ok(sweetService.searchByName(name));
        }
        if (category != null) {
            return ResponseEntity.ok(sweetService.searchByCategory(category));
        }
        if (minPrice != null && maxPrice != null) {
            return ResponseEntity.ok(
                    sweetService.searchByPriceRange(minPrice, maxPrice));
        }
        return ResponseEntity.badRequest().build();
    }
}
