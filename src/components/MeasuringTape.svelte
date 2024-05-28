<script>
    // No specific script is needed for this basic animation
  </script>
  
  <div class="measuring-tape">
    <div class="tape"></div>
  </div>
  
  <style>
    .measuring-tape {
      overflow: hidden; /* Hide the overflowing part of the tape */
      width: 100%; /* Adjust as needed */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .tape {
      width: 500%; /* Make this long enough to animate */
      height: 25px; /* Adjust height as needed */
      background: linear-gradient(to right, #C7D5D8 20%, #86736B 20% 40%, #C7D5D8 40% 60%, #86736B 60% 80%, #C7D5D8 80% 100%);
      background-size: 100px 100%;
      animation: rollIn 3s ease-in-out forwards;
    }
  
    @keyframes rollIn {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0);
      }
    }
  </style>
  