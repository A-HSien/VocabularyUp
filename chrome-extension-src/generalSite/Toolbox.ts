
const toolboxId = `toolbox-${Date.now()}`;
const toolboxStyles = {
    position: 'fixed',
    display: 'none',
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#8c8c8c',
    fontWeight: '300',
    fontSize: '12px',
    padding: '2px',
    border: '1px solid #e4e4e4',
    borderRadius: '3px',
    zIndex: '999',
} as CSSStyleDeclaration;

export const getToolbox = () => {
    let toolbox = document.getElementById(toolboxId);
    if (toolbox) return toolbox;
    toolbox = document.createElement("div");
    Object.assign(toolbox.style, toolboxStyles);

    toolbox.id = toolboxId;
    toolbox.innerHTML = '<a><i class="icon-search"></i><span></span></a>';

    document.body.appendChild(toolbox);
    return toolbox;
};