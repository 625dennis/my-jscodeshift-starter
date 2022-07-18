import { Transform } from 'jscodeshift';

const transform: Transform = (file, api) => {
    const jscodeshift = api.jscodeshift;
    const root = jscodeshift(file.source);

    root.find(jscodeshift.VariableDeclaration)
        .filter(path => path.value.kind === 'var')
        .forEach(path => {
            path.value.kind = 'let';
        });

    return root.toSource();
};

export default transform;