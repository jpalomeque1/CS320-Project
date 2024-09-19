package org.acme;

import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;

@Path("/hello")
public class GreetingResource {

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello RESTEasy";
    }

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    @Path("personalized/{name}")
    public String helloPersonalized(@PathParam("name")String name) {return "hello " + name;}

    @POST
    @Produces(MediaType.TEXT_PLAIN)
    @Path("/personalized")
    public String helloPersonalizedPost(person one) {
        return "hello " + one.getFirst() +" " + one.getLast();
    }

    public static class person{
        private String first;
        private String last;
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
