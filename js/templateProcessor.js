class TemplateProcessor 
{
    render(view) 
    {
        const rootNode = document.getElementById('main-container');
        rootNode.innerHTML = view;
    }
}

export default TemplateProcessor;
