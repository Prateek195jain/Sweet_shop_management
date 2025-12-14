package com.sweetshop.management.sweet;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sweets")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sweet {

    @Id
    private String id;

    private String name;
    private String category;
    private double price;
    private int quantity;
}
