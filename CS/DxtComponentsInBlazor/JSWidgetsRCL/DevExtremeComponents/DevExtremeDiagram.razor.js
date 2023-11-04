export async function initializeDiagram(element, datasource) {
    const value = !!datasource ? datasource.mean : null;
    const subValues = !!datasource ? [datasource.min, datasource.max] : [];

    return new DevExpress.ui.dxDiagram(element, {});
}

export async function changeDiagramDataSource(diagram, datasource) {
//    const value = !!datasource ? datasource.mean : null;
//    const subValues = !!datasource ? [datasource.min, datasource.max] : [];

//    diagram.value(value);
//    diagram.subvalues(subValues);
}
