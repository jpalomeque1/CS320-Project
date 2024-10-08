package org.acme;

import io.quarkus.hibernate.orm.panache.PanacheEntity; // Import for PanacheEntity
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table (name = "user_names")
public class UserName extends PanacheEntity { // Extending PanacheEntity

    public String name; // Field to store the user's name

    // Default constructor
    public UserName() {}

    // Constructor with name
    public UserName(String name) {
        this.name = name;
    }

    // Getter for name
    public String getName() {
        return name;
    }

    // Setter for name
    public void setName(String name) {
        this.name = name;
    }
}
