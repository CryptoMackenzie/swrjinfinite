import React from "react";

function Features1() {
  const sliderContainer = document.querySelector(".slider-container");
  const sliderRight = document.querySelector(".right-slide");
  const sliderLeft = document.querySelector(".left-slide");
  const upButton = document.querySelector(".up-button");
  const DownButton = document.querySelector(".down-button");
  const slidesLength = sliderRight.querySelectorAll("div").length;

  let activeSlideIndex = 0;

  sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

  upButton.addEventListener("click", () => changeSlide("up"));
  DownButton.addEventListener("click", () => changeSlide("down"));

  const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if (direction == "up") {
      activeSlideIndex++;
      if (activeSlideIndex > slidesLength - 1) {
        activeSlideIndex = 0;
      }
    } else if ((direction = "down")) {
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesLength - 1;
      }
    }

    sliderRight.style.transform = `translateY(-${
      activeSlideIndex * sliderHeight
    }px)`;
    sliderLeft.style.transform = `translateY(${
      activeSlideIndex * sliderHeight
    }px)`;
  };
  return (
    <div className="w-full h-full">
      <div class="slider-container">
        <div class="left-slide">
          <div style="background-color: #FD3555;">
            <h1>Nature flower</h1>
            <p>all in pink</p>
          </div>
          <div style="background-color: #2A86BA;">
            <h1>Blue Sky</h1>
            <p>With its mountains</p>
          </div>
          <div style="background-color: #252e33;">
            <h1>Lonely Castle</h1>
            <p>in the wilderness</p>
          </div>
          <div style="background-color: #ffb866;">
            <h1>Flying eagle</h1>
            <p>in the sunset</p>
          </div>
        </div>
        <div class="right-slide">
          <div style="background-image: url('https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwZmxvd2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"></div>
          <div style="background-image: url('https://images.unsplash.com/photo-1549608276-5786777e6587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"></div>
          <div style="background-image: url('https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2t5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"></div>
          <div style="background-image: url('https://images.unsplash.com/photo-1518704267117-e9278b163f14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9uZWx5JTIwY2FzdGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');"></div>
        </div>
        <div class="action-buttons">
          <button class="down-button">
            <i class="fas fa-arrow-down"></i>
          </button>
          <button class="up-button">
            <i class="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features1;
