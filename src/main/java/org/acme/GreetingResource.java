package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/hello")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class GreetingResource {

    @POST
    @Path("/personalized")
    @Transactional
    public Response helloPersonalizedPost(Person person) {
        // Validate first and last names
        if (person.getFirst() == null || person.getFirst().isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("First name is required.").build();
        }
        if (person.getLast() == null || person.getLast().isEmpty()) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Last name is required.").build();
        }

        // Validate email format
        if (person.getEmail() == null || !person.getEmail().matches("^[A-Za-z0-9+_.-]+@(.+)$")) {
            return Response.status(Response.Status.BAD_REQUEST).entity("Please provide a valid email address.").build();
        }

        // Successful response
        String responseMessage = "Hello " + person.getFirst() + " " + person.getLast() + "! You have been added to our email list.";
        return Response.ok(responseMessage).build();
    }

    // Other endpoints as in your original file...

    // Person class as an inner class
    public static class Person {
        private String first;
        private String last;
        private String email;

        // Getters and Setters
        public String getFirst() {
            return first;
        }

        public void setFirst(String first) {
            this.first = first;
        }

        public String getLast() {
            return last;
        }

        public void setLast(String last) {
            this.last = last;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }
}
