# HacktivPress
HacktivPress is a site where you can read blogs posted by users. You can sort the blogs based on authors and category; it can be read without signing up!
However, to add or edit a blog post, you would need to create an account.

# How to access 
You just have to access your localhost [like such](http://localhost:8080/), to read all blog posts created by our users (Please activate the server first). 
To edit or add a blog, you would have to sign in first. 
Don't have an account? Don't worry, you can sign up for free!

## End Points

- Homepage, where all blog posts are shown : "/" dengan method: GET
       
- Sign in: "/signin" dengan method: POST
       
- Register: "/signup" dengan method: POST
       
- Add Post: "/addNew" dengan method: POST
       
- Edit Post: "/:id/edit" dengan method: PUT
       
- Delete Post: "/:id/delete" dengan method: DELETE
    
- Get All Posts: "/" dengan method: GET

- Find Post by Author (through author id): "/find/:id" dengan method: GET

- Find Post by Category: "/find?category=categoryName" dengan method: GET

 