# Event Guest List Manager

A dynamic web application for managing event RSVPs with real-time interactivity.

## Project Structure

- `index.html`: Main HTML layout  
- `src/index.js`: JavaScript logic  
- `style.css`: Styling and visuals  

## Features

 Users can input a guest's name  
 Clicking "Submit" adds the guest to the list  
 Guest names appear dynamically on the page  
 Each guest has a Remove button to delete them  
 Guest list is limited to 10 entries—alerts if limit is exceeded  
 RSVP toggle: guests can be marked as "Attending" or "Not Attending"  

## Stretch Features

- Tag guests as Friend, Family, or Colleague (color-coded)  
- Display the exact time a guest was added  

## How to Run

1. Clone or download the repository  
2. Open `index.html` in your browser  
3. Use the form to add and manage guests  

## Code

## Html

    <body>
        <div class="container">
            <h2 class="heading-1">Welcome To My Graduation Event  <i class="fa-solid fa-graduation-cap"></i></h2>
            <p>Add your name to the list and select rsvp</p>

            <form id="guestForm">
        
                <label label ="username">Guest Name:</label>
                <input type="text" id="username" name="username" value="" required>
            
            <button type="submit" id="add-guest">Add Guest</button>
            
            </form>
            <div class="conatine-list">
                <h2 class="heading-2">Guest List</h2>
                <ol id="guestList"></ol>
            </div>
        </div>
        <script src="./index.js"></script>
    </body>
## Author
The project was crafted by Newton Ongeri  having  html ,css and js to explore the dom manipulation

##License
## 📄 License

This project is licensed under the licensed board

Copyright © 2025 Newton


