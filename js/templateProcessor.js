class TemplateProcessor 
{
    render(view) 
    {
        const rootNode = document.getElementById('main-container');
        rootNode.innerHTML = view;
        window.scrollTo(0,0);
    }
}

export default TemplateProcessor;
