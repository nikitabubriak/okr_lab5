/* eslint-env jest */
import TemplateProcessor from '../templateProcessor';

describe('TemplateProcessor Module', () => {
    it('should render views', () => {
        const scrollTo = jest.fn();
        Object.defineProperty(window, 'scrollTo', {
            value: scrollTo,
        });
        document.body.innerHTML = '<div id="main-container"></div>';
        const view = '<div>our view</div>';
        const templateProcessor = new TemplateProcessor();

        expect(document.body.innerHTML).toEqual('<div id="main-container"></div>');

        templateProcessor.render(view);
        expect(document.body.innerHTML).toEqual('<div id="main-container"><div>our view</div></div>');
        
        expect(scrollTo).toHaveBeenCalledWith(0,0);
    });
});
