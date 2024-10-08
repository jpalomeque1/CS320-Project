package org.acme;

import jakarta.transaction.Transactional;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/personalized/{name}")
    @Transactional
    public String helloPersonalized(@PathParam("name") String name) {
        UserName username = new UserName(name);
        username.persist();
        return "Hello " + name + "! Your name has been stored in the database.";
    }

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/personalized")
    public String helloPersonalizedPost(Person one) {
        return "Hello " + one.getFirst() + " " + one.getLast();
    }

    // READ: Get a list of all names
    @GET
    @Path("/names")
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserName> getAllNames() {
        return UserName.listAll(); // Assuming you have a method to list all usernames
    }

    // READ: Get a specific name by ID
    @GET
    @Path("/names/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getNameById(@PathParam("id") Long id) {
        UserName username = UserName.findById(id);
        if (username == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        return Response.ok(username).build();
    }

    // UPDATE: Update a name by ID
    @PATCH
    @Path("/names/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Transactional
    public Response updateName(@PathParam("id") Long id, UserName updatedName) {
        UserName username = UserName.findById(id);
        if (username == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        username.setName(updatedName.getName()); // Ensure this method exists in UserName
        username.persist(); // Persist the changes
        return Response.ok(username).build();
    }

    // DELETE: Remove a name by ID
    @DELETE
    @Path("/names/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response deleteName(@PathParam("id") Long id) {
        UserName username = UserName.findById(id);
        if (username == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        username.delete(); // Delete the entity
        return Response.noContent().build(); // Return 204 No Content
    }

    // Person class as an inner class
    public static class Person {
        private String first;
        private String last;

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
    }
}
