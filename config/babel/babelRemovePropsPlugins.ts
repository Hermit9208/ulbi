import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || [];

                path.traverse({
                    JSXIdentifier(currentPath) {
                        const nodeName = currentPath.node.name;

                        if (forbidden.includes(nodeName)) {
                            currentPath.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
