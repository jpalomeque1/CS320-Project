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
    public Response helloPersonalizedPost(Person person) {
        String namePattern = "^[A-Za-z]+$";
        String emailPattern = "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$";

        if (!person.getFirst().matches(namePattern) || !person.getLast().matches(namePattern)) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("First and last names must contain letters only.")
                    .build();
        }
        if (!person.getEmail().matches(emailPattern)) {
            return Response.status(Response.Status.BAD_REQUEST)
                    .entity("Email must be valid and contain a period.")
                    .build();
        }

        return Response.ok("Hello " + person.getFirst() + " " + person.getLast() +
                "! You have been added to our email list.").build();
    }

    @GET
    @Path("/names")
    @Produces(MediaType.APPLICATION_JSON)
    public List<UserName> getAllNames() {
        return UserName.listAll();
    }

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
        username.setName(updatedName.getName());
        username.persist();
        return Response.ok(username).build();
    }

    @DELETE
    @Path("/names/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Transactional
    public Response deleteName(@PathParam("id") Long id) {
        UserName username = UserName.findById(id);
        if (username == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        username.delete();
        return Response.noContent().build();
    }

    public static class Person {
        private String first;
        private String last;
        private String email;

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
