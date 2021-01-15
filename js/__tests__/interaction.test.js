/* eslint-env jest */
import {moveSlide, setSlide, showSlides, getSlideIndex} from '../interaction.js';

describe('Interaction Module', () => {
    it('should control the slideshow', () => {

        // const scrollTop = jest.fn();
        // Object.defineProperty(document.documentElement, 'scrollTop', {
        //     value: scrollTop,
        // });
        //let document.documentElement.scrollTop;

        //expect(scrollTop).toHaveBeenCalledWith(0,0);
        document.body.innerHTML =
        `
    <div class="offer">
        <div class = "slideshow">
            <a class = "slide fade" href = "#offer/h">
                <div class = "numbertext">1 / 3</div>
            </a>
    
            <a class="slide fade" href = "#offer/h">
                <div class = "numbertext">2 / 3</div>
            </a>
    
            <a class="slide fade" href = "#offer/h">
                <div class = "numbertext">3 / 3</div>
            </a>

            <a class = "prev" id = "prev">&#10094;</a>
            <a class = "next" id = "next">&#10095;</a>
        </div>
    </div>
    <br>
    <div class = "dot-pagination">
        <span class = "dot"></span>
        <span class = "dot"></span>
        <span class = "dot"></span>
    </div>`;
        //const scrollTop = jest.fn();
        //Object.defineProperty(global.document, 'documentElement.scrollTop', { value: scrollTop });
        //const mockEl = document.createElement('div')
        //mockEl.style.display = 'flex';
        //mockEl.className = 'slide';
        //const mockEl2 = document.createElement('div')
        //mockEl2.style.display = 'flex';
        //mockEl2.className = 'slide';
        //let slideIndex = getSlideIndex();
        
        expect(getSlideIndex()).toBe(0);
        
        showSlides(getSlideIndex());
        
        moveSlide(1);
        expect(getSlideIndex()).toBe(1);

        setSlide(2)
        expect(getSlideIndex()).toBe(2);

        showSlides(100);
        expect(getSlideIndex()).toBe(0);

        showSlides(-1);
        expect(getSlideIndex()).toBe(2);
        //expect(goUp).toHaveBeenCalled()
        
    });
    // it('should control slideshow', () => {
        

    // });
});
