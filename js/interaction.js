const scrolling = () => 
{
    let up_btn = document.getElementById("up-button");

    if (document.documentElement.scrollTop > 400) 
            up_btn.style.opacity = 0.75;
    else    up_btn.style.opacity = 0;
}

const goUp = () => 
{
    document.documentElement.scrollTop = 0;
}

let slideIndex = 0;

const getSlideIndex = () =>
{
  return slideIndex;
}

const moveSlide = (n) =>
{
  showSlides(slideIndex += n);
}

const setSlide = (n) => 
{
  showSlides(slideIndex = n);
}

const showSlides = (n) => 
{
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length - 1) 
        slideIndex = 0;
  if (n < 0) 
        slideIndex = slides.length-1;

  for (let i = 0; i < slides.length; i++) 
      slides[i].style.display = "none";
  for (let i = 0; i < dots.length; i++) 
      dots[i].className = dots[i].className.replace(" active", "");

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}

export {
    scrolling,
    goUp,
    moveSlide,
    setSlide,
    showSlides,
    getSlideIndex
}