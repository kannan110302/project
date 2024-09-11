Certificate.css
 
.work-card {
    background-color: #e6f6f3; /* Light blue background */
    border: none;
    border-radius: 15px;
    padding: 20px;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    min-width: 220px; /* Make cards shrink slightly for single row */
    max-width: 260px;
  }
  
  .shrink-card {
    margin: 0 15px; /* Adjust margin to fit the third card in the row */
  }
  
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #28a745; /* Green border around the icon */
    margin: 0 auto;
  }
  
  .work-icon {
    color: #28a745;
    font-size: 24px;
  }
  
  .underline-img {
    width: 150px;
    display: block;
    margin: 0 auto 20px;
  }
  
  p {
    font-size: 14px;
    color: #6c757d;
  }
  
  /* Wave image adjustments */
  .wave-img {
    position: absolute;
    width: 40px;
    height: 40px;
  }
  
  .wave-img-1 {
    top: -10px;
    left: -10px;
    clip-path: inset(0px 20px 20px 0px); /* Cut the wave image as per card */
  }
  
  .wave-img-2 {
    top: -10px;
    right: -10px;
    clip-path: inset(0px 0px 20px 20px); /* Cut the wave image */
  }
  
  .wave-img-3 {
    bottom: -10px;
    right: -10px;
    clip-path: inset(20px 0px 0px 20px); /* Cut the wave image */
  }
  
  /* Arrow adjustments */
  .arrow-container {
    text-align: center;
  }
  
  .arrow-icon {
    font-size: 32px;
    color: #28a745;
  }
  
  /* Force all three cards into a single row */
  @media (min-width: 992px) {
    .row {
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
    }
  }
  
  /* Responsive card layout */
  @media (max-width: 768px) {
    .shrink-card {
      margin-bottom: 20px;
    }
  }
  
   