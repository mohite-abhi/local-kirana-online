import React from 'react';
import './footer.css';




export default function footer() {
    return(
        <section className="team">
      <h2 className="section-heading">Made with  &hearts;  by</h2>
      <div className="container">
        <div className="profile">
         <a href = "https://github.com/sambit8242"><img src="https://i.ibb.co/mSDyBn7/Whats-App-Image-2021-07-31-at-16-39-02-1.jpg" alt=""/><span className="name">Sambit</span></a>
        </div>
        <div class="profile">
          <a href = "https://github.com/nayaksura"><img src="https://i.ibb.co/hMCPjxh/Whats-App-Image-2020-07-30-at-18-50-37.jpg" alt=""/><span class="name">Suraj</span></a>
        </div>
        <div class="profile">
         <a href="https://github.com/mohite-abhi"><img src="https://i.ibb.co/FzvTKgp/Whats-App-Image-2021-07-31-at-16-27-43-1.jpg" alt=""/><span class="name">Abhishek</span></a>
        </div>
        <div class="profile">
        <a href = "https://github.com/Manish-1301" ><img src="https://i.ibb.co/ck4Z5PW/Whats-App-Image-2021-07-31-at-16-27-17.jpg" alt=""/><span class="name">Manish</span></a>
        </div>
        <div class="profile">
         <a href="https://github.com/Krutidipt"><img src="https://i.ibb.co/p4B1Vg5/Whats-App-Image-2021-07-31-at-19-25-59-1.jpg" alt=""/><span class="name">Krutidipt</span></a>
        </div>
       
      </div>
    </section>
    );
}